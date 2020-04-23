const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const {TeamController} = require('./controllers/TeamController')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.getTeams = functions.https.onCall((data, context)=>{
  return TeamController.getTeams(data, context, admin).catch(err=>{
    console.log(err)
    throw new functions.https.HttpsError('failed-precondition', err)
  })
})
