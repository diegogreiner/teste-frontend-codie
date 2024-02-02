import styled from 'styled-components'

export const Bar = styled.span`
  max-width: 550px;
  height: 1px;
  background-color: #d5d5d5;
  width: 100%;
  margin-bottom: 15px;
`
export const ContainerPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 14px;
  font-weight: 400;
  color: #747474;
  max-width: 550px;
  width: 100%;
  margin-bottom: 15px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      span {
        font-size: inherit;
        font-weight: inherit;
        margin-left: 5px;
      }
    }
  }

  span {
    font-size: 8px;
  }
`

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 550px;
  width: 100%;

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #1d1d1d;
  }
`
