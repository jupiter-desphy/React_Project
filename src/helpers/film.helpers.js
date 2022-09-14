export function filterFilmsByDirector(list, director) {
    if (director) return list.filter((film) => film.director == director);
    return list;
}

export function getListOf(list, prop) {
    return [...new Set(list.map((film)=> film[prop] || ""))];
}