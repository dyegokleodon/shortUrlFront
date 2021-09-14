import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #84878D, #525252);
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Content = styled.div`
  width: 100%;
  max-width: 715px;
  text-align: center;
  display: grid;

  form {
  display: flex;

  }

  input {
    background: rgba(0,0,0,0.7);
    border: 0;
    border-radius: 4px;
    height: 44px;
    width: 100%;
    padding: 0 15px;
    color: #fff;
    margin: 5px 5px 0;

    &::placeholder {
      color: rgba(255,255,255,1);
    }
  }

  span {
    color: #F40202;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  button {
    margin: 5px 0 10px;
    height: 44px;
    width: 100px;
    background: #151514;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2;

    &:hover {
      background: ${darken(0.3, '#151514')}
    }
  }

  a {
    color: #fff;
    margin-top: 15px;
    font-size: 18px;
    opacity: 0.7;

    &:hover{
      opacity: 1;
    }
  }

  ul{
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 10px;
    margin-top: 20px;
  }

`;

export const UrlList = styled.li`

  padding: 10px;
  border-radius: 4px;
  background: #fff;
  display: flex;

  strong {
    display: block;
    font: 12px;
    margin-left: 60px;
  }

  p {
    display: block;
    font: 12px;
    margin-left: 90px;
  }

  span {
    display: block;
    font: 12px;
    margin-left: 90px;
  }
`;
