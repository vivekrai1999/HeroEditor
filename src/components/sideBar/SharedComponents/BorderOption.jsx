import { InlineStack } from "@shopify/polaris";
import styled from "styled-components";

const BorderPreviewWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15px;
    height: 15px;
    margin-right: 5px;
`;

const BorderOption = ({ value, label }) => (
    <InlineStack gap={100}>
        <BorderPreviewWrapper style={{ border: `3px ${value} rgb(0, 0, 0)` }} />
        <div>{label}</div>
    </InlineStack>
);

export default BorderOption;
