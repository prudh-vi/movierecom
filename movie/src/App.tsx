import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
import { CoverDemo } from "./components/CoverDemo";
import { AnimatedModalDemo } from "./components/AnimatedModalDemo";

import { HeroScrollDemo } from "./components/HeroScrollDemo";
import { Anime } from "./components/Anime";


function App() {
  return (
    <div className="bg-black">
    <div className="relative h-screen w-full ">
      
      
      
      {/* Grid background layer */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        
        <GridBackgroundDemo />
      </div>
      
      {/* Lines background layer */}
      <div className="fixed top-0 left-0 right-0 bottom-0 z-0">
        <BackgroundLinesDemo />
      </div>

      {/* Cover layer - centered */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pt-8">
        <CoverDemo />
        
        
        
      </div>
       <div className="absolute  inset-0 w-full w-full h-full flex items-center justify-center gap-8 translate-y-10">
        <AnimatedModalDemo />
        

        <Anime/>
       
      </div>

      
      <div className="absolute bottom-0 inset-0 w-full mt-[66vh]">
          <HeroScrollDemo/>
        </div>

      
      
     
        
    </div>
    </div>
  );
}

export default App;