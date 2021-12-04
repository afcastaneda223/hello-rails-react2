import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from './redux/app/app';
import Greetings from './Greetings';

const App = () => {
  const state = useSelector((state) => state.messagesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <h1>Hello React Rails</h1>
      <Greetings greeting={state.greeting} />
    </div>
  );
};

export default App;
