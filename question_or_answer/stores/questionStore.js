import { observable, action} from 'mobx';

class QuestionStore {
  @observable questions = [];

  @action
  putQuestion = (question) => {
    this.questions.push({question});
  }
}

export default QuestionStore;
