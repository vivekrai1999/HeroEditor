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

function CancelButtonSettings() {
    const dispatch = useDispatch();
    const cancelButtonSettings = useSelector((state) => state.popupSettings.settings.cancelButton);

    const updateSettings = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "cancelButton", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Cancel Button Settings
            </Text>

            <CollapsibleSection title="Font">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Font Color" value={cancelButtonSettings.color.text} onChange={(value) => updateSettings("color", { ...cancelButtonSettings.color, text: value })} />
                    <TypographyControl
                        label="Typography"
                        fontFamily={cancelButtonSettings.typography.fontFamily}
                        setFontFamily={(value) => updateSettings("typography", { ...cancelButtonSettings.typography, fontFamily: value })}
                        customFontFamily={cancelButtonSettings.typography.customFontFamily}
                        setCustomFontFamily={(value) => updateSettings("typography", { ...cancelButtonSettings.typography, customFontFamily: value })}
                        fontStyle={cancelButtonSettings.typography.fontStyle}
                        setFontStyle={(value) => updateSettings("typography", { ...cancelButtonSettings.typography, fontStyle: value })}
                        fontSize={cancelButtonSettings.typography.fontSize}
                        setFontSize={(value) => updateSettings("typography", { ...cancelButtonSettings.typography, fontSize: value })}
                    />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={cancelButtonSettings.color.background} onChange={(value) => updateSettings("color", { ...cancelButtonSettings.color, background: value })} />
                </BlockStack>
            </CollapsibleSection>

            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={cancelButtonSettings.color.border} onChange={(value) => updateSettings("color", { ...cancelButtonSettings.color, border: value })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={cancelButtonSettings.borderType} onChange={(value) => updateSettings("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSettings("borderWidth", value)} value={cancelButtonSettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSettings("borderRadius", value)} value={cancelButtonSettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default CancelButtonSettings;
