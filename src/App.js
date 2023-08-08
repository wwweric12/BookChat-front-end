import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './assets/component/Header.jsx';
import ChatModal from './assets/component/Modal/ChatModal.jsx';
import Chatting from './assets/pages/Chatting/Chatting.jsx';
import Login from './assets/pages/Login/Login.jsx';
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
          <Route path="/chatting" element={<Chatting />} />
          <Route path="/modal" element={<ChatModal />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
