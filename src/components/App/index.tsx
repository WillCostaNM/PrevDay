import { AppRoutes } from "routes";
import { GlobalStyle } from "styles";
import { ThemeDefault } from "themes";

export const App = () => {
  return(
    <ThemeDefault>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeDefault>
  )
}
