import React from 'react'
import styled from 'styled-components';
import MapChart from './MapCharts';



const Section = styled.section`
  height: 100vh;
  color: white;
  scroll-snap-align: center;
`
const Container = styled.div`
 height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  gap: 50px;
  align-items: center;
  width: 100%;
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const Title = styled.h1`
  font-weight: 300;
  color: pink;
`


const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  
`;
const Input = styled.input`
  padding: 13px 15px;
  background-color: #e8e0e0;
  width: 300px;
  border: none;
  border-radius: 5px;
  outline: none;


`
const TextArea = styled.textarea`
  padding: 20px;
  background-color: #e8e0e0;
  border: none;
  border-radius: 5px;
  outline: none;
`
const Button = styled.button`
 background: #8e278e;
 border: none;
 padding: 15px;
 border-radius: 5px;
 color: white;
font-size: 1.1rem;
font-weight: 600;
letter-spacing: 2px;
cursor: pointer;
transition: .5s ease all;

&:hover{
        background-color: transparent;
        border: 1px solid #8e278e;
        color: #f123f1;
    }

`



const Right = styled.div`
  flex: 1;
`




const Contact = () => {
  return (
    <Section>
      <Container>
        <Left>
          <Form>
          <Title>Contact Us</Title>
          <Input placeholder='Name'></Input>
          <Input placeholder='Email' type='email'></Input>
            <TextArea placeholder='Your Message' rows={8}></TextArea>
            <Button>Send</Button>
          </Form>
        </Left>
        <Right>
          <MapChart />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact