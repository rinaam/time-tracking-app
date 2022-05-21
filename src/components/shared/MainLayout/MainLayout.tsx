import React from 'react';
import './MainLayout.scss';

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout:React.FC<MainLayoutProps> = ({ children }) => (
  <div className="container">{children}</div>
);

export default MainLayout;
