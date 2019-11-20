import React from 'react'

function Head(){ 
  return <div id="card">
    <h1>CREDIT CARD</h1>
    <div class="card-elements">
    <img className="chip-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Zz0Wxe9sNV7gnRqdCulAuOfGGAbjadHKcdCP0xFQ8Qq7wUGO&s" alt="credit.chip"/>
     
     <h3 id="card-number">7865 4231 6565 8932</h3>
     <span>
        <h3>4532</h3>
        {/* <div className="container"> */}
        <h6 className="valid">VALID <br/>THRU</h6>
      <div className="month-year">
      <h6 id="month">MONTH/YEAR</h6>
        <h3 className="date">11/50</h3>
    </div>
    </span>
    
    <h3>CARDHOLDER</h3>
    </div>
    <img className="visa-image" src="https://krebsonsecurity.com/wp-content/uploads/2012/03/mcvisa.png" alt="VISA" />
 </div>
}


export default Head;