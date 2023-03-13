import { OrbitControls, PerspectiveCamera, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Model } from './MacDraco';

const Social = () => {
  return (
    <Canvas camera={{fov:110}}>
    <Stage environment='city' intensity={0.7} > 
    <Model/>
    </Stage>
    <OrbitControls enableZoom={ false } />
</Canvas>
  )
}

export default Social