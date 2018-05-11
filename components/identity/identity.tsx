import styled from "styled-components";
import styledTs from "styled-components-ts";
import * as React from "react";

import { NavLink, NavLinkProps } from 'react-router-dom';
import { IdentityIcon } from "../../tokens";

interface IIdentityProps extends NavLinkProps {
    palette: "colour" | "grayscale";
}

type IdentityProps = IIdentityProps;

const IdentityNavLink = styledTs<IdentityProps>(styled(NavLink))`
    display: flex;
    flex: none;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    transition: background 180ms ease-out, stroke 180ms ease-out, transform 180ms ease-out;
    stroke: none;
    width: 4rem;
    height: 4rem;
    border-radius: 100%;
    fill: ${props => props.palette === "grayscale" ? props.theme.colors.accent : props.theme.colors.white };
    background: ${props => props.palette === "grayscale" ? props.theme.colors.white : "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)" };
    &:hover {
        transform: scale(1.05)
    }
`;

export default (props: IIdentityProps) => (
    <IdentityNavLink {...props} to={"/"}>
        <IdentityIcon/>
    </IdentityNavLink>
);