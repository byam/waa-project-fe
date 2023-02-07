import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './containers/DashBoard';
import { increment, decrement } from './store/slices/counter';
import { notifyError, notifySuccess } from './helpers/notification';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAddClick = () => {
    dispatch(increment());
    notifySuccess('Clicked increment');
  };

  const handleDecrementClick = () => {
    dispatch(decrement());
    notifyError('Clicked decrement');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello WAA!</h1>

      <div>Counter: {counter}</div>
      <button onClick={handleAddClick} type="button">
        Plus
      </button>
      <button onClick={handleDecrementClick} type="button">
        Minus
      </button>

      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
}

export default App;
