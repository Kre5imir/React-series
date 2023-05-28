import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [ index, setIndex ] = useState(0);
  const {name, job, image, text } = people[index];

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    })
  }
  const checkPosition = (number) => {
    if( number > people.length - 1){
      return 0
    }
  }
  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return newIndex;
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return newIndex;
    })
  }
  
  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <h4 className='job'>{job}</h4>
      <h4 className='info'>{text}</h4>
      <div className='button-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft /> 
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>

      <button className='random-btn' onClick={randomPerson}>random person</button>
      
    </article>
    
  );
};

export default Review;
