import React, { useState, useEffect, useCallback, useRef } from "react";
const UNSPLASH_ACCESS_KEY = "JurlX-SHAtpEpRXaw4Eq89nBTwAcz1XPZHpnW5SG9qQ";

const App = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef(null);
  const loadMoreTriggerRef = useRef(null);

  const fetchImages = useCallback(
    async (query = "") => {
      if (loading) return;

      setLoading(true);
      try {
        const url = query
          ? `https://api.unsplash.com/search/photos?query=${query}&page=${page}&per_page=12&client_id=${UNSPLASH_ACCESS_KEY}`
          : `https://api.unsplash.com/photos/random?count=12&client_id=${UNSPLASH_ACCESS_KEY}`;

        const response = await fetch(url);
        const data = await response.json();

        const newImages = query ? data.results : data;

        if (newImages.length === 0) {
          setHasMore(false);
          return;
        }

        setImages((prevImages) =>
          page === 1 ? newImages : [...prevImages, ...newImages]
        );
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error("Error fetching images:", error);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    },
    [page, loading]
  );

  useEffect(() => {
    if (!loadMoreTriggerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !loading) {
          fetchImages(searchQuery);
        }
      },
      { threshold: 0.1 }
    );

    observerRef.current = observer;
    observer.observe(loadMoreTriggerRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [fetchImages, hasMore, loading, searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setImages([]);
    setPage(1);
    setHasMore(true);
    fetchImages(searchQuery);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="app-container">
      <div className="search-container">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search images..."
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>

      {images.length === 0 && !loading ? (
        <div>No images found</div>
      ) : (
        <div className="image-grid">
          {images.map((image, index) => (
            <ImageCard key={`${image.id}-${index}`} image={image} />
          ))}
        </div>
      )}

      <div ref={loadMoreTriggerRef} className="loading-indicator">
        {loading && <div>Loading...</div>}

        {!hasMore && <div>No more images to load</div>}
      </div>
    </div>
  );
};

const ImageCard = ({ image }) => {
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

export default App;
