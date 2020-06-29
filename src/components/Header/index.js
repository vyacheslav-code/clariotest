import React from 'react';
import avatar from '../../assets/avatar.png';

import './styles.scss';

const Header = ({username}) => <header> 
      <div className="credentials--wrapper">
        <img alt="avatar" src={avatar}/>
        <span className="credentials--name">{username}</span> 
      </div> 
    </header>

export default Header;    