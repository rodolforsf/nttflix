const API_KEY = "1b8fa411bbda2863a127640b8800cbab";

const categories = [
   { 
        name: "trending",
        title: "Em alta",
        path: `/trending/all/week?language=pt-BR&api_key=${API_KEY}`,
        isLarge: true,
    },
   { 
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`,
        isLarge: false,
    },
   { 
        name: "topRated",
        title: "Populares",
        path: `/movie/top_rated?api_key=${API_KEY}&language=pt_BR`,
        isLarge: false,
    },
   { 
        name: "animation",
        title: "Animação",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=16&language=pt-BR`,
        isLarge: false,
    },
   { 
        name: "comedy",
        title: "Comédia",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35&language=pt-BR`,
        isLarge: false,
    },
   { 
        name: "drama",
        title: "Drama",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=18&language=pt-BR`,
        isLarge: false,
    },
   { 
        name: "western",
        title: "Faroeste",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=37&language=pt-BR}R`,
        isLarge: false,
    },
   { 
        name: "romance",
        title: "Romance",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749&language=pt-BR`,
        isLarge: false,
    },
];

export const getMovies = async (path) => {
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log("error getMovies: ", error);
    }
};

export default categories;