import React, {useState} from 'react';
import Router from 'next/router';

const Description = ({ store }) => {
  const [description, setDescription] = useState("");

  const putQuestion = () => {
    store.question.putQuestion(
      {
        tag: localStorage.getItem('tag'),
        title: localStorage.getItem('title'),
        description: description,
      }
    )
  }

  const handleChange = e => {
    setDescription(e.target.value)
  };
  
  const handleDone = () => {
    putQuestion();
    store.question.getQuestion();
    Router.push('/');
  }

  const getQuestion = () => {
    console.log(store.question.questions[0]);
  }

  const handleBack = () => {
    Router.back();
  }

  return (
    <div>
      <textarea onChange = {handleChange} className= "description-textarea" style={{ width: 300, height: 400}}>

      </textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleDone}>Done</button>
    </div>
  );
};

export default Description;