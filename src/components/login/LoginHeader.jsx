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
        bg-green-900
        text-white
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
          text-green-900
        "
        >
          NomeSistema
        </h1>

        <p className="text-green-800">
          Diagnóstico
        </p>
      </div>
    </div>
  );
}