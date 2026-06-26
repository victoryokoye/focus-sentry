import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-between px-6 py-16 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-12">
          <section className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Focus Sentry
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Build better habits and protect your focus.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Focus Sentry helps you make focused work a daily routine. Track
              habits, time your sessions, and stay aligned with the habits that
              matter most.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-sky-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
              >
                Start free
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-7 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-400 hover:bg-slate-800"
              >
                Log in
              </Link>
            </div>
          </section>

          <section className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Habits
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">
                Build consistent routines
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Keep your daily habits visible and stay motivated with
                streak-based progress.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Focus
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">
                Protect deep work
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Track focused sessions and minimize distractions so every minute
                counts.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-slate-950/10">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                Progress
              </p>
              <h2 className="mt-4 text-xl font-semibold text-white">
                See how you improve
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Get clear feedback on streaks, session lengths, and habit
                consistency.
              </p>
            </div>
          </section>
        </div>

        <section className="rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-slate-950/20">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
                Start stronger
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Focus Sentry gives your habits room to grow.
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Manage your daily routines, protect focused work, and turn
                intention into momentum. Log in or sign up to make your focus a
                habit today.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl bg-slate-950/60 p-6 text-slate-200">
              <div>
                <p className="text-sm text-sky-300">Daily focus</p>
                <p className="mt-2 text-xl font-semibold">
                  Track sessions and stay present
                </p>
              </div>
              <div>
                <p className="text-sm text-sky-300">Habit momentum</p>
                <p className="mt-2 text-xl font-semibold">
                  See progress in every streak
                </p>
              </div>
              <div>
                <p className="text-sm text-sky-300">Calm clarity</p>
                <p className="mt-2 text-xl font-semibold">
                  Keep the work that matters on top
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
