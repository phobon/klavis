import styled from "styled-components";
import styledTs from "styled-components-ts";
import { space, SpaceProps } from "styled-system";

type OptionProps = SpaceProps;

const Option = styledTs<OptionProps>(styled.option)`
    border: none;
`;

Option.defaultProps = {
    p: 3
};

export default Option;