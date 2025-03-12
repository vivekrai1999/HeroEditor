import { BlockStack, InlineStack, Checkbox, Text } from "@shopify/polaris";
import React from "react";
import styled from "styled-components";

const PositionCheckboxContainer = styled.div`
    height: 75px;
    box-shadow: inset 0 0 0 var(--p-border-width-0165) var(--p-color-input-border);
    border-radius: var(--p-border-radius-200);
    padding: 5px;
    display: flex;
    flex: 1;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border-color 0.2s ease-in-out;

    ${({ $isActive }) => $isActive && `border-color: #000000;`}
`;

function ContainerPosition({ label, position, setPosition }) {
    const alignments = [
        ["start", "start"],
        ["start", "center"],
        ["start", "end"],
        ["center", "start"],
        ["center", "center"],
        ["center", "end"],
        ["end", "start"],
        ["end", "center"],
        ["end", "end"],
    ];

    return (
        <BlockStack gap={100}>
            <Text>{label}</Text>
            {[0, 1, 2].map((row) => (
                <InlineStack gap={200} key={row}>
                    {alignments.slice(row * 3, row * 3 + 3).map(([alignItems, justifyContent], col) => {
                        const index = row * 3 + col;
                        return (
                            <PositionCheckboxContainer key={index} $isActive={position === index} style={{ alignItems, justifyContent }} onClick={() => setPosition(index)}>
                                <Checkbox checked={position === index} onChange={() => setPosition(index)} />
                            </PositionCheckboxContainer>
                        );
                    })}
                </InlineStack>
            ))}
        </BlockStack>
    );
}

export default ContainerPosition;
