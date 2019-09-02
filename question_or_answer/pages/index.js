import React from 'react';
import Layout from '../components/Layout';
import Router from 'next/Router';
import QuestionStore from '../stores/questionStore';
import { Provider } from 'mobx-react';

const question = new QuestionStore();

const Index = () => {
  return (
    <Provider question={question}>
      <Layout>
        <button onClick={() => {
        Router.push('/tag');
        }}>Ask Question</button>
        <h1>Hello index</h1>
      </Layout>
    </Provider>
    );
};

export default Index;