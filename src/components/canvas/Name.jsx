import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as THREE from 'three'

const Name = () => {
  const name = useGLTF('./name/preview.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={Math.PI} groundColor="black" />
      <pointLight decay={0} position={[20, 10, 0]} intensity={Math.PI * 5} />
      <spotLight
        decay={0}
        position={[-100, 80, 10]}
        angle={0.12}
        penumbra={1}
        intensity={Math.PI}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive object={name.scene} scale={5} position={[0, -2, 1]} rotation-y={0} />
    </mesh>
  )
}

const NameCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 45, near: 0.1, far: 200 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={6}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE, // Enable rotation with the left mouse button
            MIDDLE: THREE.MOUSE.DOLLY, // Enable zoom with the middle button (optional)
            RIGHT: null                // Disable panning with the right button
          }}
        />
        <Name />
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default NameCanvas
