import styled from "styled-components";

// The test outline actually specifies that the states
// and cities should be displayed in rows rather than
// in columns:
// state - city - city
// state - city
// state - city
// etc
export const CitiesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
