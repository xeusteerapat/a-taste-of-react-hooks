import React from 'react';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <div>
      <h1>{resources.length}</h1>
      <div className="ui inverted relaxed divided list">
        {resources.map(record => (
          <div key={record.id} className="item">
            <i className="map marker icon"></i>
            <div className="content">{record.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
