import axios from "axios";
import { useState, useEffect } from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

const Comics = () => {
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--marvel-back--dlbmkp758p4j.code.run/comics?title=${title}&skip=${skip}`
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, skip]);

  return isLoading ? (
    <section className="fav">
      <article>
        <div class="water"> </div>
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
            setTitle(e.target.value);
          }}
        />
        <button className="marvelButton" onClick={() => setSkip(skip + 100)}>
          ⏭
        </button>
      </div>
      <section className="comics">
        {data.results.map((elem, index) => {
          if (
            elem.thumbnail.path ===
            `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available`
          ) {
            return null;
          } else {
            return (
              <div
                className="books"
                data-hover={
                  elem.description
                    ? elem.description
                    : "No description available for this comics."
                }
                key={index}
              >
                <div className="comicCover">
                  <img
                    src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                    alt="comics"
                  />
                </div>
                <div className="comicTitle">
                  <h2 className="textTitle">{elem.title}</h2>
                </div>
              </div>
            );
          }
        })}
      </section>
      <div>
        <ScrollUpButton
          StopPosition={0}
          ShowAtPosition={650}
          EasingType="easeInCubic"
          AnimationDuration={1000}
          ContainerClassName="ScrollUpButton"
          TransitionClassName="ScrollUpButton__Toggled"
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: " rgb(24, 23, 23)",
          }}
          ToggledStyle={{}}
        />
      </div>
    </main>
  );
};

export default Comics;
