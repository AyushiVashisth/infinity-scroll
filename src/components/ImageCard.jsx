import { useState } from "react";

export const ImageCard = ({ image }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="image-card">
      <img
        src={image.urls.small}
        alt={image.alt_description || "Random image"}
      />
      <div className="image-details">
        <p>{image.user.name}</p>
        <button
          className={`favorite-button ${isFavorite ? "active" : ""}`}
          onClick={toggleFavorite}
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
};
