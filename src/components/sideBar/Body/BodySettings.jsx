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

function BodySettings() {
    const dispatch = useDispatch();
    const bodySettings = useSelector((state) => state.popupSettings.settings.body);

    const updateSettings = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "body", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Body Settings
            </Text>

            <CollapsibleSection title="Font">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Font Color" value={bodySettings.color.text} onChange={(value) => updateSettings("color", { ...bodySettings.color, text: value })} />
                    <TypographyControl
                        label="Typography"
                        fontFamily={bodySettings.typography.fontFamily}
                        setFontFamily={(value) => updateSettings("typography", { ...bodySettings.typography, fontFamily: value })}
                        customFontFamily={bodySettings.typography.customFontFamily}
                        setCustomFontFamily={(value) => updateSettings("typography", { ...bodySettings.typography, customFontFamily: value })}
                        fontStyle={bodySettings.typography.fontStyle}
                        setFontStyle={(value) => updateSettings("typography", { ...bodySettings.typography, fontStyle: value })}
                        fontSize={bodySettings.typography.fontSize}
                        setFontSize={(value) => updateSettings("typography", { ...bodySettings.typography, fontSize: value })}
                    />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={bodySettings.color.background} onChange={(value) => updateSettings("color", { ...bodySettings.color, background: value })} />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={bodySettings.color.border} onChange={(value) => updateSettings("color", { ...bodySettings.color, border: value })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={bodySettings.borderType} onChange={(value) => updateSettings("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSettings("borderWidth", value)} value={bodySettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSettings("borderRadius", value)} value={bodySettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default BodySettings;
