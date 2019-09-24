import React from 'react';
import styled from "styled-components";
import { Footer } from "./components/Footer/Footer";

const MainContent = styled.div`
	display: flex;
  flex: 1 1 auto;
	flex-direction: column;
	justify-content: center;
	background-color: #282c34;
	height: 100%;
	overflow: hidden;
	position: relative;
`;

function App() {
  return (
    <MainContent>
      <header>
        <div>
          Seth Epps
        </div>
      </header>
      <Footer/>
    </MainContent>
  );
}

export default App;