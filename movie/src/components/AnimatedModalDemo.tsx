import React from 'react';
import { Outlet, Link } from "react-router-dom";

import { motion } from 'framer-motion';
import {
  Modal,
 
  ModalTrigger,
} from './ui/animated-modal';

interface IconProps {
  className?: string;
}

interface IconWithTextProps {
  icon: React.ReactNode;
  text: string;
}

export function AnimatedModalDemo() {
  // Using placeholder images since we can't load external URLs
  

  return (
    <div className="py-40  justify-center">
      <Modal>
        <ModalTrigger className="bg-white dark:bg-black dark:text-black text-black flex justify-center group/modal-btn">
        
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          <Link to="/getmovies">Get Movies </Link>
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <Link to="/getmovies">🍿🎬 </Link>
          </div>
       

        <Outlet />
        </ModalTrigger>
        
       
      </Modal>
    </div>
  );
}

const IconWithText: React.FC<IconWithTextProps> = ({ icon, text }) => (
  <div className="flex items-center justify-center">
    <div className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4">
      {icon}
    </div>
    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
      {text}
    </span>
  </div>
);

