import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../service/workout.service';
import { Observable } from 'rxjs';
import { Workout } from '../model/workout';
import { AsyncPipe, NgIf } from '@angular/common';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from '@angular/material/table';

@Component({
  selector: 'pu-home',
  standalone: true,
  imports: [
    AsyncPipe,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatHeaderRowDef,
    MatRow,
    MatRowDef,
    NgIf
  ],
  templateUrl: './home.component.html',
  styles: ``
})
export class HomeComponent implements OnInit {

  workouts$!: Observable<Workout[]>
  displayedColumns = [ 'time', 'exercise', 'reps' ]

  constructor(
      private workoutService: WorkoutService,
  ) {
  }

  ngOnInit(): void {
    this.workouts$ = this.workoutService.workouts$
  }
}
