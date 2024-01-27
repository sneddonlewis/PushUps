# PushUp

This app tracks push ups for display on a table on the homepage.  
The home page at route `/` shows the push up data.  
The add page at route `/add` provides a form to add a new workout of some push ups.  
Web API calls would normally happen in `app/service/workout.service.ts` in place of the in memory array.

## Requirements

Node ^18.13.0 || ^20.9.0  
( I used 20.9.0 )

## Development

Make sure you are on an appropriate version of Node then Install dependencies
```
npm i
```
Run start script
```
npm run start
```
Angular SPA will be served on port 4200. If that port isn't available on your machine, you can choose another with the `--port` flag on the Angular CLI ( dev dependency ).
```
ng serve --port 8080
```