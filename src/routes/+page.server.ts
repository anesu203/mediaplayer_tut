import type { PageServerLoad } from "./$types";

export const load = (async ({fetch}) => {
  
  async function getUser() {
    return { username: "John" };
  }

 

  async function getData (route:string){
    let response = await fetch (route);

    let list:any[] = await response.json();
    return list;
  }
  

  return {
    user: await getUser(),
    artists: await getData("/api/music/artists"),
    trending: await getData("/api/music/trending"),
    charts: await getData("/api/music/charts"),
  };


}) satisfies PageServerLoad;

