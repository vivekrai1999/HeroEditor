import { InlineStack, Label, RangeSlider, Select, Text, TextField } from "@shopify/polaris";
import styled from "styled-components";

const TypographyPreview = styled.div`
    min-height: 40px;
    display: flex;
    margin-bottom: 8px;
    background: #fff;
    align-items: center;
    justify-content: center;
    border: 1px solid #e1e3e5;
    box-sizing: border-box;
    line-height: normal;
    cursor: default;
    padding: 1px;
`;

const TypographyCard = styled.div`
    min-height: 164px;
    padding: 7px;
    margin: 4px 0;
    background-color: #f6f6f7;
    border-radius: 4px;
`;

const TypographySelectors = styled.div`
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;
    margin-bottom: 0.5rem;
`;

const customMarginDiv = {
    marginBottom: "8px",
};

const FONT_FAMILY_OPTIONS = [
    { label: "Arial", value: "Arial" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Times New Roman", value: '"Times New Roman", Times, serif' },
    { label: "Custom", value: "Custom" },
];

const FONT_STYLE_OPTIONS = [
    { label: "Normal", value: "normal" },
    { label: "Bold", value: "bold" },
    { label: "Italic", value: "italic" },
    { label: "Bold Italic", value: "boldItalic" },
];

function TypographyControl({ label, fontFamily, setFontFamily, customFontFamily, setCustomFontFamily, fontStyle, setFontStyle, fontSize, setFontSize }) {
    const finalFontFamily = fontFamily === "Custom" ? customFontFamily || "Arial" : fontFamily;
    const fontWeight = fontStyle === "bold" || fontStyle === "boldItalic" ? "bold" : "normal";
    const fontStyleCSS = fontStyle === "italic" || fontStyle === "boldItalic" ? "italic" : "normal";

    return (
        <>
            <Text>{label}</Text>
            <TypographyCard>
                <TypographyPreview style={{ fontFamily: finalFontFamily, fontWeight, fontStyle: fontStyleCSS, fontSize: `${fontSize}px` }}>Example Text</TypographyPreview>
                <TypographySelectors>
                    <Select options={FONT_FAMILY_OPTIONS} onChange={setFontFamily} value={fontFamily} />
                    <Select options={FONT_STYLE_OPTIONS} onChange={setFontStyle} value={fontStyle} />
                </TypographySelectors>
                {fontFamily === "Custom" && (
                    <div style={customMarginDiv}>
                        <TextField value={customFontFamily} onChange={setCustomFontFamily} placeholder="Enter font family" />
                    </div>
                )}
                <RangeSlider
                    label={
                        <Label>
                            <InlineStack gap={500}>
                                <p>Font Size</p>
                                <InlineStack>
                                    <p>{fontSize}</p>
                                    <p>px</p>
                                </InlineStack>
                            </InlineStack>
                        </Label>
                    }
                    value={fontSize}
                    onChange={setFontSize}
                    output
                    min={8}
                    max={35}
                />
            </TypographyCard>
        </>
    );
}

export default TypographyControl;
