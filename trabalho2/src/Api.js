// chave para puxar filmes do tmdb
const API_KEY = '25b615bb60b2ac8cacc56ec4d7a98ba1';

// parte inicial para pegar qualquer api do site
const API = 'https://api.themoviedb.org/3';


// pega o fetch do resultado e retorna um json
const basicFetch = async (final) => {
    const requisição = await fetch(`${API}${final}`);
    const json = await requisição.json();
    return json;
}

export default {
    getHomeList: async () => {
        return [
            {
                slug: 'principal',
                id: 'famosos',
                title: 'Mais Famosos',
                items: await basicFetch(`/discover/movie?sort_by=popularity.desc&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'trending',
                title: 'Recomendados',
                items: await basicFetch(`/trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'familia',
                title: 'Para toda família',
                items: await basicFetch(`/discover/movie?with_genres=10751&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'acao',
                title: 'Ação',
                items: await basicFetch(`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'drama',
                title: 'Drama',
                items: await basicFetch(`/discover/movie?with_genres=18&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasia',
                title: 'Fantasia',
                items: await basicFetch(`/discover/movie?with_genres=14&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'animacao',
                title: 'Animação',
                items: await basicFetch(`/discover/movie?with_genres=16&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'aventura',
                title: 'Aventura',
                items: await basicFetch(`/discover/movie?with_genres=12&language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'comedia',
                title: 'Comédia',
                items: await basicFetch(`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
            },
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId) {
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`);

                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
                break;
            }
            return info;
        }
    }
}
