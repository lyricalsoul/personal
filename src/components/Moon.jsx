import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React, { useRef, useState } from 'react'
import { calculatePosition } from '../utils.jsx'

const orbitRadius = 2

export default function Moon(props) {
  const ref = useRef()
  const yDirection = useState(1)
  let chuuMoon = Math.random() > 0.99 // 1% of chance
  let date
  const [colorMap, displacementMap] = useLoader(TextureLoader, [chuuMoon ? 'chuu.jpg' : 'moon-color-poles.jpg', 'moon-displacement.jpg'])

  useFrame((state, delta) => {
    date = performance.now() * 0.0001
    ref.current.rotation.y += 0.01
    // orbiting effect
    ref.current.position.x = -(Math.cos(date) * orbitRadius)
    ref.current.position.y += calculatePosition(ref.current.position.y, 0.0001, 1, yDirection)
    ref.current.position.z = Math.sin(date) * orbitRadius
  })

  return <mesh
    {...props}
    ref={ref}
    castShadow={true} position={[-4, 0, 0]} scale={chuuMoon ? 1 : 0.35}>
    <sphereGeometry />
    <meshStandardMaterial
      reflectivity={0.9}
      castShadow={true}
      map={colorMap}
      bumpMap={displacementMap}
      bumpScale={-0.07}/>
  </mesh>
}
