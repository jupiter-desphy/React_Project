export function filterFilmsByDirector(list, director) {
    if (director) return list.filter((film) => film.director === director);
    return list;
}

export function getListOf(list, prop) {
    return [...new Set(list.map((film)=> film[prop] || ""))];
}

export function getFilmStats(list) {
    let acc_score = list.reduce((a, film) => a + parseInt(film.rt_score), 0);
    let total = list.length;
    let avg_score = acc_score / total;
    let latest = list.sort()[list.length-1];
    return { avg_score, acc_score, total, latest }
}
//     return list.reduce(
//         (stats, film, idx) => {
//             stats.total++;
//             stats.acc_score += Number(film.rt_score);
//             if (idx === list.length - 1) {
//                 stats.avg_score = stats.acc_score / stats.total;
//             }
//             if (stats.latest == null || stats.latest < film.release_date) {
//                 stats.latest = film.release_date;
//             }

//             return stats;
//         },
//         {
//             avg_score: 0,
//             acc_score: 0,
//             total: 0,
//             latest: null,
//         }
//     );
// }
/*
    acc_score as a number, being the sum rt_score of the list of films
    total as a number, being the amount of films in the list
    latest as a number, being the latest release year for a film in the list*/
