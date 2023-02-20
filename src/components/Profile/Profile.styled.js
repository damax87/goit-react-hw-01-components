import styled from "styled-components";


export const ProfileContainer = styled.div`

  max-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 5px 10px 15px;
  border-radius: 10px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 15px;
`;

export const ProfileAvatar = styled.img`
  display: flex;
  max-width: 30%;
  border-radius: 10px;
  border: 5px solid black;
`;

export const ProfileName = styled.p`
  font-weight: bold;
  font-size: 40px;
`;

export const ProfileTagLocation = styled.p`
  margin: 5px;
  font-size: 30px;
  color: gray;
`;

export const ProfileStats = styled.ul`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  justify-content: center;
`;

export const ProfileList = styled.li`
  display: block;
  flex-direction: column;
  padding: 10px;
  font-size: 20px;
  text-align: center;
  gap: 10px;
  border-top: 2px solid black;

`;

export const ProfileLabel = styled.span`
  font-size: 20px;
  color: gray;
`;

export const ProfileQuantity = styled.span`
  font-weight: bold;
  border-radius: 0.5rem; 
`;
