import { redirect } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default async function DashboardPage() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-slate-100">
      <div className="mx-auto w-full max-w-5xl space-y-8">
        <section className="rounded-3xl bg-slate-900/80 p-8 shadow-sm ring-1 ring-white/10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Focus Sentry
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white">
                Your habits and focus score, all in one place
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
                Stay aligned with the work that matters by tracking habits,
                timing your focus, and watching progress grow.
              </p>
            </div>

            <div className="rounded-3xl bg-sky-950/70 px-5 py-4 text-sm text-sky-200 shadow-sm ring-1 ring-sky-300/10">
              Signed in as{" "}
              <span className="font-semibold">{user.email ?? "Unknown"}</span>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h2 className="text-xl font-semibold text-zinc-900">
              Today&apos;s progress
            </h2>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Track your active streak, completed habits, and total focus time.
            </p>
            <div className="mt-6 space-y-4">
              <div className="rounded-3xl bg-zinc-50 p-4">
                <p className="text-sm text-zinc-500">Current streak</p>
                <p className="mt-2 text-3xl font-semibold text-zinc-900">
                  5 days
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl bg-zinc-50 p-4">
                  <p className="text-sm text-zinc-500">Habits completed</p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-900">7</p>
                </div>
                <div className="rounded-3xl bg-zinc-50 p-4">
                  <p className="text-sm text-zinc-500">Focus minutes</p>
                  <p className="mt-2 text-2xl font-semibold text-zinc-900">
                    132
                  </p>
                </div>
              </div>
            </div>
          </article>

          <article className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-zinc-900">
                Action timing
              </h2>
              <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
                Daily goal
              </span>
            </div>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Monitor when you start and stop focused sessions and how
              consistently you hit your timing targets.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-zinc-50 p-5">
                <p className="text-sm text-zinc-500">Longest session</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-900">
                  48 min
                </p>
              </div>
              <div className="rounded-3xl bg-zinc-50 p-5">
                <p className="text-sm text-zinc-500">Average focus</p>
                <p className="mt-2 text-2xl font-semibold text-zinc-900">
                  32 min
                </p>
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl bg-zinc-950 p-6 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-sky-400">
                Next milestone
              </p>
              <p className="mt-3 text-2xl font-semibold">
                Build a 10-day habit streak
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-300">
                Keep logging your sessions and mark habits complete to stay on
                track.
              </p>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}
