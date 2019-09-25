import React from 'react';
import styled from "styled-components";
import { Main } from "./pages/Main/Main";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
	background-color: #282c34;
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

function App() {
  return (
    <MainContent>
      <Main/>
    </MainContent>
  );
}

export default App;