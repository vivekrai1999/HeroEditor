import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { Button, Text, BlockStack, InlineStack } from "@shopify/polaris";
import "@shopify/polaris/build/esm/styles.css";
import CloseButtonSettings from "./CloseButton/CloseButtonSettings";
import BackdropSettings from "./BackDrop/BackdropSettings";
import LogoImageSettings from "./LogoImage/LogoImageSettings";
import CancelButtonSettings from "./CancelButton/CancelButtonSettings";
import RedirectButtonSettings from "./RedirectButton/RedirectButtonSettings";
import FooterSettings from "./Footer/FooterSettings";
import BodySettings from "./Body/BodySettings";
import HeaderSettings from "./Header/HeaderSettings";
import ContainerSettings from "./Container/ContainerSettings";
import { Container } from "postcss";

const SidebarContainer = styled.div`
    font-family: Verdana, sans-serif;
    max-height: calc(100% + 1px);
    grid-row: span 4 / span 4;
    grid-column-start: 5;
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

const ResourcePickerWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 1px solid #e8e8e9;
    border-radius: 5px;
    background: #fff;
    padding: ${({ isEmpty }) => (isEmpty ? "15px 0" : "initial")};
`;

function SideBarRight({ selectedComponent }) {
    const renderSettings = () => {
        switch (selectedComponent) {
            case "Container":
                return <ContainerSettings />;
            case "Header":
                return <HeaderSettings />;
            case "Body":
                return <BodySettings />;
            case "Footer":
                return <FooterSettings />;
            case "Redirect Button":
                return <RedirectButtonSettings />;
            case "Cancel Button":
                return <CancelButtonSettings />;
            case "Logo Image":
                return <LogoImageSettings />;
            case "Backdrop":
                return <BackdropSettings />;
            case "Close Button":
                return <CloseButtonSettings />;
            default:
                return <ContainerSettings />;
        }
    };

    return (
        <SidebarContainer>
            <SidebarLayout>
                <SidebarContent>
                    <SidebarScrollableContent>{renderSettings()}</SidebarScrollableContent>
                </SidebarContent>
            </SidebarLayout>
        </SidebarContainer>
    );
}

export default SideBarRight;
