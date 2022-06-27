import React, { ChangeEvent, useState } from "react";

import { Input, Button, Row } from "components";

type SearchProps = {
  setState: (arg1: string) => void
}

export const Search: React.FC<SearchProps> = ({setState}) => {

  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  return(
    <form onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setState(inputValue);
    }}>
      <Row>
        <Input onChange={handleChange} />
        <Button type="submit">T</Button>  
      </Row>
    </form>
  )
}
