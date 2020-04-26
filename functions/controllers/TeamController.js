class TeamController {
  static getTeams(data, context, admin){
    let reference = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams')

    if (data && data.name)
      reference = reference.where('nameSearch', '==', data.name.toLowerCase())
    return reference.get().then(snapshot=>{
        let list = []
        snapshot.forEach(doc=>{
          list.push(doc.data())
        })
        return list
      })
  }

  static getTeam(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').doc(data.id).get().then(snapshot=>{
        console.log(snapshot.data())
        return snapshot.data()
      })
  }

  static updateTeam(data, context, admin){
    data.nameSearch = data.name.toLowerCase()
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').doc(data.id).set(data).then(()=>{
        return true
      })
  }

  static addTeam(data, context, admin){
    let key = admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').doc().id
    data.id = key
    data.nameSearch = data.name.toLowerCase()
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').doc(key).set(data).then(()=>{
        return key
      })
  }

  static deleteTeam(data, context, admin){
    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').doc(data.id).delete().then(()=>{
        return data.id
      })
  }
}

exports.TeamController = TeamController

