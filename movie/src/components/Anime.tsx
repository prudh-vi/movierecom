
import { Outlet, Link } from "react-router-dom";


import {
  Modal,
 
  ModalTrigger,
} from './ui/animated-modal';




export function Anime() {
  // Using placeholder images since we can't load external URLs
  

  return (
    <div className="py-40  justify-center">
      <Modal>
      <Link to="/auth">
        <ModalTrigger className="bg-white dark:bg-black dark:text-black text-black flex justify-center group/modal-btn">
        
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
          Join Us 
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              🫂
       
          </div>
        
       

        <Outlet />
      
        </ModalTrigger>
        
      </Link >
      </Modal>
    </div>
  );
}


