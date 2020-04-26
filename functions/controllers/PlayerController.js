class PlayerController {
  static getPlayers(data, context, admin){
    let reference = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players')
      .where('teamId', '==', data && data.teamId? data.teamId: '')
    if (data.name)
      reference = reference.where('nameSearch', '==', data.name.toLowerCase())

    return reference.get().then(snapshot=>{
      let list = []
      snapshot.forEach(doc=>{
        list.push(doc.data())
      })
      return list
    })
  }

  static getPlayer(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players').doc(data.id).get().then(snapshot=>{
        return snapshot.data()
      })
  }

  static updatePlayer(data, context, admin){
    data.mail = data.mail.toLowerCase()
    data.nameSearch = data.name.toLowerCase()
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players').doc(data.id).set(data).then(()=>{
        return true
      })
  }

  static addPlayer(data, context, admin){
    let key = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players').doc().id
    data.id = key
    data.mail = data.mail.toLowerCase()
    data.nameSearch = data.name.toLowerCase()
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players').doc(key).set(data).then(()=>{
        return key
      })
  }

  static deletePlayer(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('players').doc(data.id).delete().then(()=>{
        return data.id
      })
  }
}

exports.PlayerController = PlayerController

