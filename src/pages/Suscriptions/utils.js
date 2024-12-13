import Cookies from "js-cookie";

export async function getSuscriptions() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}suscriptions/get-suscriptions`,
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
