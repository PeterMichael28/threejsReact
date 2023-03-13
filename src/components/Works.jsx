import React, { useState } from 'react'
import styled from 'styled-components';
import Development from './works/Development';
import Illustration from './works/Illustration';
import ProductDesign from './works/ProductDesign';
import Social from './works/Social';
import WebDesgn from './works/WebDesgn';


const ListArrays = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media"
]


const Section = styled.section`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
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
  flex: 1;
`

const Lists = styled.ul`
  list-style: none;
  display: flex;
  flex-direction:column;
  justify-content: center;
  gap: 6px;

`

const ListItems = styled.li`
  font-size: 3.6rem;
  font-weight: 900;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  transition: .5s ease all;
  
  &::after{
    position: absolute;
    content:"${(props) => props.text}";
    left: 0;
    top: 0;
    width: 0px;
    color: #eed754;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover{  
    -webkit-text-stroke: 0px white;

    &::after{
     animation: text 1s linear both;
     

     @keyframes text {
    to{
      width: 100%;
    }
  }
    }

  }

  
`


const Right = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Works = () => {

  const [ work, setWork ] = useState( "Web Design" );


  return (
    <Section>
      <Container>
        <Left>
          <Lists>
            { ListArrays.map( lists => {
              return <ListItems key={ lists } text={ lists } onClick={() => setWork(lists) }>{ lists }</ListItems>
            })}
            
          </Lists>
        </Left>
        <Right>
          {
            work === 'Web Design' ? ( <WebDesgn /> ) : work === "Development" ? ( <Development /> ) : work === "Illustration" ? ( <Illustration /> ) : work === "Social Media" ? ( <Social /> ) : work === "Product Design" ? ( <ProductDesign /> ) : '' }
        </Right>
      </Container>

    </Section>
  )
}

export default Works