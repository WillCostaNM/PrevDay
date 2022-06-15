import { TodaysWeather, Grid, Column, Input } from "components";

export const Home = () => {

  return (
    <Grid>
      <Column border="1px solid">
        <Input mb="20px"/>
        <TodaysWeather/>
      </Column>


    </Grid>
  )
  
}
