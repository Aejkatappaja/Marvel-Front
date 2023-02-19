const Favorites = ({ Favorites }) => {
  if (JSON.parse(Favorites) !== undefined && JSON.parse(Favorites) !== null) {
    return (
      <section className="las">
        <h1> Favorites </h1>
        {JSON.parse(Favorites).map((elem, key) => {
          return (
            <article key={key} className="last">
              <div className="finally">
                <img
                  src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                  alt=""
                />
              </div>{" "}
              <p>{elem.name}</p>
            </article>
          );
        })}
      </section>
    );
  }
};

export default Favorites;
