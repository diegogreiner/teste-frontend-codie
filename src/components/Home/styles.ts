import styled from "styled-components"

export const ContainerImg = styled.main`
  flex: 1;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
  }

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    text-align: center;
  }
`