import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 0px 15px;
  max-width: 550px;
  width: 100%;

  & > label, & > h4 {
    padding-top: 13px;
    width: 20%;
  }

  & > span,
  & > div {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    h4 {
      width: 100%;
    }
  }

  h4 {
    font-size: 12px;
    font-weight: 700;
    color: #1d1d1d;
  }
`
