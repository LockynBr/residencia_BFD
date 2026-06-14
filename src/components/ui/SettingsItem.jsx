export default function SettingItem({
  icon: Icon,
  title,
  description,
  children,
  border = true,
}) {
  return (
    <div
      className={`flex items-center justify-between py-4 ${
        border ? 'border-b border-gray-200' : ''
      }`}
    >
      <div className="flex gap-4">
        {Icon && <Icon className="text-xl text-gray-600 mt-1" />}

        <div>
          <h2 className="font-medium">{title}</h2>

          <p className="text-sm text-gray-500">{description}</p>
        </div>
      </div>

      {children}
    </div>
  );
}
