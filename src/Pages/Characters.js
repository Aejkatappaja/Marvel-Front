import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Characters = () => {
  const [data, setData] = useState();
  const [name, setName] = useState("");
  const [skip, setSkip] = useState(0);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--marvel-back--dlbmkp758p4j.code.run/characters?name=${name}&skip=${skip}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [name, skip]);

  return isLoading ? (
    <section className="fav">
      <article>
        <div className="water"> </div>
      </article>
    </section>
  ) : (
    <main>
      <div className="searchBar">
        <button
          className={skip === 0 ? "marvelButtonOff" : "marvelButton"}
          onClick={() => setSkip(skip - 100)}
        >
          <span> ⏮ </span>
        </button>

        <input
          type="text"
          placeholder="Search . . ."
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button
          className={skip < 1301 ? "marvelButton" : "marvelButtonOff"}
          onClick={() => setSkip(skip + 100)}
        >
          ⏭
        </button>
      </div>
      <section className="characters">
        {data.results.map((elem, index) => {
          if (
            elem.thumbnail.path ===
            `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`
          ) {
            return null;
          } else {
            return (
              <section className="borderCard" key={index}>
                <Link
                  to="/character"
                  style={{ textDecoration: "inherit", color: "inherit" }}
                  state={{ id: elem._id }}
                >
                  <article className="card">
                    <div className="titleCard">
                      <h2>{elem.name}</h2>
                    </div>
                    <div className="borderImg">
                      <img
                        className="heroes"
                        src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                        alt=""
                      />
                    </div>
                  </article>
                </Link>
              </section>
            );
          }
        })}{" "}
      </section>
      <div className="buttonBar">
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={150}
          EasingType="easeOutCubic"
          AnimationDuration={1000}
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "rgb(24, 23, 23)",
          }}
          ToggledStyle={{}}
        />
      </div>
      ;
    </main>
  );
};
export default Characters;
