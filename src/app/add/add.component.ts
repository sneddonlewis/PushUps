import { Component, OnDestroy } from '@angular/core';
import { WorkoutService } from '../service/workout.service';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Subscription, tap } from 'rxjs';
import { Workout } from '../model/workout';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'pu-add',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    MatButton,
  ],
  templateUrl: './add.component.html',
})
export class AddComponent implements OnDestroy {

  private subs: Subscription[] = []
  addForm = this.freshFormGroup()

  constructor(
      private workoutService: WorkoutService,
  ) {
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe())
  }

  onSubmit() {
    const reps = this.addForm.value.reps! // we know this is validated be the form
    const workout = new Workout(reps, new Date())
    const addSubscription = this.workoutService
        .addWorkout(workout)
        .pipe(
            tap(w => {
              // TODO notify the user that the request was successful/failed
              console.log(`Added ${w.repetitions} reps of ${w.exercise} at ${w.timestamp}`)
              console.log('See it updated in the table on the homepage')
              this.addForm = this.freshFormGroup()
            })
        )
        .subscribe()
    this.subs.push(addSubscription)
  }

  private freshFormGroup() {
    return new FormGroup({
      'reps': new FormControl(0, [Validators.required, Validators.min(1)])
    })
  }
}
