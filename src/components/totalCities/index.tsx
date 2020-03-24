import React from "react";
import _ from 'lodash';
import { CityType } from "../../helpers/types";

interface IProps {
  cities: CityType[],
  inputError: boolean,
}

// This is all good - personally I'd simply use a `length`
// check on the cities input, rather than using lodash
export default ({ cities, inputError }: IProps) => {
  return (
    <div>
      {_.isEmpty(cities) || inputError ? null : (
        <p>Total cities found: {cities.length}</p>
      )}
    </div>
  );
};
