import styled from "styled-components";


export const StatContainer = styled.section`

  margin-top: 30px;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 15px;
  border-radius: 10px;
`;

export const StatTitle = styled.h2`

margin: 0;
padding: 10px;
text-align: center;
color: black;
font-weight: bold;
font-size: 30px;
`;

export const StatList = styled.ul`

width: 100%;
display: grid;
grid-template-columns: repeat(5, 1fr);
margin: 0;
padding: 0;
list-style: none;
`;

export const StatListItem = styled.li`

display: flex;
flex-direction: column;
text-align: center;
&:first-child {
border-radius: 10px 0 0 10px;
}
&:last-child {
border-radius: 0 10px 10px 0;
}
`;

export const StatLabel = styled.span`

width: 100%;
padding-top: 10px;
font-size: 20px;
color: white;
`;

export const StatPercent = styled.span`

width: 100%;
padding-bottom: 5px;
font-size: 40px;
color: white;

`;
  