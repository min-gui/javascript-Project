import React from 'react';

// import logo from './logo.svg';
// import './App.css';

const Food = ({name, picture}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <img src={picture} />
    </div>
  )
}

const foodILike = [
{
  name: "kimchi",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
},
{
  name: "samgyeopsal",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
},
{
  name: "samgyeopsal",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg"
}
];

function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />
}

function App() {
  // return <div className="App"/>
 
  return (  
    <div>
      {foodILike.map(renderFood)}
    </div>
  );
  
  
  
}

export default App;
