const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();
const {TeamController} = require('./controllers/TeamController')
const {PlayerController} = require('./controllers/PlayerController')
const {SoccerGameController} = require('./controllers/SoccerGameController')
const {FormationController} = require('./controllers/FormationController')

const catchError = (err) =>{
  console.log(err)
  throw new functions.https.HttpsError('failed-precondition', err)
}

/***********************TEAM***********************/

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

/************************PLAYER**************************/

exports.getPlayer = functions.https.onCall((data, context)=>{
  return PlayerController.getPlayer(data, context, admin).catch(catchError)
})

exports.getPlayers = functions.https.onCall((data, context)=>{
  return PlayerController.getPlayers(data, context, admin).catch(catchError)
})

exports.postPlayer = functions.https.onCall((data, context)=>{
  return PlayerController.addPlayer(data, context, admin).catch(catchError)
})

exports.putPlayer = functions.https.onCall((data, context)=>{
  return PlayerController.updatePlayer(data, context, admin).catch(catchError)
})

exports.deletePlayer = functions.https.onCall((data, context)=>{
  return PlayerController.deletePlayer(data, context, admin).catch(catchError)
})

/***********************SOCCER GAMES ****************************/

exports.getSoccerGame = functions.https.onCall((data, context)=>{
  return SoccerGameController.getSoccerGame(data, context, admin).catch(catchError)
})

exports.getSoccerGames = functions.https.onCall((data, context)=>{
  return SoccerGameController.getSoccerGames(data, context, admin).catch(catchError)
})

exports.postSoccerGame = functions.https.onCall((data, context)=>{
  return SoccerGameController.addSoccerGame(data, context, admin).catch(catchError)
})

exports.putSoccerGame = functions.https.onCall((data, context)=>{
  return SoccerGameController.updateSoccerGame(data, context, admin).catch(catchError)
})

exports.deleteSoccerGame = functions.https.onCall((data, context)=>{
  return SoccerGameController.deleteSoccerGame(data, context, admin).catch(catchError)
})

/********************* FORMATIONS ***********************/

exports.getFormation = functions.https.onCall((data, context)=>{
  return FormationController.getFormation(data, context, admin).catch(catchError)
})

exports.listFormations = functions.https.onCall((data, context)=>{
  return FormationController.getFormations(data, context, admin).catch(catchError)
})

exports.postFormation = functions.https.onCall((data, context)=>{
  return FormationController.addFormation(data, context, admin).catch(catchError)
})

exports.updateFormation = functions.https.onCall((data, context)=>{
  return FormationController.updateFormation(data, context, admin).catch(catchError)
})

exports.deleteFormation = functions.https.onCall((data, context)=>{
  return FormationController.deleteFormation(data, context, admin).catch(catchError)
})