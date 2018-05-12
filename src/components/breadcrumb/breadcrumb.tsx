import * as React from "react";
import styled from "styled-components";
import { BoxList, BoxListItem, Inline } from "../../core";
import { NavLink } from "react-router-dom";

export interface IBreadcrumbLink {
    label: string;
    to: string;
}

interface IBreadcrumbProps {
    breadcrumbs: IBreadcrumbLink[];
    separator: "/" | ">"
    style?: any;
}

const BreadcrumbLink = styled(NavLink)`
    color: ${props => props.theme.colors.grayscale[3]};
`;

export default class Breadcrumb extends React.PureComponent<IBreadcrumbProps> {
    render() {
        const { breadcrumbs, style, separator } = this.props;

        const crumbs = breadcrumbs.map((b, i, a) => {
            const isLast = i !== a.length - 1;
            return (
                <BoxListItem key={i} mt="0">
                    <BreadcrumbLink to={b.to} color="grayscale.3">
                        {b.label}
                    </BreadcrumbLink>
                    {isLast && <Inline mx={2} color="grayscale.3">{separator}</Inline>}
                </BoxListItem>
            )
        });

        return (
            <BoxList style={style} fontSize={1}>
                {crumbs}
            </BoxList>
        )
    }
}