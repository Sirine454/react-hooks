
import React from 'react';


const MovieCard= (props) => {
  
  return(
<div className="catalogContainer">
      
        <div className="catalog__item">
          <div className="catalog__item__img">
            <img src={props.PosterUrl} alt={props.title} />
            
            <div className="catalog__item__resume">{props.Description}</div>
          </div>
          <div className="catalog__item__footer">
            <div className="catalog__item__footer__name">
              {props.title} {props.Year}
            </div>
            <div className="catalog__item__footer__rating">{props.Rating}</div>
          </div>
        </div>
        
   
     
    
      </div>
  )
}
export default MovieCard;