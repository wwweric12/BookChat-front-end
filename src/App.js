import { useEffect, useState } from 'react';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './assets/component/Header.jsx';
import BoardList from './assets/pages/Board/BoardList.jsx';
import Chatting from './assets/pages/Chatting/Chatting.jsx';
import Login from './assets/pages/Login/Login.jsx';
import Main from './assets/pages/Main/Main.jsx';
import CreatePost from './assets/pages/Post/CreatePost.jsx';
import EditPost from './assets/pages/Post/EditPost.jsx';
import Post from './assets/pages/Post/Post.jsx';
import SearchBook from './assets/pages/SearchBook/SearchBook.jsx';
import Signup from './assets/pages/Signup/Signup.jsx';
import { Theme } from './styles/Theme';

const App = () => {
  const [isLoggined, setIsLoggined] = useState(false);
  const accessKey = localStorage.getItem('accessToken');
  useEffect(() => {
    if (accessKey) {
      setIsLoggined(true);
    }
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header isLoggined={isLoggined} setIsLoggined={setIsLoggined} accessKey={accessKey} />
        <Routes>
          <Route path="/login" element={<Login setIsLoggined={setIsLoggined} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Main />} />
          <Route path="/chat/:id" element={<Chatting />} />
          <Route path="/post" element={<Post />} />
          <Route path="/books" element={<SearchBook />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/editpost" element={<EditPost />} />
          <Route path="/boardlist/:id" element={<BoardList />} />
          <Route path="/board/:id" element={<Post />} />
          {/* <Route path="/boardlist/:id" element={<Board />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
