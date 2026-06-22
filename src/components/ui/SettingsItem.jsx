export default function SettingItem({
  icon: Icon,
  title,
  description,
  children,
  border = true,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 gap-3 lg:gap-0 ${
        border ? 'border-b border-gray-200' : ''
      }`}
    >
      <div className="flex gap-4 items-start min-w-0">
        {Icon && <Icon className="text-xl text-gray-600 mt-0.5" />}

        <div>
          <h2 className="font-medium">{title}</h2>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      <div className="w-full lg:w-auto min-w-0">{children}</div>
    </div>
  );
}
