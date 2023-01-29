import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import timeless from '../Audio/timeless.mp3'

export default function Model(props) {
  const handleClickLeft = () => {
    const timelessAudio = new Audio(timeless)
    console.log('left button clicked')
  }

  const { nodes, materials } = useGLTF('./cdjs.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499.geometry} material={materials.mat17} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_1.geometry} material={materials.mat25} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_2.geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_3.geometry} material={materials.mat5} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_4.geometry} material={materials.mat21} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_5.geometry} material={materials.mat16} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_6.geometry} material={materials.mat23} />
      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_7.geometry} material={materials.mat10} />

      {/* left play button */}
      <mesh onClick={handleClickLeft} castShadow receiveShadow geometry={nodes.mesh1281425499_8.geometry} material={materials.mat15} />

      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_9.geometry} material={materials.mat13} />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175.geometry} material={materials.mat13} />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_1.geometry} material={materials.mat17} />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_2.geometry} material={materials.mat16} />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_3.geometry} material={materials.mat23} />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_4.geometry} material={materials.mat10} />

      {/* right play button */}
      <mesh
        onClick={() => console.log('right play')}
        castShadow
        receiveShadow
        geometry={nodes.mesh933813175_5.geometry}
        material={materials.mat15}
      />

      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_6.geometry} material={materials.mat25} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_7.geometry} material={materials.mat9} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_8.geometry} material={materials.mat5} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_9.geometry} material={materials.mat21} />
      <mesh castShadow receiveShadow geometry={nodes.mesh77414760.geometry} material={materials.mat17} />
      <mesh castShadow receiveShadow geometry={nodes.mesh77414760_1.geometry} material={materials.mat15} />
      <mesh castShadow receiveShadow geometry={nodes.mesh77414760_2.geometry} material={materials.mat13} />
      <mesh castShadow receiveShadow geometry={nodes.mesh77414760_3.geometry} material={materials.mat16} />
      <mesh castShadow receiveShadow geometry={nodes.mesh77414760_4.geometry} material={materials.mat4} />
    </group>
  )
}

useGLTF.preload('/Pioneer DJ System.glb')
