import React, { useCallback, useState, useMemo } from "react";
import { Button, Popover, OptionList, InlineStack, Text, BlockStack } from "@shopify/polaris";
import BorderOption from "./BorderOption";
import styled from "styled-components";

const BorderStylePreview = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const ActivatorContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const borderStyleOptions = [
    { value: "solid", label: <BorderOption value="solid" label="Solid" /> },
    { value: "dashed", label: <BorderOption value="dashed" label="Dashed" /> },
    { value: "dotted", label: <BorderOption value="dotted" label="Dotted" /> },
    { value: "double", label: <BorderOption value="double" label="Double" /> },
    { value: "groove", label: <BorderOption value="groove" label="Groove" /> },
    { value: "inset", label: <BorderOption value="inset" label="Inset" /> },
    { value: "outset", label: <BorderOption value="outset" label="Outset" /> },
    { value: "ridge", label: <BorderOption value="ridge" label="Ridge" /> },
];

function BorderStyleSelector({ label, selectedBorderStyle, onChange }) {
    const [borderStylePopupActive, setBorderStylePopupActive] = useState(false);

    const toggleBorderStylePopupActive = useCallback(() => setBorderStylePopupActive((active) => !active), []);

    const previewStyle = useMemo(
        () => ({
            border: `3px ${selectedBorderStyle} rgb(0, 0, 0)`,
            marginRight: "8px",
        }),
        [selectedBorderStyle]
    );

    return (
        <BlockStack gap={100}>
            <Text>{label}</Text>
            <Popover
                fullWidth
                active={borderStylePopupActive}
                onClose={toggleBorderStylePopupActive}
                activator={
                    <Button onClick={toggleBorderStylePopupActive} fullWidth textAlign="left" disclosure={borderStylePopupActive ? "up" : "down"}>
                        <InlineStack>
                            <ActivatorContent>
                                <BorderStylePreview style={previewStyle} />
                                <Text variant="bold">{selectedBorderStyle?.charAt(0).toUpperCase() + selectedBorderStyle.slice(1)}</Text>
                            </ActivatorContent>
                        </InlineStack>
                    </Button>
                }
            >
                <OptionList
                    onChange={(value) => {
                        onChange(value[0]);
                        toggleBorderStylePopupActive();
                    }}
                    options={borderStyleOptions}
                    selected={selectedBorderStyle}
                />
            </Popover>
        </BlockStack>
    );
}

export default BorderStyleSelector;
