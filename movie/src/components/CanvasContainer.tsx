import { Canvas } from "@react-three/fiber";
import React from 'react';
import Jordan from "./Jordan";
import { Environment, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export const CanvasContainer: React.FC = () => {
    // Create custom material for engraved effect
   

    return (
        <Canvas
            camera={{ position: [0,6,10], fov: 35 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            
            
            <Environment preset="studio" />
            
            <ambientLight intensity={0.5} />
            <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={1.5}
                castShadow
            />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <directionalLight position={[0, 5, 5]} intensity={0.5} castShadow />
            <directionalLight position={[5, 5, -5]} intensity={0.3} castShadow />

            <OrbitControls enableZoom={false} />

            <Jordan />

            
        </Canvas>
    );
}