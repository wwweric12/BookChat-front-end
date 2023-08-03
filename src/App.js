import { ThemeProvider } from 'styled-components';

import { Theme } from './styles/Theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={Theme}></ThemeProvider>
    </>
  );
};

export default App;
