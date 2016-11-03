'use strict';

const app = require('../app');
const createGame = function(){
  return $.ajax({
    url: app.host + '/games',
    method: "POST",
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }

  }).then(data=>app.game = data.game);
  };
const getGame = (id,value) => {
return $.ajax({
  url: app.host + '/games/'+app.game.id,
  method: "GET",
  headers: {
    Authorization: 'Token token=' + app.user.token,
  }

});
};

const updateGame = (index,value,trueOrFalse) => {
    // console.log('arguments are', id, value, TorF);
    // console.log('app.game is', app.game);
    return $.ajax({
      url: app.host + '/games/'+ app.game.id,
      method: "PATCH",
      headers: {
        Authorization: 'Token token=' + app.user.token,
      },
      data: {
        "game": {
          "cell": {
            "index": index,
            "value": value
          },
          "over": trueOrFalse
        }
      }
    }).then(data=>app.game = data.game)
  };

module.exports = {
  getGame,
  updateGame,
  createGame
};
