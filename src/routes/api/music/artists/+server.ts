import { artists } from "$lib/server/data";
import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { artificialDelay } from "$lib/js/utils";

export const GET: RequestHandler = async () => {
  // Simulate a delay for demonstration purposes
  await artificialDelay(Math.random() * 1000);

  // Return the artists data as JSON
  return json(artists);
};
