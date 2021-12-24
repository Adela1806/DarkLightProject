import React, { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import ThemeContext from './contexts/ThemeContext';

import LandingPage from './pages/LandingPage';

import GlobalStyles from './styles/GlobalStyles';

function App() {
  const a = useContext(ThemeContext);

  console.log(a);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      <ThemeProvider theme={{ theme }}>
        <LandingPage />

        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}
export default App;
