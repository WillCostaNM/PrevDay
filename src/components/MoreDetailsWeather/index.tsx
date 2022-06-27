import { Column, Row } from "components"
import { Container, Temperature, Rain, Wind, AirHumidity, Sun, Mooon } from "./styles";

export const MoreDetailsWeather = () => {
  

  return (
    <Column p={'20px'} color={'text'} borderRadius={'12px'} bg={'secondary'}>
      <h3>Mais detalhes</h3>

      <Container>
        <Temperature>
          <h5>Temperatura</h5>
          <div>
            <span> &lt; </span>
            <span> </span>
          </div>
        </Temperature>

        <Rain>
          <h5>Chuva</h5>
          <div></div>
        </Rain>

        <Wind>
          <h5>Vento</h5>
          <div></div>
        </Wind>

        <AirHumidity>
          <h5>Humidade do ar</h5>
          <div></div>
        </AirHumidity>

        <Sun>
          <h5>Sol</h5>
          <div></div>
        </Sun>

        <Mooon>
          <h5>Lua</h5>
          <div></div>
        </Mooon>
        
        {/* {details.map((detail, index) => <Detail key={`detail-${detail}`}>
          <h5>{detail}</h5>
          <Row p={'8px'}></Row>
        </Detail> )} */}
      </Container>

    </Column>
  )
}