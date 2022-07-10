import styled from '@emotion/styled';
// import { jsx, css } from '@emotion/react'

export const Section = styled.div`
    background-color: white;
    width: 400px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;
export const Title = styled.h1`
    color: #62686b;
    text-align: center

`;
export const StatsUl = styled.div`
    display: flex;
    padding: 0;

`;
export const StatLi = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    flex-basis: 33%;
    height: 70px;
`;

export const Span = styled.span`
    color: #faf5f5e8;
`;