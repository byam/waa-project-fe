import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './store/slices/counter';

function App() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Counter: {counter}</div>
      <button onClick={() => dispatch(increment())} type="button">
        Plus
      </button>
      <button onClick={() => dispatch(decrement())} type="button">
        Minus
      </button>
    </div>
  );
}

export default App;
