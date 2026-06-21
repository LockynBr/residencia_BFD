export default function CadastroPacienteFooter({
  aba,
  avancar,
  voltar,
  cancelar,
  handleSubmit,
}) {
  return (
    <div className="flex justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-100">
      <button
        type="button"
        onClick={cancelar}
        className="px-4 py-2 border border-neutral-200 rounded-md text-green-900 bg-white hover:bg-neutral-100 transition-colors cursor-pointer body-font"
      >
        Cancelar
      </button>

      {aba > 1 && (
        <button
          type="button"
          onClick={voltar}
          className="px-4 py-2 border border-neutral-200 rounded-md text-green-900 bg-white hover:bg-neutral-100 transition-colors cursor-pointer body-font"
        >
          Voltar
        </button>

        
      )}

      {aba < 2 && (
        <button
          type="button"
          onClick={avancar}
          className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors cursor-pointer font-medium body-font"
        >
          Avançar
        </button>

        
      )
      
     }

      <button
          type="button"
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors cursor-pointer font-medium body-font"
        >
          Confirmar
        </button>


    </div>
  );
}
