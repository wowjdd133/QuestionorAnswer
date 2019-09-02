import { observable, action} from 'mobx';

export default class QuestionStore {
  @observable question = [];



  /*
  @action
  putQuestion = () => {
    let title= this.title;
    let tag = this.tag;
    let description = this.description;
    console.log(description);
    this.question.push({
      title,
      tag,
      description,
    });
  }*/


}