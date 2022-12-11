import { ThemeProvider } from "styled-components";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      {/* <Home /> */}
      <Dashboard />
      <GlobalStyle />
    </ThemeProvider>
  )
}

