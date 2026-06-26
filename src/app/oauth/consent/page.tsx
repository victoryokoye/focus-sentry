"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type SessionUrlAuth = {
  getSessionFromUrl?: (options: { storeSession: boolean }) => Promise<unknown>;
};

type SessionUser = {
  email?: string;
  email_confirmed_at?: string;
  confirmed_at?: string;
};

type SessionResult = {
  data?: {
    session?: {
      user?: SessionUser;
    };
    user?: SessionUser;
  };
  error?: {
    message?: string;
  };
};

export default function OAuthConsentPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState(
    "Checking your email verification status...",
  );
  const [email, setEmail] = useState<string | null>(null);
  const [verified, setVerified] = useState(false);
  const [hasSession, setHasSession] = useState(false);

  useEffect(() => {
    async function verifyEmail() {
      setLoading(true);
      setError(null);

      try {
        const searchParams = new URLSearchParams(
          window.location.search + window.location.hash.replace(/^#/, "?"),
        );
        const emailFromQuery = searchParams.get("email");

        const auth = supabase.auth as SessionUrlAuth;
        const result = (
          typeof auth.getSessionFromUrl === "function"
            ? await auth.getSessionFromUrl({ storeSession: true })
            : await supabase.auth.getSession()
        ) as SessionResult;

        const data = result?.data ?? {};
        const session = data?.session ?? null;
        const user = session?.user ?? data?.user ?? null;
        const userEmail =
          typeof user?.email === "string"
            ? user.email
            : (emailFromQuery ?? null);

        setEmail(userEmail);

        if (result?.error) {
          if (window.location.search.includes("access_token")) {
            setError(
              "Unable to process the verification link. Please try logging in manually after confirming your email.",
            );
          } else {
            setError(result.error.message ?? "Unable to verify email.");
          }
          setStatus("Email verification failed.");
          return;
        }

        if (user) {
          setHasSession(true);
          const isConfirmed = Boolean(
            user.email_confirmed_at || user.confirmed_at,
          );
          setVerified(isConfirmed);

          if (isConfirmed) {
            setStatus(
              "Success! Your email is verified. Continue to your dashboard.",
            );
          } else {
            setStatus(
              "Your verification link was received. If your email is still unverified, check your inbox and click the link again.",
            );
          }
          return;
        }

        setStatus(
          "A verification link was sent. Open the email and click the link to verify your account.",
        );
      } catch (error) {
        setError(
          error instanceof Error
            ? error.message
            : "Something went wrong while checking your verification. Please refresh and try again.",
        );
        setStatus("Unable to verify your email right now.");
      } finally {
        setLoading(false);
      }
    }

    verifyEmail();
  }, []);

  const handleContinue = () => {
    if (verified && hasSession) {
      router.push("/dashboard");
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Focus Sentry
          </p>
          <h1 className="mt-4 text-3xl font-semibold text-zinc-900">
            Email verification
          </h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Confirm your email address before signing in to Focus Sentry.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {loading ? (
            <div className="rounded-3xl bg-slate-950/5 p-6 text-center text-slate-700">
              Checking verification status…
            </div>
          ) : null}

          {error ? (
            <div className="rounded-3xl bg-rose-50 p-6 text-sm text-rose-700">
              {error}
            </div>
          ) : null}

          {!loading ? (
            <div className="rounded-3xl bg-slate-950/5 p-6">
              <p className="text-sm text-slate-500">Email</p>
              <p className="mt-2 text-lg font-semibold text-slate-900">
                {email ?? "Not available"}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-600">{status}</p>
            </div>
          ) : null}

          <button
            type="button"
            onClick={handleContinue}
            disabled={loading}
            className="mt-3 w-full rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-sky-400"
          >
            {loading
              ? "Please wait..."
              : verified && hasSession
                ? "Go to dashboard"
                : "Go to login"}
          </button>

          <div className="grid gap-3 sm:grid-cols-2">
            <Link
              href="/login"
              className="inline-flex justify-center rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
            >
              Sign in manually
            </Link>
            <Link
              href="/"
              className="inline-flex justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
