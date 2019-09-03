import React, {Fragment} from 'react';
import Router from 'next/Router';


const Index = () => {
  
  const handleNext = () => {
    Router.push('/tag');
  }

  return (
    <Fragment>
      <button onClick={handleNext}>Ask Question</button>
      <h1>Hello index</h1>
    </Fragment>
  );
};

export default Index;