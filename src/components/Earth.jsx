import { useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import React, { useRef } from 'react'
import { DoubleSide } from 'three'

export default function Earth(props) {
  const ref = useRef()
  const refC = useRef()
  const [colorMap, bumpMap, specularMap, cloudMap] = useLoader(TextureLoader, [
    'earth-day-map.jpg',
    'earth-bump-map.jpg',
    'earth-specular-map.jpg',
    'earth-clouds.jpg'
  ])
  useFrame((state, delta) => (ref.current.rotation.y += 0.002) && (ref.current.rotation.x += 0.0001) && (refC.current.rotation.x += 0.0012 * Math.random()))

  const clouds = <mesh
    {...props}
    ref={refC}
    scale={1.0075}>
    <sphereGeometry/>
    <meshPhongMaterial
      map={cloudMap}
      opacity={0.54}
      side={DoubleSide}
      transparent={true}
      depthWrite={true}
    />
  </mesh>

  return <mesh
    {...props}
    ref={ref}
    scale={1}
    receiveShadow={true}>
    <sphereGeometry/>
    <meshPhongMaterial
      map={colorMap}
      bumpMap={bumpMap}
      bumpScale={0.09}
      specularMap={specularMap}
      specular="grey"
    />
    {clouds}
  </mesh>
}
