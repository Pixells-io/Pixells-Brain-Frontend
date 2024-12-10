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

export async function editUser(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}user/edit-user`,
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

export async function destroyUser(data) {
  const response = await fetch(
    `${import.meta.env.VITE_SERVER_URL}user/delete-user`,
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

export async function getUsers() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_URL}user/get-users`,
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
