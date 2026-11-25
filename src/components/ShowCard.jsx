function ShowCard(props) {
  return (
    <div className="show-card">
      <img src={props.poster} alt={props.title} />

      <h3>{props.title}</h3>

      <p>{props.genre}</p>

      <p>{props.year}</p>

      <p>⭐ {props.rating}</p>
    </div>
  );
}

export default ShowCard;