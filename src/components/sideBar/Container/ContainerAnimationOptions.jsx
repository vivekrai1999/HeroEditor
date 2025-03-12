import { Select } from "@shopify/polaris";
import { useState, useCallback } from "react";

function ContainerAnimationOptions({ value, onChange, options }) {
    return <Select label="Animation" options={options} onChange={onChange} value={value} />;
}

export default ContainerAnimationOptions;
