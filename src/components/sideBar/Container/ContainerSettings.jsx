import { BlockStack, Text } from "@shopify/polaris";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import ContainerAnimationOptions from "./ContainerAnimationOptions";
import CollapsibleSection from "../SharedComponents/CollapsibleSection";
import BorderRadiusPicker from "../SharedComponents/BorderRadiusPicker";
import BorderWidthPicker from "../SharedComponents/BorderWidthPicker";
import BorderStyleSelector from "../SharedComponents/BorderStyleSelector";
import ColorPickerItem from "../SharedComponents/ColorPickerItem";
import PaddingPicker from "./PaddingPicker";
import ContainerScaleSlider from "./ContainerScaleSlider";
import ContainerPosition from "./ContainerPosition";
import { updateComponentSettings } from "../../../redux/slice/popupSettingsSlice";

function ContainerSettings() {
    const dispatch = useDispatch();
    const containerSettings = useSelector((state) => state.popupSettings.settings.container);

    const options = [
        { label: "Fade", value: "fade" },
        { label: "Slide", value: "slide" },
    ];

    const updateSetting = useCallback(
        (key, value) => {
            dispatch(updateComponentSettings({ component: "container", newSettings: { [key]: value } }));
        },
        [dispatch]
    );

    return (
        <BlockStack gap={100}>
            <Text variant="headingMd" as="h2">
                Container Settings
            </Text>
            <CollapsibleSection title="General">
                <BlockStack gap={200}>
                    <ContainerAnimationOptions value={containerSettings.animation} onChange={(value) => updateSetting("animation", value)} options={options} />
                    <PaddingPicker label="Padding" onChange={(value) => updateSetting("padding", value)} value={containerSettings.padding} />
                    <ContainerScaleSlider value={containerSettings.scale} onChange={(value) => updateSetting("scale", value)} />
                    <ContainerPosition label="Position" position={containerSettings.position} setPosition={(value) => updateSetting("position", value)} />
                </BlockStack>
            </CollapsibleSection>
            <CollapsibleSection title="Background">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Background Color" value={containerSettings.color.background} onChange={(newHex) => updateSetting("color", { ...containerSettings.color, background: newHex })} />
                </BlockStack>
            </CollapsibleSection>
            <CollapsibleSection title="Border">
                <BlockStack gap={200}>
                    <ColorPickerItem label="Border Color" value={containerSettings.color.border} onChange={(newHex) => updateSetting("color", { ...containerSettings.color, border: newHex })} />
                    <BorderStyleSelector label="Border Style" selectedBorderStyle={containerSettings.borderType} onChange={(value) => updateSetting("borderType", value)} />
                    <BorderWidthPicker label="Border Width" onChange={(value) => updateSetting("borderWidth", value)} value={containerSettings.borderWidth} />
                    <BorderRadiusPicker label="Border Radius" onChange={(value) => updateSetting("borderRadius", value)} value={containerSettings.borderRadius} />
                </BlockStack>
            </CollapsibleSection>
        </BlockStack>
    );
}

export default ContainerSettings;
