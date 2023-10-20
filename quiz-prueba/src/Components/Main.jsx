import React, { useEffect, useState } from 'react';
import './Main.css';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const Palabra = ({ userId, id, title, body }) => {
  return (
    <div className='info-json'>
      <h2 className='userId'>UserId: {userId}</h2>
      <h2 className='id'>Id:{id}</h2>
      <h2 className='title'>Title: {title}</h2>
      <h2 className='body'>Body: {body}</h2>
    </div>
  );
};

const Main = () => {
  const [main, setMain] = useState([]);

  useEffect(() => {
    fetchMain();
  }, []);

  const fetchMain = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setMain(data))
      .catch((err) => console.error(err));
  };

  console.log(main);

  return (
    <div>
      {main.map((post)=> (
        <Palabra key = {post} {...post} />
      ))}
    </div>
  );
};

export default Main;