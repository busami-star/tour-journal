import React from 'react';

function Entry(props) {
    console.log(props)
  return (
    <article className='journal-entry'>
      <img className='image-img'
      
       src = {props.img.src} alt={props.img.alt}
       />
      <div>
        <div className='image-img-container'>
        <img className='image-img1' src="https://i.pinimg.com/736x/25/1f/e5/251fe5d008461fa7c315b3fc39476bb4.jpg" />
        </div>
        <span className='k-img0'>{props.title}</span>
        <a className='k-img1' href=" https://www.google.com/maps/@1.2833,36.8167,12z/data=!3m1!4b1.">view on google maps</a>
        <h2 className='k-img'>{props.county}</h2>
        <p className='k-img2'>{props.dates}</p>
        <p className='k-img3'>{props.text}</p>
      </div>
    </article>
  );
}

export default Entry;
