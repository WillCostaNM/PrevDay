import { TodaysWeather, Grid, Column, Input, WeekWeather } from "components";
import { WeekWrapper, NavWrapper } from "./styles";

export const Home = () => {

  return (
    <Grid>
      <NavWrapper>
        <Input mb="20px"/>
        <TodaysWeather/>
      </NavWrapper>

      <WeekWrapper>
        <WeekWeather/>
      </WeekWrapper>
    </Grid>
  )
}
