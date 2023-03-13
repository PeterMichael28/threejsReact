import styled from 'styled-components'



export const Container = styled.div`
  height: 100vh;
  
  background-color: rebeccapurple;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background: url('./img/bg.jpeg') no-repeat center/cover;
  
  &::-webkit-scrollbar{
    display: none;
  }
`

