import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../counter.reducer';
import { increment, decrement, reset } from '../counter.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
})
export class MyCounterComponent {
  count$: Observable<Person>;

  constructor(private store: Store<{ count: Person }>) {
    this.count$ = store.select('count');
    this.count$.
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
