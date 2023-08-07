import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './assets/component/Header.jsx';
import Login from './assets/pages/Login/Login.jsx';
import Main from './assets/pages/Main/Main.jsx';
import Signup from './assets/pages/Signup/Signup.jsx';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
