import { API_URL } from "../utils/constants";

const BASE_URL = `${API_URL}/main-categories`;

export async function getMainCategories() {
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
    const categories = await data.data;
   
    return categories;
  } catch (error) {
    console.error("Error in feching categories:", error);
    return { error: error.message };
  }
}
