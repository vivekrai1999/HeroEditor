import { RangeSlider } from "@shopify/polaris";

function ContainerScaleSlider({ value = 20, onChange }) {
    return <RangeSlider label="Scale" value={value} onChange={onChange} output min={15} max={25} />;
}

export default ContainerScaleSlider;
