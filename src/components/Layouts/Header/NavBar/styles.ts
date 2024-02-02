import styled from 'styled-components'

export const NavBarContainer = styled.nav`
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    gap: 25px;
    list-style: none;
    justify-content: center;
    align-items: center;
  }

  li:first-child {
    p {
      font-size: 14px;
      color: #000;
    }
  }
`
