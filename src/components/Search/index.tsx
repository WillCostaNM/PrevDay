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

  const handleClick = () => {
    setState(inputValue);
  }

  return(
    <Row>
      <Input onChange={handleChange} />
      <Button onClick={handleClick}>T</Button>
    </Row>
  )
}
