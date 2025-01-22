import Cookies from "js-cookie";

export async function createDiscount(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}discount/create-discount`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}

export async function getDiscounts() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}discount/get-discounts`,
      {
        headers: {
          Authorization: "Bearer " + Cookies.get("token"),
        },
      },
    );

    return response.json();
  } catch (error) {
    return new Response("Something went wrong...", { status: 500 });
  }
}

export async function destroyDiscount(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}discount/delete-discount`,
    {
      method: "POST",
      body: data,
      headers: {
        Authorization: "Bearer " + Cookies.get("token"),
      },
    },
  );

  return response.json();
}
