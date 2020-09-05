import React from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

//NavBar is deletable depending on what I want it to look like

const Spin = keyframes`to {
  transform: rotate(360deg);
}`;

const NavBar = () => (
  <header
    css={css`
      /* background-color: ${colors.light}; */
      padding: 15px;
      margin-bottom: 15px;
      border-radius: 0 0 5px 5px;
    `}
  >
    <Link
      css={css`
        &:hover {
          text-decoration: underline;
        }
      `}
      to="/"
    >
      Adopt Me!
    </Link>

    <span
      css={css`
        display: inline-block;
        animation: 2s ${Spin} linear infinite;
        font-size: 50px;
      `}
      aria-label="logo"
      role="img"
    >
      🐶
    </span>
  </header>
);

export default NavBar;
