import styled from 'styled-components'

export const Container = styled.header`
  padding: 25px 8% 40px 8%;
  background-color: #e40f0f;
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  width: 100%;
  gap: 10px;

  h1 {
    font-size: 32px;
    font-weight: 700;
    color: #fff;
  }

  p {
    font-size: 14px;
    color: #eee;
  }
`

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  color: #eee;
  
  p {
    font-size: 12px;
    font-weight: 700;
    color: #fff;
  }

  p:first-child {
    font-size: 12px;
    font-weight: 700;
    color: #eee;
  }
`
