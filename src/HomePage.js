import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <div className='banner-container'>
        <img src={require("./Gallery/HomeBanner.jpg")} alt="theDukeRoc" className="home-banner" />
      </div>
      <div className="info-box">
        <p className="info-text">
          The Duke offers modern amenities in a unique and historic location in downtown
          Rochester, NY. The aesthetic is inspired by the raw music lifestyle of New York City in
          the late 20th century. The Duke features a custom leather fringe chandelier, bold lighting
          and art accents throughout, and a tiled concert stage that looks out over East Main
          Street and Parcel 5.
          <br />
          <br />
          The Duke offers a curated guest experience enhanced by decades of hospitality and
          event expertise from the team that owns Avvino, La Bola &amp; Frenchman Street. When
          you book The Duke, you will be guaranteed an exclusive experience of food, wine, and
          cocktails, while immersing yourself in a creative one-of-a-kind venue.
          <br />
          <br />
          <hr className='contact'></hr>
          <br />
          TheDukeOnMain@gmail.com 
          <br />
          232 East Main Street
          <br />
          Rochester, NY 14604
        </p>
      </div>
    </div>
  );
}

export default HomePage;
