import styled from '@emotion/styled';

export const FriendLists = styled.div`
    background-color: #fefefe;
    width: 300px;
    margin-bottom: 20px;
`;

export const FriendItem = styled.li`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    margin-bottom: 4px;
    box-shadow: 0 0 10px #2e2e3033;
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
`;

export const Img = styled.img`
    width: 60px;
    padding-right: 30px; 
`;


export const Status = styled.span`
    margin-right: 25px;
    border: 8px solid;
    border-radius: 50%;
    color : ${status => {
        if (status === true) {
            return  
        }
    }}
    `;

export const Name = styled.p`
    font-size: 20px;
    font-weight: 500px;
    color: black
`;
