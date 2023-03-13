import React, { useRef } from 'react'
import styled from 'styled-components';
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'


export const angleToRadians = (angleInDegree) => (Math.PI / 180) * angleInDegree



const Test = () => {

  const ref = useRef()

    // useFrame( ( state ) => {
    //     console.log(ref.current)
    // })
  return (

              <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, -.5, 0] } receiveShadow>
                  <planeGeometry args={ [ 3, 3 ] }  />
                    <meshStandardMaterial color="#b810d6" />
                </mesh>  
  )
}

export default Test