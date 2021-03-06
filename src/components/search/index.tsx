import React from "react";
import { SearchInput, InputError, SearchButton } from "./styes";

interface IProps {
  input: string,
  inputError: boolean,
  handleChange: (value: string) => void,
  search: () => void
}

export default ({ input, handleChange, search, inputError }: IProps) => {
  return (
    <div>
      <SearchInput
        onChange={e => handleChange(e.target.value)}
        value={input}
        placeholder="search..."
        type="text"
        id="search"
        name="search"
      />
      <SearchButton onClick={() => search()}>Search</SearchButton>
      {inputError ? (
        <InputError>Please provide the valid input</InputError>
      ) : null}
    </div>
  );
};
