
import React from 'react';
import MovieCard from './MovieCard';

const MovieList= () => {
  
  const movies = [
    {
        title:"Demon Slayer the Movie: Mugen Train",
        PosterUrl:"https://i.egycdn.com/pic/WmFwZndlY21ZVExjdk52bWpFY3htenhheGxtYm1t.jpg",
        Description:"After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
        Year:"2020",
        Rating:"8.4",
  
    },
    {
        title:"Joker",
        PosterUrl:"https://i.egycdn.com/pic/WmFwZndlY21MTnZtYm1qbWptYWN4dmNtam1tbW13VG1tYg.jpg",
        Description:"Arthur Fleck, a party clown, leads an impoverished life with his ailing mother. However, when society shuns him and brands him as a freak, he decides to embrace the life of crime and chaos.",
        Year:"2019",
        Rating:"8.4",
  
    },
    {
        title:"Interstellar",
        PosterUrl:"https://i.egycdn.com/pic/WmFwZndlY21ibXBqbXZtYkVjUG1Zdm1tYW1FeG1i.jpg",
        Description:"When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        Year:"2014",
        Rating:"8.6",
  
    },
    {
        title:"The Perks of Being a Wallflower",
        PosterUrl:"https://i.egycdn.com/pic/WmFwZndlY21FdmNtb051Y21tbUhjUHZORXZOdg.jpg",
        Description:"An introvert freshman is taken under the wings of two seniors who welcome him to the real world.",
        Year:"2012",
        Rating:"8",
  
    },
    /*{
        title:"",
        PosterUrl:"",
        Description:"While the March sisters enter the threshold of womanhood, they go through many ups and downs in life and endeavour to make important decisions that can affect their future.",
        Year:"",
        Rating:"",
  
    },
    {
        title:"",
        PosterUrl:"",
        Description:"",
        Year:"",
        Rating:"",
  
    },
    {
        title:"",
        PosterUrl:"",
        Description:"",
        Year:"",
        Rating:""
  
    },
    {
        title:"",
        PosterUrl:"",
        Description:"",
        Year:"",
        Rating:"",
  
    },
    {
        title:"",
        PosterUrl:"",
        Description:"",
        Year:"",
        Rating:"",
  
    },
    {
        title:"",
        PosterUrl:"",
        Description:"",
        Year:"",
        Rating:"",
  
    },*/
  ]

 
return (

<div >
      {movies.map((el,i) => (
        <div key={i}>
            
                <MovieCard />
                
         </div>
      ))}
    
    
      </div>
)}
export default MovieList;