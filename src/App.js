import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './themes/GlobalStyles';
import { lightTheme, darkTheme } from './themes/Themes';
import { useDarkMode } from './components/UseDarkMode';

import { Header } from './components/Header';
import { StartPage } from './pages/StartPage';
import { Projects } from './pages/Projects';
import { About } from './pages/About';
import Toggle from './components/Toggler';

const App = () => {
  const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <>
      <Header />
      <ThemeProvider theme={themeMode} themeToggler={themeToggler}>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={themeToggler} />

        <BrowserRouter>
          <Routes>
            <Route path='/' element={<StartPage />} />
            <Route path='/projekt' element={<Projects />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
