import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Header from './assets/component/Header.jsx';
import BoardList from './assets/pages/Board/BoardList.jsx';
import Chatting from './assets/pages/Chatting/Chatting.jsx';
import Login from './assets/pages/Login/Login.jsx';
import Main from './assets/pages/Main/Main.jsx';
import CreatePost from './assets/pages/Post/CreatePost.jsx';
import Post from './assets/pages/Post/Post.jsx';
import SearchBook from './assets/pages/SearchBook/SearchBook.jsx';
import Signup from './assets/pages/Signup/Signup.jsx';
import { Theme } from './styles/Theme';

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router>
        <Header />

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chatting />} />
          <Route path="/search" element={<SearchBook />} />
          <Route path="/post" element={<Post />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/boardlist" element={<BoardList />} />
          {/* <Route path="/boardlist/:id" element={<Board />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
