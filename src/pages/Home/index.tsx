import { TodaysWeather, Grid } from "components";
import { Container } from "./styles";

export const Home = () => {
  return (
    <Container>
      <Grid p="20px">
        <TodaysWeather/>
      </Grid>
    </Container>
  )
}
