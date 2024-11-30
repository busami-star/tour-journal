import React from 'react';

function Entry(props) {
    console.log(props)
  return (
    <article className='journal-entry'>
      <img className='forest-img'
      
       src = {props.img.src} alt={props.img.alt}
       />
      <div>
        <div className='karura-forest-container'>
        <img className='karura-forest' src="https://i.pinimg.com/736x/25/1f/e5/251fe5d008461fa7c315b3fc39476bb4.jpg" />
        </div>
        <span className='k-forest0'>{props.title}</span>
        <a className='k-forest1' href=" https://www.google.com/maps/@1.2833,36.8167,12z/data=!3m1!4b1.">view on google maps</a>
        <h2 className='k-forest'>{props.country}</h2>
        <p className='k-forest2'>{props.dates}</p>
        <p className='k-forest3'>{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;
