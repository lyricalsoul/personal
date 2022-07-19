import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const orbitRadius = 10

export default function Sun() {
  const ref = useRef()
  let date

  useFrame((state, delta) => {
    date = Date.now() * 0.0001
    ref.current.rotation.y += 0.01
    // orbiting effect
    ref.current.position.x = Math.cos(date) * orbitRadius
    ref.current.position.z = Math.sin(date) * orbitRadius
  })

  return <>
    <directionalLight position={[-50, 0, 5]} ref={ref}/>
  </>
}
