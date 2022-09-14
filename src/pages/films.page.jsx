import { useEffect, useState } from "react";
import { filterFilmsByDirector, getListOf, getFilmStats } from "../helpers/film.helpers";
import { Link } from "react-router-dom"

export function FilmsPage(props) {
    let [list, setList] = useState([]);
    let [searchDirector, setSearchDirector] = useState("");

    function getFilms() {
        fetch("https://ghibliapi.herokuapp.com/films")
            .then((res) => res.json())
            .then((films) => setList(films))
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        getFilms();
    }, []);

    let filmsByDirector = filterFilmsByDirector(list, searchDirector);
    let directors = getListOf(list, "director");
    let { avg_score, total, latest } = getFilmStats(filmsByDirector);

    return (
        <div>
            <h1>Studio Ghibli Films</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="searchDirector">
                        Select Director:{" "}
                    </label>
                    <select
                        name="searchDirector"
                        id="searchDirector"
                        value={searchDirector}
                        onChange={(event) => setSearchDirector(event.target.value)}
                    >
                        <option value="">All</option>
                        {directors.map((director, idx) => {
                            return (
                                <option key={director + idx} value={director}>
                                    {director}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </form>
            <div>
                <div>
                    <span># Of Films</span>
                    <span>{total}</span>
                </div>
                <div>
                    <span>Average Rating</span>
                    <span>{avg_score.toFixed(2)}</span>
                </div>
                <div>
                    <span>Latest Film</span>
                    <span>{latest}</span>
                </div>
            </div>
            <ul>
                {filmsByDirector.map((film) => {
                    return (
                        <li key={film.id}>
                            <Link to={`/film/${film.id}`}>{film.title}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
