import {Suspense, useState} from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
 
const Computers = () => {
const computer = useGLTF('./planet/scene.gltf')

  return (
    <mesh>
      <hemisphereLight/> 
      <pointLight/>
      <primitive 
       object={computer.scene}
       scale={4.75}
        position={[0, 0.001, 0.05]}
        rotation={[-0.03,  20.001, -0.001]}
      />
    </mesh>
   )
}


const ComputersCanvas = () =>{

  const [isMobile, setIsMobile] = useState(false);

  return (
    <Canvas
      camera={{ position: [20, 3, 5], fov: 25 }}
    >
      <Suspense >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

    </Canvas>
  );
};

export default ComputersCanvas;