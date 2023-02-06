import { useDispatch, useSelector } from 'react-redux';
import Dashboard from './containers/DashBoard';
import { increment, decrement } from './store/slices/counter';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello WAA!</h1>

      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment())} type="button">
        Plus
      </button>
      <button onClick={() => dispatch(decrement())} type="button">
        Minus
      </button>

      <Dashboard />
    </div>
  );
}

export default App;
