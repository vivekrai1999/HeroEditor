import React, { useCallback, useState, useMemo } from "react";
import { Connected, TextField, Button, Popover, BlockStack, Icon, InlineStack, Text } from "@shopify/polaris";
import { MinusIcon } from "@shopify/polaris-icons";

const SvgBorderWidthIcon = () => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" style={{ transform: "scale(1.3)" }}>
            <path fill="#000" fillOpacity="1" fillRule="evenodd" stroke="none" d="M9 6h6v1H9V6zm6 12H9v-1h6v1zm-9-3V9h1v6H6zm12-6v6h-1V9h1z" />
        </svg>
    </div>
);

const prefixStyle0 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotateZ(0deg)",
};

const prefixStyle90 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transform: "rotateZ(90deg)",
};

const popoverPaneStyle = { maxWidth: "180px", padding: "10px" };
const inputContainerStyle = { padding: "0px 40px" };

function PaddingPicker({ label, value, onChange }) {
    const [paddings, setPaddings] = useState(value || { top: 0, right: 0, bottom: 0, left: 0 });
    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleSideChange = useCallback(
        (side, newValue) => {
            const numericValue = parseInt(newValue, 10) || 0;
            const newPaddings = { ...paddings, [side]: numericValue };
            setPaddings(newPaddings);
            onChange && onChange(newPaddings);
        },
        [paddings, onChange]
    );

    const handleTopChange = useCallback((newVal) => handleSideChange("top", newVal), [handleSideChange]);
    const handleLeftChange = useCallback((newVal) => handleSideChange("left", newVal), [handleSideChange]);
    const handleRightChange = useCallback((newVal) => handleSideChange("right", newVal), [handleSideChange]);
    const handleBottomChange = useCallback((newVal) => handleSideChange("bottom", newVal), [handleSideChange]);

    const uniform = useMemo(() => paddings.top === paddings.right && paddings.top === paddings.bottom && paddings.top === paddings.left, [paddings]);

    const displayValue = useMemo(() => (uniform ? paddings.top.toString() : "Mixed"), [uniform, paddings]);

    return (
        <BlockStack gap={100}>
            <Text>{label}</Text>
            <Connected
                children={<TextField value={displayValue} readOnly />}
                right={
                    <Popover activator={<Button icon={<SvgBorderWidthIcon />} onClick={togglePopover} />} active={popoverActive} onClose={togglePopover} preferredPosition="above">
                        <Popover.Pane>
                            <div style={popoverPaneStyle}>
                                <BlockStack gap="300">
                                    {/* Top input */}
                                    <div style={inputContainerStyle}>
                                        <TextField
                                            label=""
                                            value={paddings.top.toString()}
                                            onChange={handleTopChange}
                                            prefix={
                                                <div style={prefixStyle0}>
                                                    <Icon source={MinusIcon} />
                                                </div>
                                            }
                                            placeholder="Top"
                                        />
                                    </div>
                                    <InlineStack wrap={false} gap={300}>
                                        <TextField
                                            label=""
                                            value={paddings.left.toString()}
                                            onChange={handleLeftChange}
                                            prefix={
                                                <div style={prefixStyle90}>
                                                    <Icon source={MinusIcon} />
                                                </div>
                                            }
                                            placeholder="Left"
                                        />
                                        <TextField
                                            label=""
                                            value={paddings.right.toString()}
                                            onChange={handleRightChange}
                                            prefix={
                                                <div style={prefixStyle90}>
                                                    <Icon source={MinusIcon} />
                                                </div>
                                            }
                                            placeholder="Right"
                                        />
                                    </InlineStack>
                                    {/* Bottom input */}
                                    <div style={inputContainerStyle}>
                                        <TextField
                                            label=""
                                            value={paddings.bottom.toString()}
                                            onChange={handleBottomChange}
                                            prefix={
                                                <div style={prefixStyle0}>
                                                    <Icon source={MinusIcon} />
                                                </div>
                                            }
                                            placeholder="Bottom"
                                        />
                                    </div>
                                </BlockStack>
                            </div>
                        </Popover.Pane>
                    </Popover>
                }
            />
        </BlockStack>
    );
}

export default PaddingPicker;
