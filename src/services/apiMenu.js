import { API_URL } from "../utils/constants";

const BASE_URL = API_URL + "/menu";

export async function getPopularMenu(branchId) {
  try {
    const res = await fetch(`${BASE_URL}/popular/${branchId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) throw new Error("Somthing went wrong fetching menu!");

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data.data;
  } catch (e) {
    console.error(e);
    throw new Error("somthing went wrong fetching menu");
  }
}

export async function getRecommendedMenu(branchId) {
  try {
    const res = await fetch(`${BASE_URL}/recommended/${branchId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) throw new Error("Somthing went wrong fetching menu!");

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data.data;
  } catch (e) {
    console.error(e);
    throw new Error("somthing went wrong fetching menu");
  }
}

export async function getMenuByCategory({branchId, categoryId}) {
  try {
    const res = await fetch(`${BASE_URL}/${branchId}`, {
      method: "POST",
      body: JSON.stringify({ categoryId }),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    if (!res.ok) throw new Error("Somthing went wrong fetching menu!");

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data.data;
  } catch (e) {
    console.error(e);
    throw new Error("somthing went wrong fetching menu");
  }
}



export async function getBranchMenu({branchId}) {
  try {
    const res = await fetch(`${BASE_URL}/${branchId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    });
    if (!res.ok) throw new Error("Somthing went wrong fetching menu!");

    const data = await res.json();

    if (data.error) throw new Error(data.error);

    return data.data;
  } catch (e) {
    console.error(e);
    throw new Error("somthing went wrong fetching menu");
  }
}
