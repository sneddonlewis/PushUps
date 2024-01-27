import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Workout } from '../model/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {

  // represents data on server, use a BehaviourSubject to notify subscribers of the change
  private workouts = new BehaviorSubject([
    new Workout(5, new Date()),
    new Workout(10, new Date()),
  ])

  // Observable of the 'GET workout' resource
  readonly workouts$ = this.workouts.asObservable()

  // Inject http service
  constructor() { }

  // Call 'POST workout'. Here assume endpoint returns
  // provided workout, likely of type Workout & { id: string }
  // or return type could be Observable<never> for a 204 response
  addWorkout(workout: Workout): Observable<Workout> {
    this.simulateUpdatingApi(workout)
    return of(workout)
  }

  simulateUpdatingApi(workout: Workout) {
    const workouts = this.workouts.value
    // what a new api 'GET' call would result in after this 'POST'
    this.workouts.next([workout, ...workouts])
  }
}
