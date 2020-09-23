import React from 'react';
import './like.scss';




function App() {
  return (
    <div>
  {/*

Follow me on
Dribbble: https://dribbble.com/supahfunk
Twitter: https://twitter.com/supahfunk
Codepen: https://codepen.io/supah/

*/}
  
<div className="app"> 
    <div className="search"><svg><use xlinkHref="#ico-search" /></svg></div>
    
    <h2>Most Popular Anime</h2>
    <section className="movies">
      <div className="movie">
        <a href="./Content" ><img src="https://dj.lnwfile.com/mpvj0q.jpg" alt className="poster" /></a>
        <div className="title">Demon slayer kimetsu no yaiba</div>
        <div className="info">
          
        </div>
      </div>
      <div className="movie">
      <a href="./Footer" ><img src="https://upload.wikimedia.org/wikipedia/th/3/30/OP81.jpg" alt className="poster" /></a>
        <div className="title">One Piece</div>
        <div className="info">
        </div>
        </div>
      <div className="movie">
      <a href="./Header" ><img src="https://m.media-amazon.com/images/I/61mrcs+KCmL.jpg" alt className="poster" /></a>
        <div className="title">Naruto</div>
        <div className="info"> 
        </div>
      </div>
      <div className="movie">
      <a href="./Menu" ><img src="https://www.doomovie-hd.com/assets/movie_poster/a/aaf474b49453ea08e816fd41d8ec8916.jpg" alt className="poster" /></a>
        <div className="title">Bleach</div>
        <div className="info">
        </div>
      </div>
    </section>
    <div className="detail">
      <svg className="close">
        <use xlinkHref="#close" />
      </svg>
      <div className="movie">
        <img src="https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true" alt className="poster" />
        <div className="title">Room</div>
        <div className="info">
          <span className="length">117 min</span>
          <span className="year">2015</span>
        </div>
        <div className="desc">
          Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?
        </div>
        <button className="play">
          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 232.153 232.153" style={{enableBackground: 'new 0 0 232.153 232.153'}} xmlSpace="preserve" width="10px" height="10px">
            <g id="Play">
              <path style={{fillRule: 'evenodd', clipRule: 'evenodd'}} d="M203.791,99.628L49.307,2.294c-4.567-2.719-10.238-2.266-14.521-2.266   c-17.132,0-17.056,13.227-17.056,16.578v198.94c0,2.833-0.075,16.579,17.056,16.579c4.283,0,9.955,0.451,14.521-2.267   l154.483-97.333c12.68-7.545,10.489-16.449,10.489-16.449S216.471,107.172,203.791,99.628z" fill="#FFFFFF" />
            </g>
          </svg> play movie
        </button>
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
