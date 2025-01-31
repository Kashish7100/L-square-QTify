const CarouselItem = ({ item }) => {
    return (
      <div className="carousel-item">
        <img src={item.image} alt={item.title} />
        <div className="details">
          <h4>{item.title}</h4>
          <p>{item.artists.join(", ")}</p>
          <p>{item.genre.label}</p>
          <p>{item.likes} Likes</p>
        </div>
      </div>
    );
  };
  