import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../features/counter/counterSlice';

function Counter() {
  const [amount, setAmount] = useState(10);
  const dispatch = useDispatch();
  const counterState = useSelector((state) => state.counter);

  const handleAmountInput = function(evt) {
    setAmount(Number.parseInt(evt.target.value));
  };
  const handleIncrement = function() {
    dispatch(increment());
  };
  const handleDecrement = function() {
    dispatch(decrement());
  };
  const handleAdd = function() {
    dispatch(incrementByAmount(amount));
  };
  return (<div>
    <div>
      <p>count: {counterState.value}</p>
    </div>
    <div>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
    <div>
      <input onInput={handleAmountInput} type="number" value={amount}/>
      <button onClick={handleAdd}>add</button>
    </div>
  </div>)
}

export default Counter;
