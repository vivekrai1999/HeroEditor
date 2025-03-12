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

function RedirectButtonSettings() {
    const dispatch = useDispatch();
    const redirectButtonSettings = useSelector((state) => state.popupSettings.settings.redirectButton);

    const updateSettings = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "redirectButton", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Redirect Button Settings
            </Text>

            <CollapsibleSection title="Font">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Font Color" value={redirectButtonSettings.color.text} onChange={(value) => updateSettings("color", { ...redirectButtonSettings.color, text: value })} />
                    <TypographyControl
                        label="Typography"
                        fontFamily={redirectButtonSettings.typography.fontFamily}
                        setFontFamily={(value) => updateSettings("typography", { ...redirectButtonSettings.typography, fontFamily: value })}
                        customFontFamily={redirectButtonSettings.typography.customFontFamily}
                        setCustomFontFamily={(value) => updateSettings("typography", { ...redirectButtonSettings.typography, customFontFamily: value })}
                        fontStyle={redirectButtonSettings.typography.fontStyle}
                        setFontStyle={(value) => updateSettings("typography", { ...redirectButtonSettings.typography, fontStyle: value })}
                        fontSize={redirectButtonSettings.typography.fontSize}
                        setFontSize={(value) => updateSettings("typography", { ...redirectButtonSettings.typography, fontSize: value })}
                    />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={redirectButtonSettings.color.background} onChange={(value) => updateSettings("color", { ...redirectButtonSettings.color, background: value })} />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={redirectButtonSettings.color.border} onChange={(value) => updateSettings("color", { ...redirectButtonSettings.color, border: value })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={redirectButtonSettings.borderType} onChange={(value) => updateSettings("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSettings("borderWidth", value)} value={redirectButtonSettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSettings("borderRadius", value)} value={redirectButtonSettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default RedirectButtonSettings;
