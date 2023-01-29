import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'

import timeless from '../Audio/timeless.mp3'
import whatYouWant from '../Audio/whatYouWant.mp3'

export default function Model(props) {
  const dj = useRef()

  const [playingSong1, setPlayingSong1] = useState(false)
  const [timelessAudio] = useState(new Audio(timeless))

  const [playingSong2, setPlayingSong2] = useState(false)
  const [whatYouWantAudio] = useState(new Audio(whatYouWant))

  const handleClickLeft = () => {
    setPlayingSong1(!playingSong1)
  }

  const handleClickRight = () => {
    setPlayingSong2(!playingSong2)
  }

  useEffect(() => {
    playingSong1 ? timelessAudio.play() : timelessAudio.pause()
    playingSong2 ? whatYouWantAudio.play() : whatYouWantAudio.pause()
  }, [playingSong1, playingSong2])

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

      <mesh
        onClick={handleClickLeft}
        onPointerEnter={() => (document.body.style.cursor = 'pointer')}
        onPointerLeave={() => (document.body.style.cursor = 'default')}
        castShadow
        receiveShadow
        geometry={nodes.mesh1281425499_8.geometry}
        material={materials.mat15}>
        {playingSong1 ? (
          <Html occlude={[dj]} wrapperClass="label" position={[0.65, 0.2, 0.1]}>
            Timeless
          </Html>
        ) : (
          ''
        )}
      </mesh>

      <mesh castShadow receiveShadow geometry={nodes.mesh1281425499_9.geometry} material={materials.mat13} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175.geometry} material={materials.mat13} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_1.geometry} material={materials.mat17} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_2.geometry} material={materials.mat16} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_3.geometry} material={materials.mat23} />
      <mesh castShadow receiveShadow geometry={nodes.mesh933813175_4.geometry} material={materials.mat10} />
      {/* right play button */}
      <mesh
        onClick={handleClickRight}
        onPointerEnter={() => (document.body.style.cursor = 'pointer')}
        onPointerLeave={() => (document.body.style.cursor = 'default')}
        castShadow
        receiveShadow
        geometry={nodes.mesh933813175_5.geometry}
        material={materials.mat15}>
        {playingSong2 ? (
          <Html occlude={[dj]} wrapperClass="label" position={[-0.4, 0.28, 0.3]}>
            What You Want
          </Html>
        ) : (
          ''
        )}
      </mesh>

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
