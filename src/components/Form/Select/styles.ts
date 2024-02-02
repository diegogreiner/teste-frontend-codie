import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  input[type='checkbox'] {
    all: unset;
    inset: 0;
    position: absolute;
    cursor: pointer;
  }

  input[type='checkbox']:checked ~ ul {
    display: flex;
  }

  ul {
    padding: 0;
    flex-direction: column;
    list-style: none;
    width: 100%;
    max-height: 190px;
    overflow-y: auto;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid #d5d5d5;
    border-top: none;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
    }

    &:empty {
      border: none;
    }
  }

  li {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #747474;
    padding: 10px;
    position: relative;

    &:last-child {
      box-shadow: 0px 3px 5px -1px rgba(190, 190, 190, 1);
    }

    &:hover,
    &:has(input[type='radio']:checked) {
      background-color: rgba(240, 240, 240, 0.5);
      cursor: pointer;
    }
  }

  input[type='radio'] {
    all: unset;
    cursor: pointer;
    inset: 0;
    position: absolute;
  }
`

export const ContainerSelectStyled = styled.div`
  div:first-child {
    display: flex;
    max-height: 39px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #d5d5d5;
    font-size: 14px;
    font-weight: 500;
    color: #747474;
    padding: 10px;
  }
`

/*
import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input[type='checkbox'] {
    all: unset;
    inset: 0;
    position: absolute;
    cursor: pointer;
  }

  input[type='checkbox']:checked ~ ul {
    display: flex;
  }

  ul {
    position: absolute;
    top: 100%;
    margin: 0;
    padding: 0;
    flex-direction: column;
    list-style: none;
    width: 100%;
  }

  li {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    color: #747474;
    padding: 10px;
    border-left: 1px solid #d5d5d5;
    border-right: 1px solid #d5d5d5;
    position: relative;

    &:last-child {
      border-radius: 0px 0px 8px 8px;
      border-bottom: 1px solid #d5d5d5;
      box-shadow: 0px 3px 5px -1px rgba(190, 190, 190, 1);
    }

    &:hover,
    &:has(input[type='radio']:checked) {
      background-color: rgba(240, 240, 240, 0.5);
    }
  }

  input[type='radio'] {
    all: unset;
    cursor: pointer;
    inset: 0;
    position: absolute;
  }
`

export const ContainerSelectStyled = styled.div`
  div:first-child {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #d5d5d5;
    font-size: 14px;
    font-weight: 500;
    color: #747474;
    padding: 10px;
  }
`

*/
