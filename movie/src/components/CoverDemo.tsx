
import { Cover } from "../components/ui/cover";


export function CoverDemo() {
  return (
    <div className="mt-[-150px]">
      <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-l from-white via-gray-200 to-gray-100">
        Movies That 
        Match <br/> Your <Cover>Vibe😎</Cover>
      </h1>
    
    </div>
  );
}