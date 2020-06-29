import React from 'react';

import './styles.scss';

const Section = ({children, title, subtitle, description}) => <div className="section">
        <div className="section--header">
          <div className="section--header__primary">
            <p className="section--subtitle">{subtitle}</p>
            <p className="section--title">{title}</p>
          </div>
          <div className="section--header__secondary">
            <p>{description}</p>
          </div>
        </div>
        {children}
    </div>

export default Section;    