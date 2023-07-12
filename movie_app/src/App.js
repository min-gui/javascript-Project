import React from 'react';


class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //컴포넌트가 만들어지고 render가 된 후에 실행
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false})
    }, 1000)
  }

  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? 'Loading...' : 'We are ready'}</div>;
  }

}

export default App;
