import { Container, Day } from "./styles";

export const WeekWeather = () => {

  const week = ['mon', 'tue', 'wed', 'the', 'fri', 'sat', 'sun']; 

  return (
    <Container>

      {week.map((day, index) => <Day key={`week-${index}`}>
        
        <img src={require("../../assets/WeatherIcons/Camada1.png")} alt="weather-icon" />

        <h4>{day}</h4>

        <h4>3ºC</h4>

      </Day>)}
    </Container>
  )
}
