import React, {Fragment} from 'react';
import Router from 'next/Router';


const Index = () => {
  
  const handleNext = () => {
    Router.push('/tag');
  }

  return (
    <Fragment>
      <button onClick={handleNext}>Ask Question</button>
      <h1>재미있는 코딩 놀이</h1>
    </Fragment>
  );
};

export default Index;