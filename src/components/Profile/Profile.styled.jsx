import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  background-color: white;
  border-radius: 20px;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 5px solid grey;
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding-left: 0;
  background-color: tomato;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 100px) / 3);
  padding: 30px;
  list-style: none;
  border: 2px solid grey;
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

export const Stats = styled.span`
  font-weight: 700;
  font-size: 30px;
`;
