import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import * as THREE from 'three'

const Name = ({ isMobile }) => {
  const name = useGLTF('./name/preview.gltf')
  return (
    <mesh>
      <pointLight
        decay={0}
        position={[0, 0, 0]}
        intensity={Math.PI * 5} />
      <pointLight
        position={[0, -1, 3]}
        intensity={Math.PI * 5} />
      <primitive 
        object={name.scene}
        scale={isMobile ? 3.5 : 5}
        position={isMobile ? [0, -1, 1] : [0, -2, 1]}
        rotation-y={0} />
    </mesh>
  )
}

const NameCanvas = () => {
  // Dùng useState với useEffect và mediaQuery để handle responsive khi làm việc với threeJS,
  // còn nếu code thuần react, html và css thì cứ dùng mấy cái tailwind classes như "hidden" và "sm:..." để handle responsive
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Thêm listener lắng nghe sự thay đổi kích cỡ màn hình
    const mediaQuery = window.matchMedia('(max-width: 700px)')
    // Đặt bằng tham số sự thay đổi kích cỡ môn hình
    setIsMobile(mediaQuery.matches)
    // Định nghĩa hàm callback sẽ sử dụng khi thay đổi kích cỡ môn hình
    const handleMediaQueryChange = (event) => setIsMobile(event.matches)
    // Đặt listener là hàm callback vừa tạo
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    // Bỏ listener đi nếu component bị gỡ, ko sử dụng nữa (unmounted)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }    
  }, [])
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
        <Name isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default NameCanvas
