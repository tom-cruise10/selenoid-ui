import styled from "styled-components/macro";

export const AuthContainer = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
    font-family: 'Inter', sans-serif;
    color: #fff;
`;

export const AuthCard = styled.div`
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    padding: 40px;
    width: 100%;
    max-width: 400px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const AuthTitle = styled.h2`
    margin: 0;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    color: #fff;
    letter-spacing: 0.5px;
`;

export const AuthSubtitle = styled.p`
    margin: 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
    text-align: center;
`;

export const AuthInput = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    background: rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 16px;
    outline: none;
    transition: all 0.3s ease;
    box-sizing: border-box;

    &:focus {
        border-color: #00c6f4;
        background: rgba(0, 0, 0, 0.3);
        box-shadow: 0 0 0 2px rgba(0, 198, 244, 0.3);
    }
    
    &::placeholder {
        color: rgba(255, 255, 255, 0.5);
    }
`;

export const AuthButton = styled.button`
    width: 100%;
    padding: 14px;
    border-radius: 8px;
    border: none;
    background: linear-gradient(90deg, #4195d3 0%, #00c6f4 100%);
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 15px rgba(0, 198, 244, 0.4);
    }
    
    &:active {
        transform: translateY(0);
    }
`;

export const AuthLink = styled.span`
    color: #00c6f4;
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
    
    &:hover {
        color: #fff;
    }
`;

export const AuthError = styled.div`
    background: rgba(255, 75, 75, 0.2);
    border: 1px solid rgba(255, 75, 75, 0.5);
    color: #ffb3b3;
    padding: 10px;
    border-radius: 6px;
    font-size: 14px;
    text-align: center;
`;
