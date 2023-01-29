import React from 'react'
import { Text3D, Center, useMatcapTexture } from '@react-three/drei'

function Text() {
  const [matcapTexture] = useMatcapTexture('CA8892_F9D7DC_EBB8C0_F3C4CC', 256)
  console.log(matcapTexture)
  return (
    <>
      <Center>
        <Text3D letterSpacing={0.01} height={0.2} size={0.18} font="./fonts/thunder.json">
          Imbastari Brothers
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
    </>
  )
}

export default Text
