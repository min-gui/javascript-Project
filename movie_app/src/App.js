import React from 'react';
import PropTypes from 'prop-types';

// import logo from './logo.svg';
// import './App.css';

const Food = ({name, picture, rating}) => {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name}/>
    </div>
  )
}

const foodILike = [
{
  id : 1,
  name: "kimchi",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
  rating: 5
},
{
  id : 2,
  name: "samgyeopsal",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
  rating: 4.9
},
{
  id : 3,
  name: "samgyeopsal",
  image: "https://www.maangchi.com/wp-content/uploads/2019/11/vegankimchi-insta.jpg",
  rating: 3
}
];


function App() {
  // return <div className="App"/>
  return (  
    <div>
      {foodILike.map(dish =>
          <Food key={dish.id} name={dish.name} picture={dish.image} 
          rating={dish.rating}/>
        )}
    </div>
  );

  Food.propTypes = {
    name : PropTypes.string.isRequired,
    picture : PropTypes.string.isRequired,
    rating : PropTypes.number.isRequired
  }
  
  
  
}

export default App;
