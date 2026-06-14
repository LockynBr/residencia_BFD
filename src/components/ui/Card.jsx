export default function Card({ children, className = '' }) {
  return (
    <div
      className={
        'bg-[#F8FFFB] rounded-2xl p-6 shadow-sm ' +
        (className ? ` ${className}` : '')
      }
    >
      {children}
    </div>
  );
}
