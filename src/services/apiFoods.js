import { API_URL } from "../utils/constants";

export async function search({ query }) {
  if (!query) return;

  try {
    const res = await fetch(`${API_URL}/search`, {
      method: "POST",
      body: JSON.stringify({ query }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Somthing went wrong searching data!");

    const { data, error } = await res.json();

    return { data, error };
  } catch (e) {
    console.error(e);
    throw new Error(["somthing went wrong searching data!"]);
  }
}
