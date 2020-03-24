import styled from "styled-components";

// The test outline actually specifies that the states
// and cities should be displayed in rows rather than
// in columns:
// state - city - city
// state - city
// state - city
// etc
export const CityContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 16px;
`;

export const City = styled.div`
  display: flex;
  box-shadow: 0px 0px 5px 0px rgba(38, 37, 38, 1);
  height: 150px;
  width: 150px;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
`;

