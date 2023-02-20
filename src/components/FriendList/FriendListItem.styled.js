import styled from "styled-components";


export const FriendItem = styled.li`

  width: 100%;
  display: flex;
  gap: 20px;
  grid-template-columns: 1fr 2fr 3fr;
  margin-top: 10px;
  margin-right: 10px;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 15px;
  border-radius: 10px;
`;

export const Status = styled.span`

  border-radius: 50%;
  margin: auto 10px;
  height: 20px;
  width: 20px;  
  
  ${({ status }) => {
    if (status === true) {
        return 'background-color: green;';
    } else {
        return 'background-color: red;';
    }
  }}
`;

