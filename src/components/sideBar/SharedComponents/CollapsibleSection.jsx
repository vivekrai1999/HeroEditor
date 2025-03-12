import React, { useState, useCallback, memo } from "react";
import { Collapsible, Icon } from "@shopify/polaris";
import { CaretDownIcon } from "@shopify/polaris-icons";
import styled from "styled-components";

const ContainerSection = styled.div`
    box-shadow: inset 0px -1px 0px #e1e3e5;
    padding: 12px 0;
`;

const Activator = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;
    color: #6d7175;
    cursor: pointer;
`;

const ActivatorIcon = styled.div`
    transform: rotate(0deg);
    transition: all 0.3s ease;
`;

const transitionSettings = {
    duration: "500ms",
    timingFunction: "ease-in-out",
};

const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
    const [open, setOpen] = useState(defaultOpen);

    const toggleOpen = useCallback(() => {
        setOpen((prev) => !prev);
    }, []);

    return (
        <ContainerSection>
            <Activator onClick={toggleOpen}>
                {title}
                <ActivatorIcon>
                    <Icon source={CaretDownIcon} style={{ transform: open ? "rotate(0deg)" : "rotate(-90deg)" }} />
                </ActivatorIcon>
            </Activator>
            <Collapsible open={open} transition={transitionSettings} expandOnPrint>
                {children}
            </Collapsible>
        </ContainerSection>
    );
};

export default memo(CollapsibleSection);
