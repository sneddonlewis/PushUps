export class Workout {
    exercise: string;
    constructor(
        public repetitions: number,
        public timestamp: Date,
    ) {
        // This would be a separate service to choose the available workouts/register a custom one etc.
        // for demo purposes, assume workouts can only be push ups.
        this.exercise = 'Push Ups'
    }
}