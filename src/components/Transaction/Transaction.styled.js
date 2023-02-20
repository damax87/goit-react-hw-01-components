import styled from "styled-components";


export const TransactionHistoryTable = styled.table`

  margin: 20px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 15px;
  border-radius: 10px;
`;

export const HederRow = styled.thead`

  font-size: 40px;
  text-align: center;   
`;

export const ValuesRow = styled.tr`

  width: 100%;
  color: gray;
  font-size: 30px;
  text-align: center;
  text-transform: capitalize;
  &:nth-child(even) {
  background-color: lightgrey;
}
`;

export const ColumnHeader = styled.th`

  width: 25%;
  padding: 10px 20px;
  background-color: lightblue;
  color: white;
  font-size: 30px;
  text-align: center;
  &:first-child {
  border-radius: 10px 0 0 10px;
}
  &:last-child {
  border-radius: 0 10px 10px 0;
}
`;