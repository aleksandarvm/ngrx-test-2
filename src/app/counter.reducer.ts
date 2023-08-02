import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from './counter.actions';

export interface Person {
  age: number;
  name: string;
}

export const initialState: Person = {
  age: 30,
  name: 'Jingibi',
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (state) => ({ ...state, age: state.age + 5 })),
  on(decrement, (state) => ({ ...state, age: state.age - 5 })),
  on(reset, (state) => state)
);
