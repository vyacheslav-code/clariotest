import React from 'react';
import logoImg from '../../assets/Logo.png';
import folder from '../../assets/iconFolder.png';
import iconChart from '../../assets/iconChart.svg';
import iconMail from '../../assets/iconMail.svg';
import iconSheet from '../../assets/iconSheet.svg';

import './styles.scss';

const SideMenu = () => <div className="side-menu">
      <div className="side-menu--logo-wrapper">
        <img alt="logoImg" src={logoImg}/>
      </div>
      <div className="side-menu--wrapper">
        <div className="side-menu--item">
          <img alt="folder" src={folder}/>
        </div>
        <div className="side-menu--item side-menu--item__selected">
          <img alt="iconChart" src={iconChart}/>
        </div>
        <div className="side-menu--item">
          <img alt="iconMail" src={iconMail}/>
        </div>
        <div className="side-menu--item">
          <img alt="iconSheet" src={iconSheet}/>
        </div>
      </div>
    </div>

export default SideMenu;