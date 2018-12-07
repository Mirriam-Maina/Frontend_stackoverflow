import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to Stackoverflow lite</h1>
        <p>
          Click here to view
          <Link to="post"> Posts</Link>
        </p>
      </div>
    );
  }
}

export default App;
