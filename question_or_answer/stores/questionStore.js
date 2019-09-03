import { observable, action} from 'mobx';

class QuestionStore {
  @observable questions = [];

  @action
  putQuestion = (question) => {
    console.log(Object.keys(question)[0]);
    this.questions.push({question});//this.questions.question.tag로 해야하는 불편함이 있음.
    console.log(this.questions[0].question.tag);
  }

  getQuestion = () => {
    console.log(this.questions[0]);
  }
}

export default QuestionStore;
