const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const {TeamController} = require('./controllers/TeamController')

const catchError = (err) =>{
  console.log(err)
  throw new functions.https.HttpsError('failed-precondition', err)
}

exports.getTeam = functions.https.onCall((data, context)=>{
  return TeamController.getTeam(data, context, admin).catch(catchError)
})

exports.getTeams = functions.https.onCall((data, context)=>{
  return TeamController.getTeams(data, context, admin).catch(catchError)
})

exports.postTeam = functions.https.onCall((data, context)=>{
  return TeamController.addTeam(data, context, admin).catch(catchError)
})

exports.putTeam = functions.https.onCall((data, context)=>{
  return TeamController.updateTeam(data, context, admin).catch(catchError)
})

exports.deleteTeam = functions.https.onCall((data, context)=>{
  return TeamController.deleteTeam(data, context, admin).catch(catchError)
})