import styled from "styled-components";
import "@shopify/polaris/build/esm/styles.css";
import { BlockStack, Button, Icon, InlineStack } from "@shopify/polaris";
import { BlankFilledIcon, ExternalIcon, ImageIcon, LayoutBlockIcon, LayoutFooterIcon, LayoutHeaderIcon, LayoutPopupIcon, LayoutSectionIcon, XCircleIcon } from "@shopify/polaris-icons";
import { useState } from "react";

const SidebarContainer = styled.div`
    font-family: Verdana, sans-serif;
    max-height: calc(100% + 1px);
    grid-row: span 4 / span 4;
    grid-row-start: 2;
`;

const SidebarLayout = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-color: #ffffff;
`;

const SidebarContent = styled.div`
    height: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-top: 0;
    min-width: 230px;
    width: 350px;
`;

const SidebarScrollableContent = styled.div`
    border-top: var(--p-border-width-025) solid var(--p-color-border-secondary);
    padding: 10px 20px;
    height: 100%;
    overflow-y: auto;
`;

const sideBarLeftOptions = [
    { name: "Container", icon: LayoutBlockIcon },
    { name: "Header", icon: LayoutHeaderIcon },
    { name: "Body", icon: LayoutSectionIcon },
    { name: "Footer", icon: LayoutFooterIcon },
    { name: "Redirect Button", icon: ExternalIcon },
    { name: "Cancel Button", icon: XCircleIcon },
    { name: "Logo Image", icon: ImageIcon },
    { name: "Backdrop", icon: BlankFilledIcon },
    { name: "Close Button", icon: LayoutPopupIcon },
];

function SideBarLeft({ onSelectComponent }) {
    const [activeComponent, setActiveComponent] = useState("Container");

    const handleClick = (name) => {
        setActiveComponent(name);
        onSelectComponent(name);
    };

    return (
        <SidebarContainer>
            <SidebarLayout>
                <SidebarContent>
                    <SidebarScrollableContent>
                        <BlockStack gap={300}>
                            {sideBarLeftOptions.map(({ name, icon }) => (
                                <Button key={name} size="large" icon={<Icon tone="primary" source={icon} />} onClick={() => handleClick(name)} fullWidth textAlign="left" pressed={activeComponent === name}>
                                    <div style={{ padding: "5px" }}>
                                        <InlineStack gap={100}>{name}</InlineStack>
                                    </div>
                                </Button>
                            ))}
                        </BlockStack>
                    </SidebarScrollableContent>
                </SidebarContent>
            </SidebarLayout>
        </SidebarContainer>
    );
}

export default SideBarLeft;
