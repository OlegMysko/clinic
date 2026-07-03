import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { NavBar } from '@/components/navBar/NavBar';
import React from 'react';
import { Outlet } from 'react-router-dom';
import "tailwindcss";

export const App: React.FC = () => {
  return (<>
    <div className='flex w-full' >
      <NavBar />
      <Header /> 
    </div>
    
        <Outlet/>
   
    <Footer/>
</>
    
  );
};
