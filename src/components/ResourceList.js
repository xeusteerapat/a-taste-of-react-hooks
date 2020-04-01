import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

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
