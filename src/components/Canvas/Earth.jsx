import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const Earth = () => {
  const earth = useGLTF("/planet/planet/scene.gltf");

  return (
    <mesh>
      <primitive 
        object={earth.scene} 
        scale={3.5} 
        position-y={0} 
        rotation-y={0}
      />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={null}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          speed={2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

useGLTF.preload("/planet/scene.gltf");
export default EarthCanvas;