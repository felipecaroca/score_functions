class SoccerGameController {
  static getSoccerGames(data, context, admin){
    let reference = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('soccer_games')
      .orderBy('gameDate', 'desc')

    if (data.gameDate)
      reference = reference.where('gameDate', '==', data.gameDate)
    if (data.gameFinished)
      reference = reference.where('gameFinished', '==', data.gameFinished)
    if(data.limit)
      reference = reference.limit(data.limit)

    return reference.get().then(snapshot=>{
      let list = []
      snapshot.forEach(doc=>{
        list.push(doc.data())
      })
      return list
    })
  }

  static getSoccerGame(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid).collection('soccer_games')
      .doc(data.id).get().then(snapshot=>{
      return snapshot.data()
    })
  }

  static updateSoccerGame(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid).collection('soccer_games')
      .doc(data.id).set(data).then(()=>{
      return true
    })
  }

  static addSoccerGame(data, context, admin){
    let key = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('soccer_games').doc().id
    data.id = key
    return admin.firestore().collection('users').doc(context.auth.uid).collection('soccer_games')
      .doc(key).set(data).then(()=>{
      return key
    })
  }

  static deleteSoccerGame(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid).collection('soccer_games')
      .doc(data.id).delete().then(()=>{
      return data.id
    })
  }
}

exports.SoccerGameController = SoccerGameController