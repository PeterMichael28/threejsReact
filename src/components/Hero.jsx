import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';
import Test, { angleToRadians } from './Test';
import { Canvas} from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei'
import Cube from './Cube';

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
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
  flex: 2;
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

const Text = styled.p`
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
  flex: 3;
  position: relative;
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
  transform: translateY(-20px);
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(40px)
    }
  }

`


const Hero = () => {
  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Heading>Think. Make. <br/> Solve.</Heading>
          <MiddleCon>
            <Img src='./img/line.png'></Img>
            <Text>What We Do</Text>
          </MiddleCon>
          <Description>
            We enjoy creating delightful, human-centered digital experience
          </Description>
          <Button>Learn More</Button>
        </Left>
        <Right>
          {/**3d Model */ }
          <Canvas className='canvas' shadows>
              {/**Camera */}
              <OrbitControls autoRotate={ true } enablePan={ false } enableZoom={ false } autoRotateSpeed={ 5 } />
              
             {/*ambient light*/}
             <ambientLight args={ [ '#fff', 0.8 ] } />
              
              {/**Directional light */ }
            <spotLight position={ [ 2, 5, -6 ] }/>
            
            <Sphere args={ [ 1, 100, 200 ] } scale={ 2.7 }>
            <MeshDistortMaterial color='#620ba4' attach='material' distort={ 0.5 } speed={2} />  
            </Sphere>
          </Canvas>
        <RightImg src='./img/moon.png'></RightImg>
        </Right>
      </Container>
    </Section>
  )
}

export default Hero