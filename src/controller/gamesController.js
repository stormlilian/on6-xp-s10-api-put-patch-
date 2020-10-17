const games = require('../models/games.json')

 
const updatePut = (request, response) => {
    const gameUptdated = request.body
    console.log('body',gameUptdated)
    const id = parseInt(request.params.id)
    
    const gamesId = games.map(game => game.id)
    console.log(gamesId)

    const updatedId = gamesId.indexOf(id)

    const gameUpdatedId = {id, ...gameUptdated}
    console.log('game atualizado com Id',gameUpdatedId)
    games.splice(updatedId, 1, gameUpdatedId)
 
    response.status(200).send(games.find(game => game.id === id))
   
}

const updatePatch  = (request, response) => {
    const gameUptdated = request.body
    const id = parseInt(request.params.id)
    const gameToUpdate = games.find(game => game.id == id)
    

    for(key in gameUptdated){
        gameToUpdate[key] = gameUptdated[key]
    }

    response.status(200).send(gameToUpdate)
}

module.exports = {
    updatePut,
    updatePatch 
}