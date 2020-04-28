class FormationController {
  static getFormations(data, context, admin){
    let reference = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations')
      .where('soccerGameId', '==', data && data.soccerGameId? data.soccerGameId: '')

    return reference.get().then(snapshot=>{
      let list = []
      snapshot.forEach(doc=>{
        list.push(doc.data())
      })
      return list
    })
  }

  static getFormation(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations').doc(data.id).get().then(snapshot=>{
        return snapshot.data()
      })
  }

  static updateFormation(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations').doc(data.id).set(data).then(()=>{
        return true
      })
  }

  static addFormation(data, context, admin){
    let key = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations').doc().id
    data.id = key
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations').doc(key).set(data).then(()=>{
        return key
      })
  }

  static deleteFormation(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('formations').doc(data.id).delete().then(()=>{
        return data.id
      })
  }
}

exports.FormationController = FormationController

