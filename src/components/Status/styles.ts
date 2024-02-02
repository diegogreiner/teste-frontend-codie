import styled from 'styled-components'

export const Main = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;

  div {
    max-width: 410px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px 30px 30px;
    border-radius: 8px;
    border: 1px solid #df8686;
    background-color: #df86860a;
    gap: 15px;

    h2 {
      font-size: 20px;
      font-weight: 700;
      color: #1d1d1d;
    }

    p {
      font-size: 14px;
      font-weight: 400;
      text-align: center;
      color: #747474;
    }

    & p:last-child {
    }
  }
`
