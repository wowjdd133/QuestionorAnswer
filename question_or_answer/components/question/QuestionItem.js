import React from 'react';

const QuestionItem = (question) => {
  console.log(question);

  const {
    title, tag, answer, view
  } = question.question;

  return (
    <div className="questionContent">
      <div>
        <p>title:</p><h2>{title}</h2>
        <p>tag:</p><p>{tag}</p>
      </div>
      <p>{answer}</p>
      <p>{view}</p>
    </div>
  );
};

export default QuestionItem;