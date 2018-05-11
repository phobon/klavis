import Box from "./box";
const Inline = Box.withComponent("span");
export default Inline.extend`
    display: inline-flex;
`;