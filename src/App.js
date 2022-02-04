import "./styles.css";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./utils/Theme";
import GlobalStyles from "./utils/Global";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Header />
        <Hero />
        <Products />
        <Pricing />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
