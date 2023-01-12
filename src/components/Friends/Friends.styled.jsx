import styled from '@emotion/styled';

export const Container = styled.ul`
  width: 800px;
  padding: 50px 150px;
  margin: 50px auto;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  border: 2px solid black;
`;

export const Friend = styled.li`
  display: flex;
  gap: 40px;
  padding: 20px;
  margin-bottom: 30px;
  &:last-child {
    margin-bottom: 0;
  }
  list-style: none;
  border: 1px solid black;
  border-radius: 20px;
  box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
`;

export const Avatar = styled.img`
  border: 1px solid black;
  border-radius: 10px;
  padding: 15px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 30px;
  margin: 0;
  align-self: center;
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  align-self: center;
  border: 1px solid black;
  border-radius: 50%;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
`;
