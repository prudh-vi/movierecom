

export function GridBackgroundDemo() {
  return (
    <div className="h-[50rem] w-full dark:bg-white bg-black  dark:bg-grid-black/[0.2] bg-grid-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
    </div>
  );
}
