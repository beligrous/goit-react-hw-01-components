import styled from '@emotion/styled';

export const Container = styled.div`
  width: 800px;
  padding: 50px;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  border: 2px solid black;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid black;
  border-collapse: collapse;
  box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
  -webkit-box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
  -moz-box-shadow: 12px 10px 14px 0px rgba(0, 0, 0, 0.82);
`;

export const Title = styled.thead`
  background-color: aqua;
  color: white;
  padding: 10px;
`;

export const Head = styled.th`
  padding: 10px;
  border: 1px solid #2a2a2a;
`;

export const Data = styled.td`
  padding: 10px;
  border: 1px solid #2a2a2a;

  }
`;

export const Row = styled.tr`
&:nth-child(2n) {
  background-color: grey;
`;
