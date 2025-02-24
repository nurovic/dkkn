import { useCallback, useMemo, memo } from "react";
import { FiHeart } from "react-icons/fi";
import { useFavoriteToggle } from "../../hooks/useFavorite";
import type { FavoriteToggleType } from "../../types/favorite";

const Favorite = ({ id, isFavorite }: { id: string; isFavorite: boolean }) => {
  console.log("Favorite Button Rendered:", id);

  const { mutate: toggleFavorite } = useFavoriteToggle();

  const handleAddToFavorites = useCallback(() => {
    const body: FavoriteToggleType = {
      userId: "67b9ce55e4b6942c756e2822",
      productId: id,
    };
    toggleFavorite(body);
  }, [id, toggleFavorite]);

  const iconColor = useMemo(() => (isFavorite ? "red" : ""), [isFavorite]);
  const iconFill = useMemo(() => (isFavorite ? "red" : "#fff"), [isFavorite]);

  return (
    <button
      className="absolute top-2 right-2 p-1.5 rounded-full bg-white text-gray-600 hover:text-red-500"
      onClick={(e) => {
        e.preventDefault();
        handleAddToFavorites();
      }}
    >
      <FiHeart size={20} color={iconColor} fill={iconFill} />
    </button>
  );
};

export default memo(Favorite);
