import React from 'react';

import './ContentWrapper.scss';

export default function ContentWrapper(props) {
  return(
    <div className = {props.classes + ' wrapper'}>
      {props.children}
    </div>
  );
}