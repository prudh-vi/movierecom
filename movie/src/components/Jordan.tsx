import { useGLTF } from '@react-three/drei'
import React,{useLayoutEffect} from 'react'
import { JordanGLTF } from '../typings';
import * as THREE from 'three';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';

function Jordan() {
    const { nodes, materials } = useGLTF("/Cinema.glb") as JordanGLTF;
    const bodyMaterial = new THREE.MeshStandardMaterial({
        color: '#151515',  // Very dark grey, almost black
        roughness: 0.7,    // Higher roughness for plastic-like finish
        metalness: 0.2,    // Slight metallic quality
        envMapIntensity: 1,
    });

    const lensMaterial = new THREE.MeshPhysicalMaterial({
        color: '#000000',
        metalness: 0.9,
        roughness: 0.05,   // Very smooth for glass-like appearance
        clearcoat: 1,      // Add clear coat for extra shine
        clearcoatRoughness: 0.1,
        envMapIntensity: 2,
        transmission: 0.2, // Slight transparency for glass effect
    });

    const caseMaterial = new THREE.MeshStandardMaterial({
        color: '#202020',  // Slightly lighter than body
        roughness: 0.8,
        metalness: 0.1,
        envMapIntensity: 1,
    });
    const {scene,camera}=useThree();
    const tl=gsap.timeline();
    useLayoutEffect(()=>{
        tl.to(camera.position,{
            x:10,
            y:8.0,
            z:10,
            scrollTrigger :{
                trigger:".second-section",
                start:"top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
                markers: true,
            },
        }).to(scene.position,{
            x:3.01,
            y:0.76,
            z:3.7,
            scrollTrigger :{
                trigger:".second-section",
                start:"top bottom",
                end: "top top",
                scrub: true,
                immediateRender: false,
                markers: true,
            },
        })
    },[]);
    return (
        <group scale={1} position={[2,2,2]} rotation-y ={[0]}>
            
            <mesh geometry={nodes.Object_6.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_8.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_10.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_12.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_14.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_18.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_20.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_22.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_26.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_28.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_32.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_34.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_36.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_38.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_40.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_48.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_50.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_52.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_54.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_56.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_58.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_60.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_64.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_68.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_70.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_72.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_74.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_76.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_78.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_80.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_82.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_84.geometry} material={materials.camera_body} />
            <mesh geometry={nodes.Object_86.geometry} material={materials.camera_body} />

            <primitive object={nodes.body001_low_41} material={materials.camera_body} />
            <primitive object={nodes.body002_low_1} material={materials.camera_body} />
            <primitive object={nodes.body003_low_2} material={materials.camera_body} />
            <primitive object={nodes.body004_low_3} material={materials.camera_body} />
            <primitive object={nodes.body005_low_4} material={materials.camera_body} />
            <primitive object={nodes.body006_low_5} material={materials.camera_body} />
            <primitive object={nodes.body007_low_6} material={materials.camera_body} />
            <primitive object={nodes.body008_low_7} material={materials.camera_body} />
            <primitive object={nodes.body009_low_8} material={materials.camera_body} />
            <primitive object={nodes.body010_low_9} material={materials.camera_body} />
            <primitive object={nodes.body011_low_10} material={materials.camera_body} />
            <primitive object={nodes.body012_low_11} material={materials.camera_body} />
            <primitive object={nodes.body013_low_12} material={materials.camera_body} />
            <primitive object={nodes.body014_low_13} material={materials.camera_body} />
            <primitive object={nodes.body015_low_14} material={materials.camera_body} />
            <primitive object={nodes.body016_low_15} material={materials.camera_body} />
            <primitive object={nodes.body017_low_16} material={materials.camera_body} />
            <primitive object={nodes.body018_low_17} material={materials.camera_body} />
            <primitive object={nodes.body019_low_18} material={materials.camera_body} />
            <primitive object={nodes.body020_low_19} material={materials.camera_body} />
            <primitive object={nodes.body021_low_20} material={materials.camera_body} />
            <primitive object={nodes.body022_low_21} material={materials.camera_body} />
            <primitive object={nodes.body023_low_22} material={materials.camera_body} />
            <primitive object={nodes.body024_low_23} material={materials.camera_body} />
            <primitive object={nodes.body025_low_24} material={materials.camera_body} />
            <primitive object={nodes.body_low_25} material={materials.camera_body} />

            <primitive object={nodes.case_1_low_26} material={materials.camera_case} />
            <primitive object={nodes.case_2_low_27} material={materials.camera_case} />

            <primitive object={nodes.lenses001_low_28} material={materials.camera_lense} />
            <primitive object={nodes.lenses002_low_29} material={materials.camera_lense} />
            <primitive object={nodes.lenses003_low_30} material={materials.camera_lense} />
            <primitive object={nodes.lenses004_low_31} material={materials.camera_lense} />
            <primitive object={nodes.lenses005_low_32} material={materials.camera_lense} />
            <primitive object={nodes.lenses006_low_33} material={materials.camera_lense} />
            <primitive object={nodes.lenses007_low_34} material={materials.camera_lense} />
            <primitive object={nodes.lenses008_low_35} material={materials.camera_lense} />
            <primitive object={nodes.lenses009_low_36} material={materials.camera_lense} />
            <primitive object={nodes.lenses010_low_37} material={materials.camera_lense} />
            <primitive object={nodes.lenses011_low_38} material={materials.camera_lense} />
            <primitive object={nodes.lenses012_low_39} material={materials.camera_lense} />
            <primitive object={nodes.lenses_low_40} material={materials.camera_lense} />
        </group>
    );
}

export default Jordan;

useGLTF.preload("/Cinema.glb");