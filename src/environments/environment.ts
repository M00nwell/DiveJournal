// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyD-PuduBbzp4MWoOG4cv8NogoWPvpymC3I",
    authDomain: "dive-journal.firebaseapp.com",
    databaseURL: "https://dive-journal.firebaseio.com",
    projectId: "dive-journal",
    storageBucket: "dive-journal.appspot.com",
    messagingSenderId: "610824073674"
  }
};
