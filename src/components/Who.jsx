import React from 'react'
import styled from 'styled-components';
import Test, { angleToRadians } from './Test';
import { Canvas} from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Cube from './Cube';


const Section = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
`

const Container = styled.div`
 max-width: 1200px;
 height: 100vh;
 display: flex;
 justify-content: space-between;
 padding: 10px;
 width: 100%;
 align-items: center;
`
//left side
const Left = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 20px;
`;

const Heading = styled.h1`
  font-weight: bold;
  font-size: 3.6rem;
`
const MiddleCon = styled.div`
  display: flex;
  gap: 9px;
  align-items: center;
  
`
const Img = styled.img`
  width: 20px;
  height: 5px;
`

const Texts = styled.p`
  color: #f63809;
  font-size: .9rem;
  font-weight: bold;
`

const Description = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: #f598a7;
`
const Button = styled.button`
   padding: 10px;
   width:fit-content;
    border: none;
    background: #8e278e;
    color: white;
    font-size: 1rem;
    border-radius: 5px;
    transition: .5s ease all;
    cursor:pointer;

    &:hover{
        background-color: transparent;
        border: 1px solid #8e278e;
        color: #f123f1;
    }
`
//right side
const Right = styled.div`
  flex: 1;
  position: relative;
  /* border: 1px solid green; */
  height: 100%;

`

const RightImg = styled.img`
  
  width: 500px;
  height: 450px;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  top:0;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(40px)
    }
  }

`
const Who = () => {
  return (
    <Section>
       <Container>
        
        <Right>
        <Canvas className='canvas' shadows camera={{fov:52, position:[4,3.5,2]}}>
              

              {/**Camera */}
              <OrbitControls autoRotate={ true } enablePan={ false } enableZoom={ false } autoRotateSpeed={ 4 } />
              
             {/*ambient light*/}
             <ambientLight args={ [ '#fff', 0.8 ] } />
              
              {/**Directional light */ }
            <spotLight position={ [ 2, 5, -3 ] }/>
            
            <Cube />
            <Test />
{/* 
            <mesh rotation={[-(angleToRadians(90)), 0, 0]} position={[0, -2, 0] } receiveShadow>
                  <planeGeometry args={ [ 5, 5 ] }  />
                    <meshStandardMaterial color="#b810d6" />
                </mesh>  */}
          </Canvas>
        </Right>
        <Left>
          <Heading>Think outside the <br/>square box</Heading>
          <MiddleCon>
            <Img src='./img/line.png'></Img>
            <Texts>What We Do</Texts>
          </MiddleCon>
          <Description>
            a creative group of designers and developers with a passion for arts
          </Description>
          <Button>See our works</Button>
        </Left>
      </Container>
    </Section>
  )
}

export default Who