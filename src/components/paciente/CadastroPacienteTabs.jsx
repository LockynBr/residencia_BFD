export default function CadastroPacienteTabs({ aba, setAba }) {
  const tabs = [
    "Dados Pessoais",
    "Endereço",
  ];

  return (
    <div className="flex border-b border-neutral-200 bg-neutral-100">
      {tabs.map((tab, index) => {
        const numeroAba = index + 1;

        return (
          <button
            key={tab}
            onClick={() => setAba(numeroAba)}
            className={`flex-1 text-center py-3 transition-all duration-200 body-font cursor-pointer text-[var(--color-green-700)] ${
              aba === numeroAba
                ? "text-[var(--color-green-800)] border-b-2 border-r-1 border-[var(--color-secondary-200)] bg-linear-to-l from-[var(--color-secondary-100)] via-[var(--color-neutral-100)] to-[var(--color-secondary-100)]"
                : "text-[var(--color-green-700)] hover:text-[var(--color-green-500)] hover:bg-linear-to-l from-[var(--color-secondary-100)] via-[var(--color-neutral-100)] to-[var(--color-secondary-100)]"
            }`}
          >
            {tab}
          </button>
        );
      })}
    </div>
  );
}