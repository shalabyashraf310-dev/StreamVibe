import spiderMan from "../assets/spider_man_PNG76.png";
function Hero(props) {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>{props.title}</h1>

        <p>{props.description}</p>

        <video controls>
          <source src={props.video} type="video/mp4" />
        </video>
      </div>

      <div className="hero-image">
        <img
          src={spiderMan}
          alt="Spider-Man"
          loading="eager"
          fetchPriority="high"
        />
      </div>
    </section>
  );
}

export default Hero;
