
import { createClient } from "@vendia/client";

const client = createClient({
  apiUrl: import.meta.env.VITE_VENDIA_API_URL,
  apiKey: import.meta.env.VITE_VENDIA_API_KEY,
});

export const { Game } = client.entities;
