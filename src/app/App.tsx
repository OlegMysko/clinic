import { AuthLoader } from '@/components/authLoader/authLoader';
import { Footer } from '@/components/footer/Footer';
import { Header } from '@/components/header/Header';
import { NavBar } from '@/components/navBar/NavBar';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import "tailwindcss";


export const App: React.FC = () => {
 
  return (<> 
    <div className='flex  h-screen' >
      <div className='flex flex-col'>
        <NavBar />
       <Footer />
      </div>
      <div className='flex-1 flex flex-col'>
        <Header /> 
        <main className="flex-1 p-6 overflow-auto bg-[#F3F4F6] ">
          <Outlet/>
        </main>
      </div>
      
       
    </div>
   
   
   
    
</>
    
  );
};
