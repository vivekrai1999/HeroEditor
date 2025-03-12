import React, { useCallback, useState, useMemo } from "react";
import { Connected, TextField, Button, Popover, Box, BlockStack, InlineStack, Icon, Text } from "@shopify/polaris";
import { CornerRoundIcon } from "@shopify/polaris-icons";

const SvgBorderRadiusIcon = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" id="mdi-border-radius" viewBox="0 0 24 24">
            <path
                fill="#000"
                d="M3 16C3 18.8 5.2 21 8 21H10V19H8C6.3 19 5 17.7 5 16V14H3V16M21 8C21 5.2 18.8 3 16 3H14V5H16C17.7 5 19 6.3 19 8V10H21V8M16 21C18.8 21 21 18.8 21 16V14H19V16C19 17.7 17.7 19 16 19H14V21H16M8 3C5.2 3 3 5.2 3 8V10H5V8C5 6.3 6.3 5 8 5H10V3H8Z"
            />
        </svg>
    </div>
);

const CORNERS = [
    { key: "topLeft", label: "Top Left", rotate: 0 },
    { key: "topRight", label: "Top Right", rotate: 90 },
    { key: "bottomLeft", label: "Bottom Left", rotate: 270 },
    { key: "bottomRight", label: "Bottom Right", rotate: 180 },
];

const prefixStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

function BorderRadiusPicker({ label, value, onChange }) {
    const [radii, setRadii] = useState(value || { topLeft: 0, topRight: 0, bottomLeft: 0, bottomRight: 0 });
    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleCornerChange = useCallback(
        (corner, newValue) => {
            const newRadii = { ...radii, [corner]: newValue };
            setRadii(newRadii);
            if (onChange) {
                onChange(newRadii);
            }
        },
        [radii, onChange]
    );

    const displayValue = useMemo(() => {
        const uniform = radii.topLeft === radii.topRight && radii.topLeft === radii.bottomLeft && radii.topLeft === radii.bottomRight;
        return uniform ? radii.topLeft.toString() : "mixed";
    }, [radii]);

    const activator = <Button icon={<SvgBorderRadiusIcon />} onClick={togglePopover} />;

    return (
        <BlockStack gap={100}>
            <Text>{label}</Text>
            <Connected
                children={<TextField value={displayValue} readOnly />}
                right={
                    <Popover activator={activator} active={popoverActive} onClose={togglePopover} preferredPosition="above">
                        <Popover.Pane>
                            <div style={{ maxWidth: "180px", padding: "10px" }}>
                                <BlockStack gap={300}>
                                    <InlineStack gap={300} wrap={false}>
                                        {CORNERS.slice(0, 2).map((corner) => (
                                            <TextField
                                                key={corner.key}
                                                label=""
                                                value={radii[corner.key].toString()}
                                                onChange={(newVal) => handleCornerChange(corner.key, parseInt(newVal, 10) || 0)}
                                                prefix={
                                                    <div
                                                        style={{
                                                            ...prefixStyle,
                                                            transform: `rotateZ(${corner.rotate}deg)`,
                                                        }}
                                                    >
                                                        <Icon source={CornerRoundIcon} tone="base" />
                                                    </div>
                                                }
                                            />
                                        ))}
                                    </InlineStack>
                                    <InlineStack gap={300} wrap={false}>
                                        {CORNERS.slice(2, 4).map((corner) => (
                                            <TextField
                                                key={corner.key}
                                                label=""
                                                value={radii[corner.key].toString()}
                                                onChange={(newVal) => handleCornerChange(corner.key, parseInt(newVal, 10) || 0)}
                                                prefix={
                                                    <div
                                                        style={{
                                                            ...prefixStyle,
                                                            transform: `rotateZ(${corner.rotate}deg)`,
                                                        }}
                                                    >
                                                        <Icon source={CornerRoundIcon} tone="base" />
                                                    </div>
                                                }
                                            />
                                        ))}
                                    </InlineStack>
                                </BlockStack>
                            </div>
                        </Popover.Pane>
                    </Popover>
                }
            />
        </BlockStack>
    );
}

export default BorderRadiusPicker;
