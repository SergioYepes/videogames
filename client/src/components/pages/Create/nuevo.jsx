import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getGenres, postGenres } from "../../../redux/actions";
import validate from "../errors/validations";
import "../../../styles/nueva.css";
import { platformsJson } from "./platforms";
import Video from "../../../assets/videos/createBackground.mp4";
import CustomVideo from "../../UI/Atoms/CustomVideo.jsx";

function Nueva() {
  const dis = useDispatch();
  const his = useHistory();
  const genres = useSelector((state) => state.genres);
  const validPlatformNames = platformsJson.map((platform) => platform.name);

  const [error, setError] = useState({});
  const [Formulario, setFormulario] = useState({
    name: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
    background_image: "",
    genres: [],
  });
  useEffect(() => {
    dis(getGenres());
  }, [dis]);

  function handleChange(e) {
    setFormulario({
      ...Formulario,
      [e.target.name]: e.target.value,
    });
    setError(
      validate({
        ...Formulario,
        [e.target.name]: e.target.value,
      })
    );
    console.log(Formulario);
  }
  function handleReset(){
    setFormulario({
      name: "",
      description: "",
      released: "",
      rating: "",
      platforms: "",
      background_image: "",
      genres: [],
    })
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validate(Formulario, validPlatformNames));
    if (
      !Object.getOwnPropertyNames(error).length &&
      Object.values(Formulario).every(Boolean)
    ) {
      dis(postGenres(Formulario));
      alert("Se ha creado el juego en esta base de datos");
      setFormulario({
        name: "",
        description: "",
        released: "",
        rating: "",
        platforms: "",
        lifeSpan: "",
        background_image: "",
        genres: [],
      });
      his.push("/home");
    } else {
      alert("complete los campos correspondientes");
    }
  }
  function handleSelect(e) {
    if (!Formulario.genres.includes(e.target.value)) {
      setFormulario((prevFormulario) => ({
        ...prevFormulario,
        genres: [...prevFormulario.genres, e.target.value],
      }));
    }
  }

  function handleDelete(e) {
    setFormulario({
      ...Formulario,
      genres: Formulario.genres.filter((genres) => genres !== e),
    });
  }

  return (
    <section className="divCreate">
      <CustomVideo Video={Video}/>
      <header className="createHeader">
        <Link to="/home">
        <button className="LinkC">Home</button>
        </Link>
      </header>
      
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="titleC">New Game creation </h1>
        <section className="firstSection">
          <div>
            <h4>
              <label>Name: </label>
            </h4>
            <input
              type="text"
              name="name"
              value={Formulario.name}
              placeholder="Insert name..."
              onChange={(e) => handleChange(e)}
            />
            {error.name && (
              <p className="error">
                <strong>{error.name}</strong>
              </p>
            )}
          </div>
          <div>
            <h4>
              <label>Description: </label>
            </h4>
            <input
              type="text"
              name="description"
              value={Formulario.description}
              placeholder="Insert Description..."
              onChange={(e) => handleChange(e)}
            />
            {error.description && (
              <p className="error">
                <strong>{error.description}</strong>
              </p>
            )}
          </div>
        </section>
        <section className="secondSection">
          <div>
            <h4>
              <label>Relased: </label>
            </h4>
            <input
              type="date"
              name="released"
              value={Formulario.released}
              placeholder="Insert released..."
              onChange={(e) => handleChange(e)}
            />
            {error.released && (
              <p className="error">
                <strong>{error.released}</strong>
              </p>
            )}
          </div>
          <div>
            <h4>
              <label>Platforms: </label>
            </h4>
            <input
              type="text"
              name="platforms"
              value={Formulario.platforms}
              placeholder="Insert Platforms"
              onChange={(e) => handleChange(e)}
            />
            {error.platforms && (
              <p className="error">
                <strong>{error.platforms}</strong>
              </p>
            )}
          </div>
        </section>
        <section className="thirdSection">
          <div>
            <h4>
              <label>Rating: </label>
            </h4>
            <input
              type="text"
              name="rating"
              value={Formulario.rating}
              placeholder="Insert Rating"
              onChange={(e) => handleChange(e)}
            />
            {error.rating && (
              <p className="error">
                <strong>{error.rating}</strong>
              </p>
            )}
          </div>
          <div>
            <h4>
              <label>Image: </label>
            </h4>
            <input
              type="url"
              name="background_image"
              value={Formulario.background_image}
              placeholder="Insert image link..."
              onChange={(e) => handleChange(e)}
            />
          </div>
        </section>
        <section className="fourthSection">
          <div>
            <h4>
              Genres:
            </h4>
            <select
              onChange={(e) => {
                handleSelect(e);
              }}
            >
              <option value="selected" hidden>
                Select
              </option>
              {genres
                ?.sort((a, b) => {
                  if (a.name < b.name) return -1;
                  if (a.name > b.name) return 1;
                  return 0;
                })
                .map((e) => {
                  return (
                    <option value={e.name} key={e.id}>
                      {e.name}
                    </option>
                  );
                })}
            </select>
            {Formulario.genres.map((e) => {
              return (
                <ul key={e} className="allGenres">
                  <li>
                    <p className="genres">
                      <strong>{e}</strong>
                    </p>
                    <button
                      onClick={() => handleDelete(e)}
                      className="x"
                      value={e}
                    >
                      X
                    </button>
                  </li>
                </ul>
              );
            })}
            {error.genres && (
              <p className="error">
                <strong>{error.genres}</strong>
              </p>
            )}
          </div>
          <section className="fifthSection">
            <button type="submit" className="boop">
              <strong>Punch</strong>
            </button>
            <button type="reset" onClick={handleReset}>Reset</button>
          </section>
        </section>
      </form>
    </section>
  );
}

export default Nueva;
