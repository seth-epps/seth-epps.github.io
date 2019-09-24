import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { IconWrapper } from "../IconWrapper/IconWrapper";

const Container = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Footer = () => (
    <Container>
        <FontAwesomeIcon icon={faGithubAlt} />
        <IconWrapper>
            {"Test"}
        </IconWrapper>
    </Container>
);