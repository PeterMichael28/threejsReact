import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
// import gsap from 'gsap'


const Cube = () => {


    const ref = useRef()
    useFrame( state => {
     
        ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2
    })
  return (
    <mesh castShadow>
                  <boxGeometry  />
                  <meshStandardMaterial color='#b810d6'>
                      <RenderTexture attach='map'>
                          <PerspectiveCamera makeDefault position={[0,0,5]}/> 
                          <color attach='background' args={ [ "pink" ] } />
                          <Text fontSize={2} color='#70516d' ref={ref}>
                              MichEal
                          </Text>
                      </RenderTexture>
                  </meshStandardMaterial>
              </mesh>
  )
}

export default Cube