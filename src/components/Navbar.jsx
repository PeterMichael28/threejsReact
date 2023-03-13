import React from 'react'
import styled from 'styled-components';

const Section = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
`
const Container = styled.div`
 max-width: 1200px;
 display: flex;
 justify-content: space-between;
 padding: 10px;
 width: 100%;
 align-items: center;

`
const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
 
`

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
 
`

const Logo = styled.img`
    width: 50px;
    height: 50px;
    object-fit: contain;
    cursor:pointer;
`
const Lists = styled.ul`
    list-style:none;
    display: flex;
    align-items:center;
    gap: 15px;
    color: white;
`

const ListsItems = styled.li`
    font-size: .9rem;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease all;

    &:hover{
        color: rgba(255,255, 255, .9);
        transform: scale(.95);
    }
`

const SearchIcon = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    cursor: pointer;

`
const Button = styled.button`
    padding: 10px;
    border: none;
    background: #8e278e;
    color: white;
    font-size: .8rem;
    border-radius: 5px;
    transition: .5s ease all;
    cursor:pointer;

    &:hover{
        background-color: transparent;
        border: 1px solid #8e278e;
        color: #f123f1;
    }
`

const Navbar = () => {
  return (
      <Section>
          <Container>
              <Links>
                  <Logo src='./img/logo.png'></Logo>
                  <Lists>
                      <ListsItems>Home</ListsItems>
                      <ListsItems>About</ListsItems>
                      <ListsItems>Works</ListsItems>
                      <ListsItems>Contact</ListsItems>
                  </Lists>
              </Links>
              <Icons>
                  <SearchIcon src='./img/search.png'></SearchIcon>
                  <Button>Hire Now</Button>
              </Icons>
          </Container>
    </Section>
  )
}

export default Navbar