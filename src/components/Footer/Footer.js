import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubAlt, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconWrapper } from "../IconWrapper/IconWrapper";
import { EMAIL, PERSONAL_SITES } from "../../constants/constants";

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;

    margin-top: 2px;
`;

export const Footer = () => (
    <Container>
        <IconWrapper refLink={PERSONAL_SITES.TWITTER} >
            <FontAwesomeIcon icon={faTwitter} />
        </IconWrapper>
        <IconWrapper refLink={PERSONAL_SITES.LINKED_IN} >
            <FontAwesomeIcon icon={faLinkedinIn} />
        </IconWrapper>
        <IconWrapper refLink={PERSONAL_SITES.GIT} >
            <FontAwesomeIcon icon={faGithubAlt} />
        </IconWrapper>
        <IconWrapper refLink={`mailto:${EMAIL}`} >
            <FontAwesomeIcon icon={faEnvelope} />
        </IconWrapper>
    </Container>
);