import React from 'react';
import axios from 'axios';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    console.log(movies)
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
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }

}

export default App;
