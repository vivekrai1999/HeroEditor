import { useCallback, useEffect, useState, useMemo } from "react";
import { hexToHsv, hsvToHex } from "../../../utils/helper";
import { BlockStack, Box, ColorPicker, InlineStack, Popover, TextField, Text } from "@shopify/polaris";
import styled from "styled-components";

const ColorItem = styled.span`
    display: flex;
    margin: 4px 0;
    cursor: pointer;
`;

const ColorSwatch = styled.div`
    background-color: rgb(32, 34, 35);
    height: 2rem;
    width: 2rem;
    cursor: pointer;
    border-radius: 0.5rem;
    position: relative;
`;

const ColorPreviewBox = styled.div`
    outline: 1px solid rgba(0, 0, 0, 0.266666667);
    outline-offset: -1px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
`;

const PopoverContainer = styled.div`
    position: relative;
`;

const ColorPickerItem = ({ label, value, onChange }) => {
    const [popoverActive, setPopoverActive] = useState(false);
    const [color, setColor] = useState(hexToHsv(value));

    useEffect(() => {
        setColor(hexToHsv(value));
    }, [value]);

    const hexValue = useMemo(() => hsvToHex(color), [color]);

    const togglePopoverActive = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = useCallback(
        (newColor) => {
            setColor(newColor);
            onChange("#" + hsvToHex(newColor));
        },
        [onChange]
    );

    const handleHexChange = useCallback(
        (newHex) => {
            const cleaned = newHex.replace(/[^0-9A-Fa-f]/g, "");
            if (cleaned.length >= 6) {
                const newColor = hexToHsv(cleaned);
                setColor(newColor);
                onChange("#" + cleaned);
            }
        },
        [onChange]
    );

    return (
        <ColorItem>
            <BlockStack>
                <InlineStack gap={200} blockAlign="center">
                    <PopoverContainer>
                        <Popover
                            active={popoverActive}
                            activator={
                                <ColorSwatch onClick={togglePopoverActive}>
                                    <ColorPreviewBox style={{ backgroundColor: `#${hexValue}` }} />
                                </ColorSwatch>
                            }
                            onClose={togglePopoverActive}
                        >
                            <Popover.Pane>
                                <Box paddingBlockStart={150} paddingBlockEnd={200} paddingInlineStart={300} paddingInlineEnd={300}>
                                    <BlockStack gap="4">
                                        <div style={{ maxWidth: "220px", paddingBottom: "10px" }}>
                                            <BlockStack gap={200}>
                                                <ColorPicker color={color} onChange={handleColorChange} />
                                                <InlineStack gap="200" align="space-between" blockAlign="center" wrap={false}>
                                                    <TextField label="" prefix="#" value={hexValue} onChange={handleHexChange} />
                                                </InlineStack>
                                            </BlockStack>
                                        </div>
                                    </BlockStack>
                                </Box>
                            </Popover.Pane>
                        </Popover>
                    </PopoverContainer>
                    <BlockStack>
                        <Text variant="bold">{label}</Text>
                        <Text>#{hexValue}</Text>
                    </BlockStack>
                </InlineStack>
            </BlockStack>
        </ColorItem>
    );
};

export default ColorPickerItem;
