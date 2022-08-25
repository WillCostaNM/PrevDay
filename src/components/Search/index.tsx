import React, { ChangeEvent, useState, FormEvent, useRef, useEffect, KeyboardEvent, FocusEvent } from "react";
import axios, { AxiosError } from "axios";

import {Location} from "interfaces";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { Input, Button, Row, CityList } from "components";
import{  Form } from './styles';

type SearchProps = {
  setState: (arg1: string) => void;
}


export const Search: React.FC<SearchProps> = ({setState}) => {

  // variables
  const [inputValue, setInputValue] = useState('');
  const [cities, setCities] = useState<Location[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocus, setIsFocus] = useState<boolean>();
  const [cursor, setCursor] = useState(-1);
  const [isArrowKey, setIsArrowKey] = useState<boolean>();


  useEffect(()=>{
    async function getCities(){
      const response = await axios.get(`http://api.weatherapi.com/v1/search.json?key=${process.env.REACT_APP_API_KEY}&q=${inputValue}&days=7&lang=pt`);
      setCities(response.data as Location[]);
    }

    if(inputValue && !isArrowKey){
      getCities();
      setCursor(-1);
    }

  }, [inputValue]);

  

  // HandleEvents
  function handleFocus(){
    setIsFocus(true);
  }

  function handleBlur(e: FocusEvent<HTMLFormElement>){

    if (!e.currentTarget.contains(e.relatedTarget)) { 
      setIsFocus(false);
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = inputRef.current?.value as string;
    setIsFocus(false);
    setCities([]);
    inputRef.current?.blur();
    setState(inputValue);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if(!e.target.value){
      setCities([]);
    }
    setInputValue(e.target.value);
  }
  
  const handleClick = (city: string) => {
    setState(city);
    setInputValue(city);
    setIsArrowKey(true)
    setCities([]);
    setCursor(-1);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown' && cursor < cities.length - 1){
      setCursor(cursor + 1);
      setInputValue(cities[cursor+1].name);
      setIsArrowKey(true);
      
    } else if(e.key === 'ArrowUp' && cursor > 0){
      e.preventDefault();
      setCursor(cursor - 1);
      setInputValue(cities[cursor-1].name);
      setIsArrowKey(true);

    } else {
      setIsArrowKey(false);
    } 
  }

  return(
    <Form onBlur={handleBlur} onSubmit={handleSubmit}>
      <Row>
        <Input
          ref={inputRef} 
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          value={inputValue}
          onFocus={handleFocus}
        />
        <Button type="submit"><FontAwesomeIcon icon={faSearch}/></Button>  
      </Row>

      <div tabIndex={-1}>
        {
          cities.length > 0 && isFocus &&
          <CityList cities={cities} cursor={cursor} handleClick={handleClick}/>
          
        }
      </div>

    </Form>
  )
}
