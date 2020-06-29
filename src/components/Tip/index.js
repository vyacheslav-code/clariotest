import React from 'react';
import iconMark from '../../assets/iconMark.svg';

import './styles.scss';

const Tip = ({onClose, title, subtitle}) => <div className="tip">
        <div className="tip--info">
          <div className="tip--info__icon">
            <img alt="iconMark" src={iconMark} />
          </div>
          <div>
          <span className="tip--info__title">{title}</span>
          <span className="tip--info__subtitle">{subtitle}</span>
          </div>
        </div>
        <div className="tip--button" onClick={onClose}>
          Ok
        </div>
      </div>

export default Tip;