import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from 'react-router-dom'
import Header from './containers/Header'
import Post from './containers/Post'
import PostDetail from './containers/PostDetail'

function App() {

  return (
    <div className="App container">
      <Header></Header>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/posts/:id">Detail</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/"><h1>Welcome to My App</h1></Route>
            <Route exact path="/posts"><Post></Post></Route>
            <Route path="/posts/:id" children={<PostDetail />} />
          </Switch>
        </div>
      </Router>


    </div>
  );
}

export default App;
