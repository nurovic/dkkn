import service from "./baseUrl";
import type { FavoriteToggleType } from "../types/favorite";

export const FavoriteToggle = async (body: FavoriteToggleType): Promise<void> => {
  const response = await service.post("/favorite/toggle",body);
  return response.data;
}
