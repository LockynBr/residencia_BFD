import { useEffect, useState } from "react";
import { listarPacientes } from "../services/pacienteService";

export default function usePacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarPacientes() {
      try {
        const dados = await listarPacientes();
        setPacientes(dados);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    carregarPacientes();
  }, []);

  return {
    pacientes,
    loading,
  };
}