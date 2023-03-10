const API_KEY = '25b615bb60b2ac8cacc56ec4d7a98ba1';
const API = 'https://api.themoviedb.org/3';

const Fetch = async (final) => {
    const requisição = await fetch(`${API}${final}`);
    const json = await requisição.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'principal',
                id: 'acao',
                title: 'Ação',
                items: await Fetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'principal',
                id: 'animacao',
                title: 'Animação',
                items: await Fetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'principal',
                id: 'familia',
                title: 'Para toda família',
                items: await Fetch(`/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'principal',
                id: 'drama',
                title: 'Drama',
                items: await Fetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'principal',
                id: 'romance',
                title: 'Romance',
                items: await Fetch(`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'principal',
                id: 'serie',
                title: 'Série',
                items: await Fetch(`discover/tv?api_key=<<api_key>>&language=pt-BR&
                sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate&with_status=0&with_type=0`)
            },
        ];
    },

    getFilmeInfo: async (FilmeId) => {
        let info = {};
        info = await Fetch(`/movie/${FilmeId}?language=pt-BR&api_key=${API_KEY}`);
    return info;
}
}