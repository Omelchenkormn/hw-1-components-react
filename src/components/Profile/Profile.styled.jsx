import styled from '@emotion/styled';

export const Card = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #ffff;
    width: 300px;
    border: 1px solid #dbe3ec;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

export const Description = styled.div`
    margin-top: 40px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const Img = styled.img`
    width: 150px;
    border-radius: 100%;
    
`;
export const UserName = styled.p`
    font-size: 23px;
    color: #455160;
    font-weight: 500;
`;

export const Tag = styled.p`
    font-size: 15px;
    color: #9faab5;
`;

export const Location = styled.p`
    font-size: 16px;
    color: #9faab5;
    padding-bottom: 15px;
`;

export const Stats = styled.div`
    display: flex;
    background-color: #f3f6f9;
    height: 80px;
    list-style-type: none;
    border-top: 1px solid #dbe3ec;
    padding: 0;
    
`;

export const List = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #dbe3ec;
    padding: 0;
    flex-basis: 33%;
`;

export const Label = styled.span`
    color: #a0abb6;
`;

export const Quantity = styled.span`
    font-weight: 600;
    color:  #263b51;
    padding-top: 7px;
`;