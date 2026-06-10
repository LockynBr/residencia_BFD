export default function SidebarHeader({
  collapsed,
}) {
  return (
    <div
      className="
        flex
        items-center
        gap-3
        mb-10
        overflow-hidden
      "
    >
      <div
        className="
          w-14
          h-14
          rounded-xl
          bg-[var(--color-secondary-100)]

          flex
          items-center
          justify-center

          text-[var(--color-green-700)]
          font-bold

          shrink-0
        "
      >
        L
      </div>

      <div
        className={`
          overflow-hidden
          whitespace-nowrap

          transition-all
          duration-300

          ${
            collapsed
              ? "w-0 opacity-0"
              : "w-full opacity-100"
          }
        `}
      >
        <h2
          className="
            font-bold
            text-lg
            text-[var(--color-neutral-100)]
          "
        >
          NomeSistema
        </h2>

        <p
          className="
            text-xs
            text-[var(--color-neutral-200)]
          "
        >
          Diagnóstico
        </p>
      </div>
    </div>
  );
}