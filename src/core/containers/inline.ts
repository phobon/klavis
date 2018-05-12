import Box from "./box";

const Inline = Box.withComponent("span").extend`
    display: inline-flex;
`;

export default Inline;