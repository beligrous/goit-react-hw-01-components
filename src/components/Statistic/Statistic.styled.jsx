import styled from '@emotion/styled';

export const Container = styled.section`
  width: 800px;
  margin: auto;
  margin-top: 50px;
  text-align: center;
  background-color: white;
  border: 2px solid;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 30px;
  list-style: none;
  border-right: 2px solid black;
  &:last-child {
    border-right: 0;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
  margin: 0;
  border-top: 2px solid black;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 20px;
  text-transform: uppercase;
`;

export const StatValue = styled.span`
  font-weight: 700;
  font-size: 30px;
`;
