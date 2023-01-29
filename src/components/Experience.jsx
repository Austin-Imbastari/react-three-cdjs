import React, { useRef } from 'react'
import { useGLTF, Html, Float, PresentationControls, ContactShadows } from '@react-three/drei'

import img from '../what.png'
import img2 from '../time.png'

import Cdjs from './Cdjs'

function Experience() {
  const dj = useRef()

  return (
    <>
      <PresentationControls>
        <Float floatIntensity={2}>
          <group rotation={[0, 3, 0]}>
            <Cdjs />
            <Html
              occlude={[dj]}
              position={[-0.535, 0.06, 0.235]}
              rotation-x={1}
              rotation={[0, 3.25, 0.2]}
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.25}>
              <a href="https://soundcloud.com/imbastaribrothers/whatyouwant">
                <img src={img} alt="img1" />
              </a>
            </Html>
            <Html
              occlude={[dj]}
              position={[0.52, 0.0456, -0.004]}
              rotation-x={1}
              rotation={[0, 3.25, 0.2]}
              transform
              wrapperClass="htmlScreen"
              distanceFactor={1.25}>
              <a target="_blank" href="https://soundcloud.com/imbastaribrothers/juice-timeless">
                <img src={img2} alt="img2" />
              </a>
            </Html>
          </group>
        </Float>
      </PresentationControls>
      <ContactShadows position={[0, -1, 0]} opacity={0.75} scale={10} blur={3.5} far={4} />
    </>
  )
}

export default Experience
