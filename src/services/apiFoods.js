import { API_URL } from "../utils/constants";

export async function search({ query }) {
  if (!query) return null;
  if(query?.length < 3) return;
  
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
    
    const data = await res.json();
    
    if (data.error !== undefined) throw new Error(data.error);
    return data.data;
  } catch (e) {
    console.error(e);
    throw new Error(["somthing went wrong searching data!"]);
  }
}
