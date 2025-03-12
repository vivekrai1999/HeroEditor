import React from "react";
import styled from "styled-components";
import PreviewPopup from "./PreviewPopup";

const StyledPreviewArea = styled.div`
    grid-column: span 3 / span 3;
    grid-row: span 4 / span 4;
    grid-row-start: 2;
    overflow: hidden;
`;

const PreviewContainer = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    background: #f6f6f7;
`;

const PreviewDesktopContainer = styled.div`
    width: 100%;
    height: 100%;
    box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05), 0 1px 3px 0 rgba(63, 63, 68, 0.15);
    background-color: #fff;
    background-image: linear-gradient(45deg, #f7f7f7 25%, transparent 25%, transparent 75%, #f7f7f7 75%, #f7f7f7 100%), linear-gradient(45deg, #f7f7f7 25%, transparent 25%, transparent 75%, #f7f7f7 75%, #f7f7f7 100%);
    background-size: 30px 30px;
    background-position: 0 0, 15px 15px;
    transition: allease-in-out 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

function PreviewArea() {
    return (
        <StyledPreviewArea>
            <PreviewContainer>
                <PreviewDesktopContainer>
                    <PreviewPopup isOpen={true} onClose={() => {}} />
                </PreviewDesktopContainer>
            </PreviewContainer>
        </StyledPreviewArea>
    );
}

export default PreviewArea;
