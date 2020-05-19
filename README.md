# My Solent App
This app is a mockup of what the MySolent app could be should it be redeveloped.

## Rational
The core goal of this redesign is to account for a number of issues found by students who use the current app:
* The app is slow
* The app contains too many features which students do not use
* The app requires users to log in multiple times to get to the features which they do use
* It is difficult to access core features which students do use

Outside of the app, students have to log into multiple different services to access their most used features, this is inconvenient.

The redesign has focused on 3 core features which students use most often: Their calender/timetable, their units page, and their Solent email. By focussing on these core features, and removing distractions, students are able to use the app in short uses throughout the day to stay informed.

## The code
This codebase uses create-react-app as a baseline, on top is React Routing, Material UI, Material UI theme and Material UI Theme.

## Running Instruction

1. Update `src/config/firebase.js` to your own projects config settings
2. Install your the latest project dependencies - `npm install` 
3. Run the project - `npm run start`
4. Build the project - `npm run build`
5. Host the project - `npm run host`

## Setting up authentication 

For this application to work you will need to ensure, one or more, authentication methods are set up. Click authentication from within your firebase application dash.