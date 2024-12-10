import Cookies from "js-cookie";

export async function loginUser(data) {
  const response = await fetch(`${import.meta.env.VITE_SERVER_URL}auth/login`, {
    method: "POST",
    body: data,
    headers: {
      Authorization: "Bearer " + Cookies.get("token"),
    },
  });

  return response.json();
}

export async function getUserByToken() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}auth/get-auth-user`,
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
