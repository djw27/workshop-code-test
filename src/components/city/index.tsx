import React from "react";
import _ from "lodash";
import genKey from "weak-key";
import { CityContainer, City } from "./styles";
import { CityType } from '../../helpers/types'

interface IProps {
  state: string,
  city: CityType[]
}

// The only confusing thing here is some of the variable
// names - `city` is actually an array of city + state
// objects
export default ({ city, state }: IProps) => {
  return (
    <CityContainer>
      <City>
        <p>{state}</p>
      </City>
      {_.map(city, name => {
        const uid = genKey(name);
        return (
          <City key={uid}>
            <p>{name.city}</p>
          </City>
        )
      })}
    </CityContainer>
  );
};
