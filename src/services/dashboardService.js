const API_URL = "http://127.0.0.1:8000/api/dashboard/";

export async function buscarDashboard() {
  const response = await fetch(API_URL);

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
}