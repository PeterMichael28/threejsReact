/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 sceneDraco.gltf --transform
Author: pozo3d (https://sketchfab.com/pozo3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/mac-book-pro-37bb355b092f458b9e82aa6b30c914b6
Title: Mac Book Pro
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/mac/sceneDraco-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.blinn14SG} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.blinn14SG} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.blinn14SG} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.blinn11SG} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.blinn21SG} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.blinn21SG} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.blinn14SG} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.blinn14SG} />
        <mesh geometry={nodes.Object_10.geometry} material={materials.blinn14SG} />
      </group>
    </group>
  )
}

useGLTF.preload('/sceneDraco-transformed.glb')
