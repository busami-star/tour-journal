import React from 'react';

function Entry() {
  return (
    <article className='journal-entry'>
      <img className='forest-img' src="https://i.pinimg.com/236x/81/27/c0/8127c0aac02ec4c03673dc98911de8f5.jpg" alt="karura forest"/>
      <div>
        <div className='karura-forest-container'>
        <img className='karura-forest' src="https://i.pinimg.com/736x/25/1f/e5/251fe5d008461fa7c315b3fc39476bb4.jpg" />
        </div>
        <span className='k-forest0'>Karura </span>
        <a className='k-forest1' href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">view on google maps</a>
        <h2 className='k-forest'>Karura Forest</h2>
        <p className='k-forest2'>01 December,2024</p>
        <p className='k-forest3'>Karura Forest,located within the town of Nairobi city is place of tranquility where individuals can chill and have peace of mind for it is a safe space for all.My experience at karura forest was worth it and i'm looking foward to some eperiences as such.kudos karura team !!😂😂❤️</p>
      </div>
    </article>
  );
}

export default Entry;
