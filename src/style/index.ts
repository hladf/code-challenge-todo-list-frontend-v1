import styled, { createGlobalStyle, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;


  }
`;
export const MainPage = styled.main<{
  justify?: 'between' | 'center' | 'start' | 'end' | 'space-around' | 'space-evenly';
}>`
  display: grid;
  gap: 1em;
  justify-items: center;
  width: 100vw;
  height: 100vh;
`;

export const TodosContainer = styled.section`
  width: 80%;
  height: 700px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  padding: 1em;
`;

export const TodoCardContainer = styled.section`
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  display: flex;
  overflow-wrap: break-word;
  flex-direction: column;
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  gap: 1em;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 70%;
  }
`;

export const Title = styled.h1<{
  color?: 'black' | 'white';
}>`
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  font-size: 0.9em;
  color: ${(props) => props.color};
  white-space: pre-wrap;
  word-break: break-all;
`;

export const Paragraph = styled.p`
  font-family: monospace;
  font-size: 14px;
  text-align: justify;
`;
export const Link = styled.a<{
  color?: 'black' | 'white';
}>`
  cursor: pointer;
  font-size: 1.2rem;
  text-decoration: none;
  display: flex;

  align-items: center;
  font-weight: bold;
  transition: 0.5s all ease-out;
  color: ${({ color }) => (color === 'white' ? 'white' : 'black')};

  &:hover {
    opacity: 0.6;
  }
`;
const ping = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
`;

export const BackLink = styled(Link)`
  color: black;
  font-size: 20px;

  margin-top: 0;
  &:hover {
    animation: ${ping} 0.9s infinite;
  }
`;

export const LinkDetail = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  height: 80px;
  background-color: black;
  border-radius: 0px 0px 10px 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1.5em;
  margin-top: 1em;
`;

export const Label = styled.label`
  font-size: 1.2em;
  font-weight: bold;
  margin-right: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 14px;
  border: none;
  font-weight: bold;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;
  &:hover {
    opacity: 0.4;
  }
`;

export const ButtonDelete = styled(Button)`
  color: red;

  &:hover {
    color: black;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5em;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const FlexContainer = styled.div<{
  justify?:
    | 'space-between'
    | 'center'
    | 'start'
    | 'end'
    | 'space-around'
    | 'space-evenly';
}>`
  display: flex;
  overflow-x: wrap;
  width: 100%;

  justify-content: ${(props) => props.justify || 'center'};
`;

export const FlexContainerCenter = styled(FlexContainer)`
  justify-content: center;
  gap: 1em;
  align-items: center;
`;

export const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid black;
  padding: 0.5em;
  height: 150px;
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 2px red;
  }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f0f0f0;
`;

export const ErrorMensage = styled.p`
  color: red;
  font-size: 14px;
`;
export const FlexCol = styled.div<{
  align?: 'between' | 'center' | 'start' | 'end' | 'space-around' | 'space-evenly';
}>`
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 100%;
  align-items: ${(props) => props.align};
`;
