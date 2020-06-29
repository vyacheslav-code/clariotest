import React from 'react';
import SideMenu from '../../components/SideMenu';
import Header from '../../components/Header';

import './styles.scss';
import Section from '../../components/Section';

const MainLayout = ({children}) => <>
    <SideMenu />
    <div className="main-layout">
        <Header username="Barack Obama"/>
        <div className="main-layout--content">
        <Section title="Table" subtitle="Data table" description="Sort by: From low to high">
            {children}
        </Section>
        </div>
    </div>
</>

export default MainLayout;