
function WeatherDetail({ icon, label, value }) {
  return (
    <article className="group min-w-0 rounded-2xl border border-white/10 bg-slate-950/40 p-4 transition duration-300 hover:border-sky-400/30 hover:bg-slate-900/70 sm:p-5">
      <div className="flex min-w-0 items-center gap-3 sm:gap-4">
        {/* Icon */}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-sky-400/10 text-2xl transition-colors group-hover:bg-sky-400/20 sm:h-12 sm:w-12"
          aria-hidden="true"
        >
          {icon}
        </div>

        {/* Weather detail */}
        <div className="min-w-0 flex-1">
          <p className="text-sm text-slate-400">
            {label}
          </p>

          <p className="mt-1 break-words text-lg font-bold text-white sm:text-xl">
            {value}
          </p>
        </div>
      </div>
    </article>
  );
}

export default WeatherDetail;
