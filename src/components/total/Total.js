import React from "react";
import { calculateTotal } from "./utils";

const Total = ({ items }) => <div>${calculateTotal(items)}</div>;

export default Total;
