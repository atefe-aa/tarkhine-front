import { API_URL } from "../utils/constants";

const BASE_URL = `${API_URL}/cart`;

export async function getCart() {
  try {
    const res = await fetch(BASE_URL, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok)
      throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");

    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");
  }
}

export async function getDetailedCart() {
  try {
    const res = await fetch(`${API_URL}/detailedcart`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok)
      throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");

    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");
  }
}

export async function updateCart(cartData) {
  try {
    const res = await fetch(BASE_URL, {
      method: "POST",
      body: JSON.stringify(cartData),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    if (!res.ok) throw new Error("خطایی در هنگام ثبت اطلاعات سبد خرید رخ داد.");

    const data = await res.json();

    if (data.error !== undefined) throw new Error("خطای سرور!");
    return data;
  } catch (e) {
    console.error(e);
    throw new Error("خطایی در هنگام ثبت اطلاعات سبد خرید رخ داد.");
  }
}

export async function emptyCart() {
  try {
    const res = await fetch(`${API_URL}/emptycart`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });

    if (!res.ok)
      throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");

    const data = await res.json();

    return data;
  } catch (e) {
    console.error(e);
    throw new Error("خطایی در هنگام گرفتن اطلاعات سبد خرید رخ داد.");
  }
}
