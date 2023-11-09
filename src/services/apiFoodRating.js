import { API_URL } from "../utils/constants";

export async function rateFood(ratingData) {
  
  if (!ratingData.rating || !ratingData.food_id) return null;
  try {
    const res = await fetch(`${API_URL}/foodRating`, {
      method: "POST",
      body: JSON.stringify(ratingData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("Somthing went wrong store rating!");

    const data = await res.json();

    if (data.error !== undefined) throw new Error(data.error.message);
    return data;
  } catch (e) {
    console.error(e);
    throw new Error(["somthing went wrong store rating!"]);
  }
}
