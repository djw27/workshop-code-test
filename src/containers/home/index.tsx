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
    // It's important to make sure that the loading state is
    // only set *after* any functionality that will exit the
    // function. Otherwise the loading indicator will display
    // and not hide if there is no input, or an error
    if (input.length === 0 || inputError) {
      return;
    }
    setLoading(true);
    setCities(await getCities(input));
    setLoading(false);
  }

  const handleChange = (value: string) => {
    // The previous regex took the approach of blacklisting,
    // rather than whitelisting, and as a result, some things
    // slipped through, including special chars: ,./ etc
    //
    // By whitelisting it's clear what text is allowed
    const lettersOnly = /^[a-zA-Z]+$/;
    if (!value.match(lettersOnly)) {
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
