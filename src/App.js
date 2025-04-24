import React from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Gallery from './components/Gallery';
import {
  GreetingIf,
  GreetingTernary,
  NotificationAnd
} from './components/Greeting';
import FruitList from './components/FruitList';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Practicals</h1>

      <hr />
      <h2>P31: Hello World</h2>
      <p>Hello World!</p>

      <hr />
      <h2>P32: Greet Component</h2>
      <Greet name="Alice" />
      <Greet name="Bob" />

      <hr />
      <h2>P33: Welcome (Class Component)</h2>
      <Welcome />

      <hr />
      <h2>P34: Props in Functional Component</h2>
      <Greet name="Charlie" />

      <hr />
      <h2>P36: Gallery & Profile</h2>
      <Gallery />

      <hr />
      <h2>P37: Conditional Rendering</h2>
      <GreetingIf isLoggedIn={true} />
      <GreetingIf isLoggedIn={false} />
      <GreetingTernary isLoggedIn={true} />
      <GreetingTernary isLoggedIn={false} />
      <NotificationAnd hasUnreadMessages={true} />
      <NotificationAnd hasUnreadMessages={false} />

      <hr />
      <h2>P38: Loop Execution (Rendering List)</h2>
      <FruitList />
    </div>
  );
}

export default App;
