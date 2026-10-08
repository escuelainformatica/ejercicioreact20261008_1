import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../features/counter/counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(2);

  return (
    <section className="w-full max-w-[300px] space-y-6 px-4">
      <div className="rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4">
        <p className="leading-6 text-gray-700 dark:text-gray-200 text-center">
          Redux Toolkit
        </p>
        <p className="text-center text-4xl font-bold tabular-nums">{count}</p>
        <div className="flex items-center justify-center gap-3">
          <button
            className="h-10 w-10 rounded-xl border border-gray-200 text-xl font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            onClick={() => dispatch(decrement())}
            aria-label="Decrementar"
          >
            −
          </button>
          <button
            className="h-10 w-10 rounded-xl border border-gray-200 text-xl font-semibold hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
            onClick={() => dispatch(increment())}
            aria-label="Incrementar"
          >
            +
          </button>
        </div>
        <div className="flex items-center justify-center gap-2">
          <input
            className="w-20 rounded-xl border border-gray-200 px-3 py-2 text-center tabular-nums dark:border-gray-700 dark:bg-gray-900"
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
          <button
            className="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
            onClick={() => dispatch(incrementByAmount(amount))}
          >
            Agregar
          </button>
        </div>
      </div>
    </section>
  );
}
