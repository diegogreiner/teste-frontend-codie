import styled from 'styled-components'

export const Container = styled.div`
  padding: 13px;
  border-radius: 50px;
  background-color: #e40f0f;
  display: flex;
  align-items: center;
  gap: 13px;
  cursor: pointer;

  svg {
    width: 37px;
    height: 34px;
  }

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: #fff;
    display: none;
    transition: all 1ss;
  }
`
