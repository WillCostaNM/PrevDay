import React, {useState} from "react";
import { Container, MobileWrapper } from "./style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

type WeekdayProps = {
  weekday: string,
  onClick: () => void,
  apiData: {
    date: string, 
    dayName: string, 
    icon: string, 
    avgtemp_c: number
  },
  children?: React.ReactNode;
};

export const Weekday: React.FC<WeekdayProps> = ({weekday, onClick, apiData, children}) => {
  
  const {date, dayName, icon, avgtemp_c} = apiData;
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(!clicked);
  }
  
  return (
    <Container
      onClick={() => {onClick(); handleClick();}}
      weekday={weekday}
      date={date}
    >
      <div>
        <div>
          
          <div>
            <h4>{dayName}</h4> 
            <img src={icon} alt="weather-icon" />
          </div>
          
          <h4>{`${Math.floor(avgtemp_c)}ºC`}</h4>

          <span>
            <FontAwesomeIcon size={'lg'}  icon={clicked ? faChevronUp : faChevronDown}/>
          </span>

        </div>
      </div>
      
      <MobileWrapper clicked={clicked}>
        {children}
      </MobileWrapper>
    </Container>
  )
}
