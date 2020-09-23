import React from 'react'
import './main.css';

export default function Content() {
    return (
 <div>
  <nav>
    <div className="logo heading">
      THANAPHON
    </div>
    <ul>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-search" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx={10} cy={10} r={7} />
          <line x1={21} y1={21} x2={15} y2={15} />
        </svg>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <line x1={4} y1={8} x2={20} y2={8} />
          <line x1={4} y1={16} x2={20} y2={16} />
        </svg>
      </li>
    </ul>
  </nav>
  <div className="absolute-wrapper">
    <div className="colored-backgrounds">
      <div />
      <div />
      <div />
      <div />
    </div>
  </div>
  <main>
    <div className="content">
      <div className="heading">
        <h1>hoodies Travis Scott Astroworld</h1>
        <p>
          A Hoodie for men,<br />
          it's a good hoodie for you,<br />
          only $75
        </p>
        <button type="button"><a href = "/">Add to cart</a></button>
      </div>
    </div>
    <div className="wrapper">
      <div className="images">
        <div className="image" />
        <div className="image" />
        <div className="image" />
        <div className="image" />
      </div>
    </div>
    <div className="navigation">
      <div className="right">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-right" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="9 6 15 12 9 18" />
        </svg>
      </div>
      <div className="left">
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-left" width={26} height={26} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" />
          <polyline points="15 6 9 12 15 18" />
        </svg>
      </div>
    </div>
  </main>
</div>


    )
}

