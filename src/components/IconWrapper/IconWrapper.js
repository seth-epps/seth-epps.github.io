import React from "react";
import styled from "styled-components";
import mediaHelper from "../../util/mediaHelper";

const CONSTANTS = {
    DESKTOP: "DESKTOP",
    TABLET: "TABLET",
    MOBILE: "MOBILE"
};

const ICON_SIZES = {
    DESKTOP: 60,
    TABLET: 40,
    MOBILE: 20
};

const getRelativeCircleSize = (iconSize) => {

    return `
    height: ${ICON_SIZES[iconSize]}px;
    width: ${ICON_SIZES[iconSize]}px;
    line-height: ${ICON_SIZES[iconSize]}px;

    border-radius: ${ICON_SIZES[iconSize]/2}px
`
};

const CircleWrapper = styled.div`
    display: block;
    font-size: 1rem;
    ${mediaHelper.DESKTOP} {
        ${getRelativeCircleSize(CONSTANTS.DESKTOP)}
    }
    ${mediaHelper.TABLET} {
        ${getRelativeCircleSize(CONSTANTS.TABLET)}
    }
    ${mediaHelper.MOBILE} {
        ${getRelativeCircleSize(CONSTANTS.MOBILE)}
    }
`;

export const IconWrapper = ({children}) => (
    <CircleWrapper>
        {children}
    </CircleWrapper>
);

