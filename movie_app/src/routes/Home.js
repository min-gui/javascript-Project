import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';


class Home extends React.Component {
    state = {
        isLoading: true,
        movies: [],
    };

    getMovies = async () => {
        const {
            data: {
                data: {movies},
            },
        } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=rating');
        console.log(movies)
        this.setState({movies, isLoading: false});
        // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
        // console.log(movies.data.data.movies);
    };

    //컴포넌트가 만들어지고 render가 된 후에 실행
    componentDidMount() {
        // setTimeout(() => {
        //   this.setState({ isLoading: false})
        // }, 1000)
        this.getMovies();
    }

    render() {
        const {isLoading, movies} = this.state;
        return (//<div>
            <section className="container">
                {isLoading ? (
                    <div className="loader">
                        <span className={"loader__text"}>Loading...</span>
                    </div>
                ) : (
                    <div className="movies">
                        {movies.map(movie => (
                            <Movie
                                key={movie.id}
                                id={movie.id}
                                year={movie.year}
                                title={movie.title}
                                summary={movie.summary}
                                poster={movie.medium_cover_image}
                                genres={movie.genres}
                            />
                        ))}
                    </div>
                )}
            </section>
        );
    }
}

export default Home;
