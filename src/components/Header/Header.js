import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
    font-size: calc(20px + 3vmin);
`;

export const Header = () => (
    <HeaderContainer>
        {"Seth Epps"}
    </HeaderContainer>
);