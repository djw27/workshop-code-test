import React from "react";
import _ from 'lodash';
import genKey from 'weak-key';

import City from '../city';
import { CitiesContainer } from './styles';
import { CityType } from "../../helpers/types";

interface IProps {
  cities: CityType[],
}

export default ({ cities }: IProps) => {
  // `formatCities` returns a dictionary of cities grouped by state.
  // The result of this is passed to loadsh's `map` function to map
  // this dictionary into elements -
  //
  // By using lodash's `map` function we could be masking a type
  // error in the return from our `formatCities` function. By default
  // when we `map` we expect an Array - at least this is what the
  // es6 `map` function would expect.
  //
  // This code does work, as lodash accepts a dictionary or array,
  // but it could lead us to incorrectly assume that `formatCities`
  // returns an array.
  const formatCities = (cities: CityType[]) => {
    const groupedByState = _.groupBy(cities, "state");
    return groupedByState;
  };
  return (
    <CitiesContainer>
      {_.map(formatCities(cities), (city, key) => {
        const uid = genKey(city);
        return <City city={city} state={key} key={uid} />;
      })}
    </CitiesContainer>
  );
};
