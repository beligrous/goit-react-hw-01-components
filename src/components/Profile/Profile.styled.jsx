import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding-top: 50px;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  border: 2px solid black;
`;

export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid grey;
  box-shadow: 10px 10px 40px 9px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 10px 10px 40px 9px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 40px 9px rgba(0, 0, 0, 0.75);
`;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  background-color: tomato;
  border-top: 2px solid black;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 30px;
  list-style: none;
  &:last-child {
    border-left: 2px solid black;
  }
  &:first-child {
    border-right: 2px solid black;
  }
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
`;

export const Stats = styled.span`
  font-weight: 700;
  font-size: 30px;
`;
