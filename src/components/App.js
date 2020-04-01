import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div className="ui buttons">
        <button className="ui button" onClick={() => setResource('posts')}>
          Posts
        </button>
        <button className="ui button" onClick={() => setResource('todos')}>
          Todos
        </button>
        <button className="ui button" onClick={() => setResource('users')}>
          Users
        </button>
      </div>
      <UserList resource={resource} />
      <ResourceList resource={resource} />
    </div>
  );
};

export default App;
