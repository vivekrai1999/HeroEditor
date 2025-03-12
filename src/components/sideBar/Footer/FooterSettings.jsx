import { BlockStack, Text } from "@shopify/polaris";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import CollapsibleSection from "../SharedComponents/CollapsibleSection";
import BorderRadiusPicker from "../SharedComponents/BorderRadiusPicker";
import BorderWidthPicker from "../SharedComponents/BorderWidthPicker";
import BorderStyleSelector from "../SharedComponents/BorderStyleSelector";
import ColorPickerItem from "../SharedComponents/ColorPickerItem";
import TypographyControl from "../SharedComponents/TypographyControl";
import { updateComponentSettings } from "../../../redux/slice/popupSettingsSlice";

function FooterSettings() {
    const dispatch = useDispatch();
    const footerSettings = useSelector((state) => state.popupSettings.settings.footer);

    const updateSettings = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "footer", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Footer Settings
            </Text>

            <CollapsibleSection title="Font">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Font Color" value={footerSettings.color.text} onChange={(value) => updateSettings("color", { ...footerSettings.color, text: value })} />
                    <TypographyControl
                        label="Typography"
                        fontFamily={footerSettings.typography.fontFamily}
                        setFontFamily={(value) => updateSettings("typography", { ...footerSettings.typography, fontFamily: value })}
                        customFontFamily={footerSettings.typography.customFontFamily}
                        setCustomFontFamily={(value) => updateSettings("typography", { ...footerSettings.typography, customFontFamily: value })}
                        fontStyle={footerSettings.typography.fontStyle}
                        setFontStyle={(value) => updateSettings("typography", { ...footerSettings.typography, fontStyle: value })}
                        fontSize={footerSettings.typography.fontSize}
                        setFontSize={(value) => updateSettings("typography", { ...footerSettings.typography, fontSize: value })}
                    />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={footerSettings.color.background} onChange={(value) => updateSettings("color", { ...footerSettings.color, background: value })} />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={footerSettings.color.border} onChange={(value) => updateSettings("color", { ...footerSettings.color, border: value })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={footerSettings.borderType} onChange={(value) => updateSettings("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSettings("borderWidth", value)} value={footerSettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSettings("borderRadius", value)} value={footerSettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default FooterSettings;
