import { Canvas } from '@react-three/fiber'
import { OrbitControls, Loader } from '@react-three/drei'
import Experience from './components/Experience'
import styled from 'styled-components'

export default function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 4.5, 6], fov: 15 }}>
        <ambientLight intensity={0.5} />
        <pointLight shadow-normalBias={0.5} position={[10, 6, -10]} intensity={1} />
        <OrbitControls enableZoom={false} />
        <Experience />
      </Canvas>
      <Loader />
    </>
  )
}
