import React from 'react';
import E404 from '~c/errors/404';

export default function(props){
  console.log(props.match);
  return (
    <div>
      Post {props.match.params.some}
    </div>
  );
}

