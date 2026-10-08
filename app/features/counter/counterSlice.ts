import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { TIPO_INCREMENTAR, TIPO_DECREMENTAR } from "../../constante";

export interface CounterState {
  tipo:number;
  value: number;  
}

const initialState: CounterState = {
  tipo:0,
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    functionejemplo:(state) => {
      switch (state.tipo) {
        case TIPO_INCREMENTAR:
          state.value +=1;
          break;
        case TIPO_DECREMENTAR:
          state.value -=1;
          break;
        default:
          console.log(state.value);
          break;
      }
      
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, functionejemplo } = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
