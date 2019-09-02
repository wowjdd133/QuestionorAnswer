import Layout from '../components/Layout'
import Router from 'next/Router';

const Title = () => {
  return (
    <Layout>
      <h1>What's your question title?</h1>
      <p>Your title helps people quickly understand what your question is about so they can answer it.</p>
      <p className="input-title">Title</p>
      <input type="text" placeholder="What's your question?"/>
      <button onClick={() => 
        Router.back()}>Back</button>
      <button onClick={() =>{
        Router.push('/description')
      }
        
      }> Next </button>
    </Layout>
  )
}

export default Title;