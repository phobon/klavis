import * as React from "react";
import styled from "styled-components";

import { 
    Box, Flex, 
    Heading4, Text,
    FlexList, BoxListItem, BoxList } from "../../core";

import { Button, ButtonAppearanceType } from "../buttons";
import { IBreadcrumbLink, Breadcrumb } from "../breadcrumb";

interface IHeaderAction {
    label: string;
    appearance: ButtonAppearanceType;
    onClick: (args?: any) => void;
}

interface IHeaderProps {
    title: string;
    postTitle?: React.ReactNode;
    breadcrumbs?: IBreadcrumbLink[];
    actions?: IHeaderAction[];
    style?: any;
}

export default class PageHeader extends React.PureComponent<IHeaderProps> {
    render() {
        const { breadcrumbs, title, postTitle, actions, style } = this.props;

        const actionButtons = actions ? actions.map((b, i, a) => (
            <BoxListItem key={i} ml={2}>
                <Button {...b}>{b.label}</Button>
            </BoxListItem>
        )) : null;

        return (            
            <Flex fullWidth flexDirection="column" align="flex-start" style={style}>
                {breadcrumbs && <Breadcrumb separator="/" breadcrumbs={breadcrumbs}/>}

                <Box fullWidth justify="flex-start">
                    <Heading4 mr={3}>{title}</Heading4>

                    {postTitle && postTitle}

                    {actions && <FlexList justify="flex-end">
                         {actionButtons}
                    </FlexList>}
                </Box>

                {/* Filters? */}
            </Flex>
        )
    }
}