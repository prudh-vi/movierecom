

import { GridBackgroundDemo } from "./components/GridBackgroundDemo";
import { BackgroundLinesDemo } from "./components/BackgroundLinesDemo";
function App() {
  

  return (
  <div className="relative min-h-screen w-full">
    <div className="fixed inset-0 w-full h-full">
    <GridBackgroundDemo/>
    <BackgroundLinesDemo/>
    
    </div>
    
    
    
 
  </div>

  );
}
export default App;
