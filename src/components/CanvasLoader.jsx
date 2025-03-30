import React, { useEffect, useState, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Float, Decal, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader"; // Assurez-vous que le chemin est correct

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const { gl } = useThree();

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      console.warn("WebGL context lost. Attempting to restore...");
    };

    const handleContextRestored = () => {
      console.log("WebGL context restored");
      gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const canvas = gl.domElement;
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
    };
  }, [gl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <mesh castShadow receiveShadow scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          roughness={0.5}
          metalness={0.1}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={0.8}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Canvas
      frameloop='demand'
      dpr={Math.min(2, window.devicePixelRatio)}
      gl={{
        preserveDrawingBuffer: true,
        powerPreference: "high-performance",
        antialias: true,
        alpha: true,
        stencil: false,
        depth: true
      }}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '120px',
        maxHeight: '120px'
      }}
      onCreated={() => setIsLoaded(true)}
    >
      <Suspense fallback={<CanvasLoader />}>
        {isLoaded && (
          <>
            <OrbitControls
              enableZoom={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
              enableDamping={true}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={5}
            />
            <Ball imgUrl={icon} />
          </>
        )}
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
