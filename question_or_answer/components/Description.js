import React, {useState} from 'react';
import Router from 'next/router';

const Description = ({ store }) => {
  console.log(store.question);
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
    console.log(e.target.value);
    setDescription(e.target.value)
  };
  
  const handleDone = () => {
    putQuestion();
    setTimeout(5000);
    getQuestion();
    Router.push('/');
  }

  const getQuestion = () => {
    console.log(store.question.questions);
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