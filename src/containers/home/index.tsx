import React, { useState } from "react";
import Search from '../../components/search'
import TotalCities from "../../components/totalCities";
import Spinner from "../../components/loadingSpinner";
import Cities from "../../components/cities";
import getCities from '../../helpers/getCities';

export default () => {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [inputError, setInputError] = useState(false);

  const search = async () => {
    setLoading(true);
    if (input.length === 0 || inputError) {
      return;
    }
    setCities(await getCities(input));
    setLoading(false);
  }

  const handleChange = (value: string) => {
    const numbers = /[0-9]/;
    const whiteSpace = /\s/;
    if (value.match(numbers) || value.match(whiteSpace)) {
      setInputError(true);
      return setInput(value);
    }
    setInputError(false);
    return setInput(value);
  };

  return (
    <div>
      <Search
        input={input}
        inputError={inputError}
        handleChange={handleChange}
        search={search}
      />
      <TotalCities cities={cities} inputError={inputError} />
      {loading ? <Spinner /> : <Cities cities={cities} />}
    </div>
  );
}
