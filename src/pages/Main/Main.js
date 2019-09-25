import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
    color: white;
`;

export const Main = (props) => {
    return (
        <Container>
            <Header/>
            <Footer/>
        </Container>
    );
}