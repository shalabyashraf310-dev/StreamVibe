import ShowCard from "./ShowCard";

function ShowRow(props) {
  return (
    <section>
      <h2>{props.title}</h2>

      <div className="shows-container">
        {props.shows.map((show) => (
          <ShowCard
            key={show.id}
            title={show.title}
            genre={show.genre}
            year={show.year}
            rating={show.rating}
            poster={show.poster}
          />
        ))}
      </div>
    </section>
  );
}

export default ShowRow;