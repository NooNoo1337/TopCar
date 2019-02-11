import React from 'react';

import './SecondTitle.scss';

const SecondTitle = ({classes, children}) => <h2 className={classes + ' second-title'}>{children}</h2>;

export default SecondTitle;