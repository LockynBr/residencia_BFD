export default function SidebarHeader({ collapsed }) {
  return (
    <div
      className={`
        flex
        items-center
        mb-10

        ${
          collapsed
            ? "justify-center"
            : "gap-3"
        }
      `}
    >
      <div
        className="
          w-12
          h-12
          rounded-xl
          bg-green-500

          flex
          items-center
          justify-center

          text-[var(--color-neutral-100)]
          font-bold

          shrink-0
        "
      >
        L
      </div>

      {!collapsed && (
        <div>
          <h2 className="font-bold text-lg text-[var(--color-neutral-100)]">
            NomeSistema
          </h2>

          <p className="text-xs text-[var(--color-neutral-200)]">
            Diagnóstico
          </p>
        </div>
      )}
    </div>
  );
}