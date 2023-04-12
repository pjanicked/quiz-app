// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// // The list of file replacements can be found in `angular.json`.
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCZAi0P3XQtDWC7wVHFhCPHn0u0g3x6Tfc",
    authDomain: "quiz-app-2305.firebaseapp.com",
    projectId: "quiz-app-2305",
    storageBucket: "quiz-app-2305.appspot.com",
    messagingSenderId: "415428387159",
    appId: "1:415428387159:web:0c022a172bb717071c9e12",
    measurementId: "G-NJGH6Q8C3D"
  }
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
