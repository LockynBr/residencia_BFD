export default function Modal({
  isOpen,
  title,
  children,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div
        className="
          w-full
          max-w-md
          rounded-2xl
          bg-white
          p-6
          shadow-xl
        "
      >
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-green-800)]">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}