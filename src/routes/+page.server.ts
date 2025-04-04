import type { PageServerLoad } from "./$types";

export const load = (async () => {
  async function getUser() {
    return { username: "John" };
  }

  return {
    user: await getUser(),
    age: 20,
    name: "John Doe",
  };
}) satisfies PageServerLoad;
