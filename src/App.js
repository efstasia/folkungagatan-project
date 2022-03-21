import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyles';
import { lightTheme, darkTheme } from './themes/Themes';
import { useDarkMode } from './components/UseDarkMode';

import { Header } from './components/Header';
import { StartPage } from './pages/StartPage';
import { Projects } from './pages/Projects';
import { Costumers } from './pages/Costumers';
import { Contact } from './pages/Contact';
import { Enviroment } from './pages/Enviroment';
import { About } from './pages/About';
import { SpecificProject } from './pages/SpecificProject';
import { Footer } from './components/Footer';
// import Toggle from './components/Toggler';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <ThemeProvider theme={themeMode} themeToggler={themeToggler}>
        <Header theme={theme} themeToggler={themeToggler} />
        <GlobalStyles />
        {/* <Toggle theme={theme} toggleTheme={themeToggler} /> */}

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/projekt' element={<Projects />} />
            <Route path='/om-oss' element={<About />} />
            <Route path='/kontakt' element={<Contact />} />
            <Route path='/miljö' element={<Enviroment />} />
            <Route path='/kunder' element={<Costumers />} />
            <Route path='/projekt/:id' element={<SpecificProject />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer /> */}
      </ThemeProvider>
    </>
  );
};

export default App;
