import styled from '@emotion/styled';


export const Table = styled.table`
    background-color: #edf1f4;
    width: 500px;
    border-collapse: collapse; 
`;
export const TableTr = styled.tr`
    width: 500px;
`;

export const TableTh = styled.th`
	font-weight: bold;
	padding: 5px;
	color: white;
    background: #00bdd6;
`;

export const TableTd = styled.td`
    text-align: center;
    border: 1px solid white;
    &:nth-of-type(odd) {
    background-color: #c9ccc9;
    }
`;
