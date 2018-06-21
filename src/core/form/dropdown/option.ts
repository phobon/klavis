import styled from "styled-components";
import { space, SpaceProps } from "styled-system";

type OptionProps = SpaceProps;

const Option = styled.option<OptionProps>`
    border: none;
`;

Option.defaultProps = {
    p: 3
};

export default Option;