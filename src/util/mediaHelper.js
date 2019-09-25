import { css } from 'styled-components'

export const SIZES = {
   DESKTOP: Number.MAX_VALUE,
   TABLET: 900,
   MOBILE: 650
};

export default Object.keys(SIZES).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (max-width: ${SIZES[label] / 16}em) {
        ${css(...args)}
      }
    `;

    return acc;
  }, {});