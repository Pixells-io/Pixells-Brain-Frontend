import Cookies from "js-cookie";

export async function createUser(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}user/save-user`,
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
