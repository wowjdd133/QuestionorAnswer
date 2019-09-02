import Router from 'next/Router';
import Layout from "../components/Layout";

const Tag = () => (
  <Layout>
     <h1>What type of question do you have?</h1>
      <p>We’ll help you find the best way to get your answer</p>
      <input type="text" placeholder="e.g. python, javascript, react"/>
      <button onClick={() => 
        Router.push('/title')}>Next</button>
  </Layout>
)

export default Tag;