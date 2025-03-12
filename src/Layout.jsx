import React, { useState } from "react";
import Header from "./components/header/Header";
import PreviewArea from "./components/previewArea/PreviewArea";
import styled from "styled-components";
import SideBarRight from "./components/sideBar/SideBarRight";
import SideBarLeft from "./components/sideBar/SideBarLeft";

const StyledLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: min-content 1fr;
    gap: 0px;
`;

function Layout() {
    const [selectedComponent, setSelectedComponent] = useState(null);
    return (
        <StyledLayout>
            <Header />
            <SideBarLeft onSelectComponent={setSelectedComponent} />
            <PreviewArea />
            <SideBarRight selectedComponent={selectedComponent} />
        </StyledLayout>
    );
}

export default Layout;
