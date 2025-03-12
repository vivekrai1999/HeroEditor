import { FullscreenBar, Button, Text, Icon, Tooltip } from "@shopify/polaris";
import { useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import { DesktopIcon, MobileIcon, RedoIcon, ResetIcon, TabletIcon, UndoIcon, ViewIcon } from "@shopify/polaris-icons";
import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    grid-column: span 5 / span 5;
`;

const NavPrimary = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    width: 100%;
`;

const ButtonBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const ButtonContainer = styled.div`
    display: flex;
    column-gap: 10px;
`;

const TitleContainer = styled.div`
    height: initial;
    padding: 0 10px 0 20px;
    display: flex;
    align-items: center;
`;

const DeviceGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const DeviceGroupList = styled.div`
    display: flex;
    list-style: none;
    margin: 0;
    align-items: center;
    background-color: var(--p-color-bg-fill-secondary);
    border-radius: var(--p-border-radius-200);
    gap: var(--p-space-025);
    padding: 0 var(--p-space-050);
    width: 100%;
`;

const DeviceGroupListItem = styled.div`
    cursor: pointer;
`;

const DeviceButton = styled.button`
    width: 100%;
    flex: 1;
    display: block;
    position: relative;
    padding: var(--p-space-100);
    border-radius: calc(var(--p-border-radius-200) - 0.09375rem);
    background: var(--p-color-bg-fill-secondary);
    border: 0;
    outline: none;
    cursor: pointer;
    line-height: 1.25rem;
    margin-top: var(--p-space-050);
    margin-bottom: var(--p-space-050);
    transition: all 0.3s ease;

    ${({ $active }) =>
        $active &&
        `
      background: var(--p-color-bg-surface);
      backdrop-blur: md;
      box-shadow: var(--p-shadow-200);
    `}
`;

const IconContainer = styled.div`
    border-radius: var(--p-border-radius-200);
    cursor: pointer;
    overflow: hidden;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavSecondary = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
    margin: 0 10px;
`;

const TooltipContainer = styled.div`
    border-radius: var(--p-border-radius-200);
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    cursor: pointer;
`;

const NavActions = styled.div`
    height: 100%;
    align-items: center;
    display: flex;
`;

const OnOffWrapper = styled.div`
    margin-left: 8px;
    margin-right: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

function Header() {
    const [activeDevice, setActiveDevice] = useState("mobile");
    const devices = [
        { id: "mobile", icon: MobileIcon },
        { id: "tablet", icon: TabletIcon },
        { id: "desktop", icon: DesktopIcon },
    ];

    return (
        <StyledHeader>
            <FullscreenBar onAction={() => {}}>
                <NavPrimary>
                    <TitleContainer>
                        <Text variant="headingSm" as="h2">
                            Hero Redirect Editor
                        </Text>
                    </TitleContainer>
                    <ButtonBlock>
                        <ButtonContainer>
                            <DeviceGroup>
                                <DeviceGroupList>
                                    {devices.map((device) => (
                                        <DeviceGroupListItem key={device.id}>
                                            <DeviceButton $active={activeDevice === device.id} onClick={() => setActiveDevice(device.id)}>
                                                <Icon source={device.icon} tone="base" />
                                            </DeviceButton>
                                        </DeviceGroupListItem>
                                    ))}
                                </DeviceGroupList>
                            </DeviceGroup>
                            <IconContainer>
                                <Tooltip active content="Preview">
                                    <Icon source={ViewIcon} tone="base" />
                                </Tooltip>
                            </IconContainer>
                        </ButtonContainer>
                    </ButtonBlock>
                </NavPrimary>
                <NavSecondary>
                    <Tooltip active content="Reset to Default">
                        <TooltipContainer>
                            <Icon source={ResetIcon} tone="subdued" />
                        </TooltipContainer>
                    </Tooltip>
                </NavSecondary>
                <NavActions>
                    <Tooltip active content="Undo">
                        <TooltipContainer>
                            <Icon source={UndoIcon} tone="base" />
                        </TooltipContainer>
                    </Tooltip>
                    <Tooltip active content="Redo">
                        <TooltipContainer>
                            <Icon source={RedoIcon} tone="base" />
                        </TooltipContainer>
                    </Tooltip>
                </NavActions>
                <OnOffWrapper>
                    <Button variant="primary">Save</Button>
                </OnOffWrapper>
            </FullscreenBar>
        </StyledHeader>
    );
}

export default Header;
