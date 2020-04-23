class TeamController {
  static getTeams(data, context, admin){

    return admin.firestore().collection('users').doc(context.auth.uid)
      .collection('teams').get().then(snapshot=>{
        let list = []
        snapshot.forEach(doc=>{
          list.push({
            id: doc.id,
            data: doc.data().name,
          })
        })
        return list
      })
  }
}

exports.TeamController = TeamController

