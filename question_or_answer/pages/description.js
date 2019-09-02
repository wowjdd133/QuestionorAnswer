import React from 'react';
import Router from 'next/Router';
import Layout from "../components/Layout";

const Description = () => {
  return (
    <Layout>
      <h1>Tell us more about your question</h1>
      <p>description</p>
      <textarea className= "description-textarea" style={{ width: 300, height: 400}}>

      </textarea>
      <button onClick={() => 
        Router.back()}>Back</button>
      <button onClick={() => Router.push('/')}>done</button>
    </Layout>
  );
};

export default Description;