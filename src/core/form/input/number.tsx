import * as React from "react";

import Input, { InputProps } from "./input";

const NumberInput = (props: any) => (
    <Input type="number" {...props} />
);

export default NumberInput;