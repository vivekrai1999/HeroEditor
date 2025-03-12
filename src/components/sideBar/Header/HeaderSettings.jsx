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

function HeaderSettings() {
    const dispatch = useDispatch();
    const headerSettings = useSelector((state) => state.popupSettings.settings.header);

    const updateSettings = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "header", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Header Settings
            </Text>

            <CollapsibleSection title="Font">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Font Color" value={headerSettings.color.text} onChange={(value) => updateSettings("color", { ...headerSettings.color, text: value })} />
                    <TypographyControl
                        label="Typography"
                        fontFamily={headerSettings.typography.fontFamily}
                        setFontFamily={(value) => updateSettings("typography", { ...headerSettings.typography, fontFamily: value })}
                        customFontFamily={headerSettings.typography.customFontFamily}
                        setCustomFontFamily={(value) => updateSettings("typography", { ...headerSettings.typography, customFontFamily: value })}
                        fontStyle={headerSettings.typography.fontStyle}
                        setFontStyle={(value) => updateSettings("typography", { ...headerSettings.typography, fontStyle: value })}
                        fontSize={headerSettings.typography.fontSize}
                        setFontSize={(value) => updateSettings("typography", { ...headerSettings.typography, fontSize: value })}
                    />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={headerSettings.color.background} onChange={(value) => updateSettings("color", { ...headerSettings.color, background: value })} />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={headerSettings.color.border} onChange={(value) => updateSettings("color", { ...headerSettings.color, border: value })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={headerSettings.borderType} onChange={(value) => updateSettings("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSettings("borderWidth", value)} value={headerSettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSettings("borderRadius", value)} value={headerSettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default HeaderSettings;
