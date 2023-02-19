import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Character = ({ SaveDataToLocalStorage }) => {
  const location = useLocation();
  const { id } = location.state;
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [click, setClick] = useState(false);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await axios.get(
      `https://site--marvel-back--dlbmkp758p4j.code.run/comics/${id}`,
      {
        id: id,
      }
    );
    setData(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [id]);
  return isLoading ? (
    <section className="fav">
      <div></div>
      <article>
        <div className="water"> </div>
      </article>
    </section>
  ) : (
    <main>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {
            borderRadius: "40px",
            border: "2px solid  #696969",
            padding: "16px",
            color: "#713200",
            backgroundColor: "#181717",
            fontFamily: "Marvel",
            color: "white",
          },
        }}
      />
      <section className="charInfos">
        <button className="backUp" onClick={() => navigate(-1)}>
          ⏎
        </button>
        <div className="superInfos">
          <article className="heroProfile">
            <img
              src={`${data.thumbnail.path}.${data.thumbnail.extension}`}
              alt=""
            />
          </article>
          <div className="descHero">
            <div className="bigHeroName">
              <h1>{data.name}</h1>{" "}
              <button
                className={click ? "clicked" : "notClicked"}
                onClick={() => {
                  setClick(!click);
                  {
                    click
                      ? toast.error(`${data.name} successfully removed`)
                      : toast.success(`${data.name} successfully added`);
                  }
                  SaveDataToLocalStorage(data);
                }}
              >
                ⭑
              </button>
            </div>
            <p>
              {data.description
                ? data.description
                : "Unfortunately there isn't any  informations available for this character..."}
            </p>
            <p className="appears">
              Appears in <span>⬇</span>
            </p>
            <div className="comicsIn">
              {data.comics.map((elem, index) => {
                if (
                  elem.thumbnail.path ===
                  "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                ) {
                  return null;
                } else {
                  return (
                    <div
                      key={index}
                      className="comicsList"
                      data-hover={
                        elem.title
                          ? elem.title
                          : "No description available for this comics."
                      }
                    >
                      <div className="scrollPics">
                        <img
                          src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`}
                          alt="comics-list"
                        />
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Character;
