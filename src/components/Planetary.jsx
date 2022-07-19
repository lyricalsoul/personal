import { Canvas, useLoader } from '@react-three/fiber'
import Earth from './Earth.jsx'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import styled from '@emotion/styled'
import Moon from './Moon.jsx'
import Sun from './Sun.jsx'

const CanvasWrapper = styled.div`
  position: absolute;
  width: 100%;
  left: 0%;
  top: 0px;
  height: 50vh;
  display: grid;
  justify-items: center;
`

const CanvasSpacing = styled.div`
  position: relative;
  height: 45vh;
`

export default function Planetary() {
  const [galaxyMap] = useLoader(TextureLoader, ['stars-milky.jpg'])

  return <>
    <CanvasWrapper>
      <Canvas>
        <ambientLight intensity={0.05}/>
        <Sun scale={1.2}/>
        <Earth/>
        <Moon />
      </Canvas>
    </CanvasWrapper>
    <CanvasSpacing />
  </>
}
