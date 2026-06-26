import Link from "next/link";

export default function SignupSuccessPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-4 py-12">
      <div className="w-full max-w-md rounded-3xl bg-white p-10 shadow-sm ring-1 ring-black/5 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Focus Sentry
        </p>
        <h1 className="mt-6 text-3xl font-semibold text-zinc-950">
          You&apos;re almost ready
        </h1>
        <p className="mt-4 text-sm leading-6 text-zinc-600">
          We sent a confirmation link to your inbox. Click the link to approve
          your email and complete signup. After confirmation, continue to login
          and start tracking your focus.
        </p>

        <div className="mt-8 space-y-4">
          <Link
            href="/login"
            className="inline-flex w-full justify-center rounded-2xl bg-sky-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-700"
          >
            Go to login
          </Link>
          <Link
            href="/signup"
            className="inline-flex w-full justify-center rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
          >
            Back to signup
          </Link>
          <Link
            href="/"
            className="inline-flex w-full justify-center rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Return to homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
