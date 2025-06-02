import React, { Suspense, useEffect, useState, useCallback } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Decal, Float, OrbitControls, Preload, useTexture } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const { gl } = useThree();
  const [isContextLost, setIsContextLost] = useState(false);

  useEffect(() => {
    const handleContextLost = (event) => {
      event.preventDefault();
      setIsContextLost(true);
      console.warn("WebGL context lost. Attempting to restore...");
    };

    const handleContextRestored = () => {
      setIsContextLost(false);
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

  if (isContextLost) return null;

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

const BallCanvas = ({ imgUrl }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  const handleCreated = useCallback(({ gl }) => {
    setIsLoaded(true);
    gl.setClearColor('#ffffff', 0);
  }, []);

  const handleError = useCallback((error) => {
    console.error("Canvas error:", error);
    setError(error);
  }, []);

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
        depth: true,
        failIfMajorPerformanceCaveat: true
      }}
      style={{
        width: '100%',
        height: '100%',
        maxWidth: '120px',
        maxHeight: '120px'
      }}
      onCreated={handleCreated}
      onError={handleError}
    >
      <Suspense fallback={<CanvasLoader />}>
        {isLoaded && !error && (
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
            <Ball imgUrl={imgUrl} />
          </>
        )}
      </Suspense>
      <Preload all />
      {error && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          color: 'red',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '10px',
          borderRadius: '4px'
        }}>
          Erreur de chargement du canvas
        </div>
      )}
    </Canvas>
  );
};

export default BallCanvas;
