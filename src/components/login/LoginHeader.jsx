//componente de cabeçalho para a tela de login, contendo o logo e o nome do sistema

export default function LoginHeader() {
  return (
    <div
      className="
      flex
      items-center
      gap-4
      mb-10
    "
    >
      <div
        className="
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-lg
        bg-[var(--color-green-800)]
        text-[var(--color-neutral-100)]
        shadow-lg
        
      "
      >
        Logo
      </div>

      <div>
        <h1
          className="
          heading-font
          text-2xl
          font-medium
          text-[var(--color-green-800)]
        "
        >
          NomeSistema
        </h1>

        <p className="text-[var(--color-neutral-100)]">
          Diagnóstico
        </p>
      </div>
    </div>
  );
}