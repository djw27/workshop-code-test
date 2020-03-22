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
