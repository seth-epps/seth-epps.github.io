import React from "react";
import styled from "styled-components";
import mediaHelper from "../../util/mediaHelper";

const ICON_SIZES = {
    DESKTOP: 35,
    TABLET: 25,
    MOBILE: 20
};

const FONT_SIZES = {
    DESKTOP: 15,
    TABLET: 10.7,
    MOBILE: 8.6
}

const CircleWrapper = styled.div`
    display: block;

    height: ${ICON_SIZES.DESKTOP}px;
    width: ${ICON_SIZES.DESKTOP}px;
    line-height: ${ICON_SIZES.DESKTOP}px;
    font-size: ${FONT_SIZES.DESKTOP}px;

    text-align: center;
    border: 1px white solid;
    border-radius: 50%;

    transition: 200ms;

    margin-right: 5px;
    &: hover {
        color: grey;
        border-color: grey;
    }

    ${mediaHelper.TABLET`
        height: ${ICON_SIZES.TABLET}px;
        width: ${ICON_SIZES.TABLET}px;
        line-height: ${ICON_SIZES.TABLET}px;
        font-size: ${FONT_SIZES.TABLET}px;
    `}

    ${mediaHelper.MOBILE`
        height: ${ICON_SIZES.MOBILE}px;
        width: ${ICON_SIZES.MOBILE}px;
        line-height: ${ICON_SIZES.MOBILE}px;
        font-size: ${FONT_SIZES.MOBILE}px;
    `}

`;

export const IconWrapper = ({refLink, children}) => (
    <CircleWrapper onClick={()=> window.open(refLink, '_blank')}>
        {children}
    </CircleWrapper>
);

