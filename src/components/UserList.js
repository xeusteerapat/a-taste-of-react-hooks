import React from 'react';
import useResources from './useResources';

const UserList = () => {
  const users = useResources('users');

  return (
    <div>
      <h1>{users.length}</h1>
      <div className="ui inverted relaxed divided list">
        {users.map(user => (
          <div key={user.id} className="item">
            <i className="map marker icon"></i>
            <div className="content">{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
