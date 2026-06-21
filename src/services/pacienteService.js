const API_URL = "http://127.0.0.1:8000/api/pacientes/";

function normalizePacientePayload(data) {
  return {
    ...data,
    dataNascimento: data.dataNascimento || null,
    dataExame: data.dataExame || null,
  };
}

export async function listarPacientes() {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data.pacientes;
}

export async function criarPaciente(paciente) {
  const safePayload = normalizePacientePayload(paciente);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(safePayload),
  });

  const data = await response.json();

  console.log("STATUS:", response.status);
  console.log("BODY:", data);

  if (!response.ok) {
    throw data;
  }

  return data;
}