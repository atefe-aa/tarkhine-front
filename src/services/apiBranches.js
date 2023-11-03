import { API_URL } from "../utils/constants";

const BASE_URL = `${API_URL}/branches`;

export async function getBranches() {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!res.ok) {
      // Handle non-2xx HTTP status codes as errors
      throw new Error(`Request failed with status: ${res.status}`);
    }

    const data = await res.json();
    const branches = await data.data;
    return  branches ;
  } catch (error) {
    console.error("Error in feching branches:", error);
    return { error: error.message }; 
  }
}
