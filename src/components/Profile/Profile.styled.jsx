import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  margin: auto;
  padding: 50px;
  text-align: center;
  background-color: white;
  border-radius: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid grey;
`;

export const Stats = styled.ul`
  display: flex;
  gap: 50px;
  justify-content: center;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
`;
