import React, { useEffect } from "react";
import styled, { css, keyframes } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideIn = keyframes`
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Overlay = styled.div`
    position: fixed;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
`;

const Container = styled.div`
    background-color: ${(props) => props.settings.color.background};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: ${(props) => `${props.settings.padding.top}px ${props.settings.padding.right}px ${props.settings.padding.bottom}px ${props.settings.padding.left}px`};
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(${(props) => props.settings.scale * 0.05});

    ${(props) => {
        const position = props.settings.position;
        let positionStyle = "";

        switch (position) {
            case 0:
                positionStyle = `
          position: absolute;
          top: 20px;
          left: 20px;
        `;
                break;
            case 1:
                positionStyle = `
          position: absolute;
          top: 20px;
          left: 50%;
          transform: translateX(-50%) scale(${props.settings.scale});
        `;
                break;
            case 2:
                positionStyle = `
          position: absolute;
          top: 20px;
          right: 20px;
        `;
                break;
            case 3:
                positionStyle = `
          position: absolute;
          top: 50%;
          left: 20px;
          transform: translateY(-50%) scale(${props.settings.scale});
        `;
                break;
            case 4:
                positionStyle = `
          position: relative;
        `;
                break;
            case 5:
                positionStyle = `
          position: absolute;
          top: 50%;
          right: 20px;
          transform: translateY(-50%) scale(${props.settings.scale});
        `;
                break;
            case 6:
                positionStyle = `
          position: absolute;
          bottom: 20px;
          left: 20px;
        `;
                break;
            case 7:
                positionStyle = `
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%) scale(${props.settings.scale});
        `;
                break;
            case 8:
                positionStyle = `
          position: absolute;
          bottom: 20px;
          right: 20px;
        `;
                break;
            default:
                positionStyle = `
          position: relative;
        `;
        }

        return css`
            ${positionStyle}
        `;
    }}

    animation: ${(props) => {
        switch (props.settings.animation) {
            case "fade":
                return css`
                    ${fadeIn} 0.3s ease-in-out
                `;
            case "slide":
                return css`
                    ${slideIn} 0.3s ease-in-out
                `;
            default:
                return css`
                    ${fadeIn} 0.3s ease-in-out
                `;
        }
    }};
`;

const Header = styled.div`
    background-color: ${(props) => props.settings.color.background};
    color: ${(props) => props.settings.color.text};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: 16px;
    font-family: ${(props) => props.settings.typography.customFontFamily || props.settings.typography.fontFamily};
    font-size: ${(props) => props.settings.typography.fontSize}px;
    font-style: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "italic":
                return "italic";
            case "normal":
                return "normal";
            case "bold":
                return "normal";
            case "boldItalic":
                return "italic";
            default:
                return "normal";
        }
    }};
    font-weight: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "bold":
                return "bold";
            case "boldItalic":
                return "bold";
            default:
                return "normal";
        }
    }};
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Body = styled.div`
    background-color: ${(props) => props.settings.color.background};
    color: ${(props) => props.settings.color.text};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: 16px;
    font-family: ${(props) => props.settings.typography.customFontFamily || props.settings.typography.fontFamily};
    font-size: ${(props) => props.settings.typography.fontSize}px;
    font-style: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "italic":
                return "italic";
            case "normal":
                return "normal";
            case "bold":
                return "normal";
            case "boldItalic":
                return "italic";
            default:
                return "normal";
        }
    }};
    font-weight: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "bold":
                return "bold";
            case "boldItalic":
                return "bold";
            default:
                return "normal";
        }
    }};
    flex: 1;
`;

const Footer = styled.div`
    background-color: ${(props) => props.settings.color.background};
    color: ${(props) => props.settings.color.text};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: 16px;
    font-family: ${(props) => props.settings.typography.customFontFamily || props.settings.typography.fontFamily};
    font-size: ${(props) => props.settings.typography.fontSize}px;
    font-style: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "italic":
                return "italic";
            case "normal":
                return "normal";
            case "bold":
                return "normal";
            case "boldItalic":
                return "italic";
            default:
                return "normal";
        }
    }};
    font-weight: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "bold":
                return "bold";
            case "boldItalic":
                return "bold";
            default:
                return "normal";
        }
    }};
    display: flex;
    justify-content: flex-end;
    gap: 10px;
`;

const RedirectButton = styled.div`
    background-color: ${(props) => props.settings.color.background};
    color: ${(props) => props.settings.color.text};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: 8px 16px;
    cursor: pointer;
    font-family: ${(props) => props.settings.typography.customFontFamily || props.settings.typography.fontFamily};
    font-size: ${(props) => props.settings.typography.fontSize}px;
    font-style: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "italic":
                return "italic";
            case "normal":
                return "normal";
            case "bold":
                return "normal";
            case "boldItalic":
                return "italic";
            default:
                return "normal";
        }
    }};
    font-weight: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "bold":
                return "bold";
            case "boldItalic":
                return "bold";
            default:
                return "normal";
        }
    }};
    &:hover {
        opacity: 0.9;
    }
`;

const CancelButton = styled.div`
    background-color: ${(props) => props.settings.color.background};
    color: ${(props) => props.settings.color.text};

    border-top: ${(props) => props.settings.borderWidth.top}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-right: ${(props) => props.settings.borderWidth.right}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-bottom: ${(props) => props.settings.borderWidth.bottom}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};
    border-left: ${(props) => props.settings.borderWidth.left}px ${(props) => props.settings.borderType} ${(props) => props.settings.color.border};

    border-radius: ${(props) => `${props.settings.borderRadius.topLeft}px ${props.settings.borderRadius.topRight}px ${props.settings.borderRadius.bottomRight}px ${props.settings.borderRadius.bottomLeft}px`};
    padding: 8px 16px;
    cursor: pointer;
    font-family: ${(props) => props.settings.typography.customFontFamily || props.settings.typography.fontFamily};
    font-size: ${(props) => props.settings.typography.fontSize}px;
    font-style: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "italic":
                return "italic";
            case "normal":
                return "normal";
            case "bold":
                return "normal";
            case "boldItalic":
                return "italic";
            default:
                return "normal";
        }
    }};
    font-weight: ${(props) => {
        switch (props.settings.typography.fontStyle) {
            case "bold":
                return "bold";
            case "boldItalic":
                return "bold";
            default:
                return "normal";
        }
    }};
    &:hover {
        opacity: 0.9;
    }
`;

const PreviewPopup = ({ isOpen }) => {
    const { settings } = useSelector((state) => state.popupSettings);

    if (!isOpen) return null;

    return (
        <Overlay>
            <Container settings={settings.container}>
                <Header settings={settings.header}>
                    <div>{"Welcome to VtechLab"}</div>
                </Header>
                <Body settings={settings.body}>{"You are visiting us from India, redirect to local store?"}</Body>
                <Footer settings={settings.footer}>
                    <CancelButton onClick={() => {}} settings={settings.cancelButton}>
                        {"Cancel"}
                    </CancelButton>
                    <RedirectButton onClick={() => {}} settings={settings.redirectButton}>
                        {"Yes"}
                    </RedirectButton>
                </Footer>
            </Container>
        </Overlay>
    );
};

export default PreviewPopup;
