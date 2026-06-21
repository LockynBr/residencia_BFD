// import { useState } from "react";

// import DadosClinicos from "../forms/pacienteForms/DadosClinicos";
// import ArquivoExame from "../forms/pacienteForms/ArquivoExame";

// export default function ExameFormModal({
//   paciente,
//   onClose,
// }) {
//   const [formData, setFormData] = useState({
//     hospitalClinica: "",
//     medicoSolicitante: "",
//     crm: "",
//     dataExame: "",
//     tipoExame: "",
//     observacoes: "",
//     alergias: "",
//     arquivoExame: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSalvar = () => {
//     console.log(
//       "Paciente:",
//       paciente.id,
//       formData
//     );

//     onClose();
//   };

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50">

//   <div className="flex min-h-full items-start justify-center p-4 md:p-6">
//       <div className="bg-white rounded-xl w-full max-w-4xl p-6 my-8">
//         <div className="flex justify-between mb-6">
//           <h2 className="text-xl font-bold">
//             Adicionar Exame
//           </h2>

//           <button onClick={onClose}>
//             ✕
//           </button>
//         </div>

//         <DadosClinicos
//           formData={formData}
//           handleChange={handleChange}
//         />

//         <ArquivoExame
//           formData={formData}
//           handleChange={handleChange}
//           setFormData={setFormData}
//         />

//         <div className="flex justify-end gap-3 mt-6">
//           <button
//             onClick={onClose}
//             className="px-4 py-2 border rounded-md"
//           >
//             Cancelar
//           </button>

//           <button
//             onClick={handleSalvar}
//             className="px-4 py-2 bg-green-700 text-white rounded-md"
//           >
//             Salvar Exame
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// }

import { useState } from "react";

import Button from "../ui/Button";
import DadosClinicos from "../forms/pacienteForms/DadosClinicos";
import ArquivoExame from "../forms/pacienteForms/ArquivoExame";

export default function ExameFormModal({
  paciente,
  onClose,
}) {
  const [formData, setFormData] = useState({
    hospitalClinica: "",
    medicoSolicitante: "",
    crm: "",
    dataExame: "",
    tipoExame: "",
    observacoes: "",
    alergias: "",
    arquivoExame: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSalvar = () => {
    console.log(
      "Paciente:",
      paciente.id,
      formData
    );

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
      <div className="bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)] rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl">

        {/* Header */}
        <div className="flex justify-between items-center p-6">
          <div>
            <h2 className="text-2xl font-bold">
              Adicionar Exame
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Paciente: {paciente.nomeCompleto}
            </p>
          </div>

          <button
            onClick={onClose}
            className="cursor-pointer text-lg hover:text-red-500 transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-6 ">

          {/* Dados Clínicos */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Dados Clínicos
            </h3>

            <DadosClinicos
              formData={formData}
              handleChange={handleChange}
            />
          </section>

          {/* Arquivo do Exame */}
          <section className="bg-gradient-to-l from-[var(--color-white-300)] via-[var(--color-white-200)] to-[var(--color-white-200)] rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">
              Arquivo do Exame
            </h3>

            <ArquivoExame
              formData={formData}
              handleChange={handleChange}
              setFormData={setFormData}
            />
          </section>
        </div>

        {/* Footer */}
        <div className="flex justify-around gap-3 p-6 bg-gradient-to-l from-[var(--color-white-200)] via-[var(--color-white-300)] to-[var(--color-white-300)]">
          <Button
         variant="danger"
            className="w-80 drop-shadow-xl drop-shadow-green-200/80 hover:red-500"
            onClick={onClose}
          >
            Cancelar
          </Button>

          <Button
          variant="primary"
            onClick={handleSalvar}
             className="w-80 drop-shadow-xl drop-shadow-green-200/80"
          >
            Salvar Exame
          </Button>
        </div>
      </div>
    </div>
  );
}