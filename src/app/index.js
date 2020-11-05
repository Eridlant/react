import React from 'react';
import router from '~s/router.js';
import {observer} from 'mobx-react';

@observer
export default class App extends React.Component{
  render(){
    return (
      <div className="container">

        {router.component}
      </div>
    )
  }
}


