import {makeObservable, observable, computed, action} from 'mobx';
import router from '~s/router.js';

class Form{
  constructor() {
    makeObservable(this);
  }

  @observable formDate = {
    name: {
      lable: 'Name',
      value: ''
    },
    email: {
      lable: 'Email',
      value: ''
    }
  } 

  @observable formName = '';

  @action handleChange = (event) => {
    this.formName = event.target.value;
  }

  @action handleSubmit = (event) => {
    // router.moveTo('result');
    this.props.history.push(routesMap.result);
    event.preventDefault();
  }

}

export default new Form();