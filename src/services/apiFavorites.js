import { API_URL } from "../utils/constants";

const BASE_URL = `${API_URL}/favorites`;

export async function getFavorites() {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Somthing went wrong fetching favorites!");

    const data = await res.json();

    if (data.error !== undefined) throw new Error(data.error.message);
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(["somthing went wrong fetching favorites!"]);
  }
}

export async function updateFavorites(foodId) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify({ foodId }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!res.ok)  throw new Error("خطایی رخ داده است.");

    const data = await res.json();

    if (data.error !== undefined) throw new Error(data.error.message);

    return data;
  } catch (e) {
    console.error(e);
    throw new Error("خطایی رخ داده است.");
  }
}
