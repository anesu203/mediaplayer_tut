import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";
import { trendinSongs } from "$lib/server/data";
import { artificialDelay } from "$lib/js/utils";

export const GET: RequestHandler = async () => {
  // Simulate a delay for demonstration purposes
  await artificialDelay(Math.random() * 1000);
  // Return the trending songs data as JSON
  return json(trendinSongs);
};
