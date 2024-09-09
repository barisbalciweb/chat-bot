const apiURL = import.meta.env.VITE_BASE_API_URL;

export const saveMessage = async (post) => {
  try {
    const res = await fetch(`${apiURL}/api/conversations/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
      credentials: "include",
    });
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e);
  }
};
