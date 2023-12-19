import * as actionTypes from "../actionTypes";
import jsonPlayers from '../../helper/players/players.json';
import jsonPlayerNames from '../../helper/players/playerNames.json';
import {store} from "../store";
import correct from "./helper";

export const getAllPlayers = () => {
    return dispatch => {
                dispatch({
                    type: actionTypes.GET_ALL_PLAYERS,
                    allPlayers: JSON.parse(jsonPlayers)
                })
    }
}

export const getAllPlayerNames = () => {
    return dispatch => {
        dispatch({
            type: actionTypes.GET_ALL_PLAYER_NAMES,
            allPlayerNames: jsonPlayerNames
        })
    }
}

export const getGuessedPlayer = (playerId) => {
    const guessedPlayer = store.getState().playerReducer.guessedPlayer;
    guessedPlayer.push(jsonPlayers.find(obj => obj.id === playerId));
    return guessedPlayer;
}

export const getCorrectPlayer = (playerId) => {
    return jsonPlayers.find(obj => obj.id === playerId);
}

export const compare = (playerId, correctPlayerId) => {
    let tempAnswer = {
        name: '',
        teamId: '',
        position: '',
        nationality: '',
        height: '',
        jerseyNumber: '',
        age: ''
    };

    const answer = store.getState().playerReducer.answer;
    const correctPlayer = jsonPlayers.find(obj => obj.id === correctPlayerId);
    const guessedPlayer = jsonPlayers.find(obj => obj.id === playerId);

    if (guessedPlayer.id === correctPlayer.id) {
        answer.push(correct);
    } else {
        if (guessedPlayer.name === correctPlayer.name) {
            tempAnswer.name = 'CORRECT';
        }
        if (guessedPlayer.teamId === correctPlayer.teamId) {
            tempAnswer.teamId = 'CORRECT';
        }
        if (guessedPlayer.position === correctPlayer.position) {
            tempAnswer.position = 'CORRECT';
        }
        if (guessedPlayer.nationality === correctPlayer.nationality) {
            tempAnswer.nationality = 'CORRECT';
        }

        if (guessedPlayer.height === correctPlayer.height) {
            tempAnswer.height = 'CORRECT';
        } else if (guessedPlayer.height > correctPlayer.height && guessedPlayer.height - correctPlayer.height <= 3) {
            tempAnswer.height = 'DOWN';
        } else if (guessedPlayer.height < correctPlayer.height && correctPlayer.height - guessedPlayer.height <=3) {
            tempAnswer.height = 'UP';
        } else if (guessedPlayer.height > correctPlayer.height && guessedPlayer.height - correctPlayer.height >= 3) {
            tempAnswer.height = 'WRONGDOWN';
        } else {
            tempAnswer.height = 'WRONGUP';
        }

        if (guessedPlayer.jerseyNumber === correctPlayer.jerseyNumber) {
            tempAnswer.jerseyNumber = 'CORRECT';
        } else if (guessedPlayer.jerseyNumber > correctPlayer.jerseyNumber && guessedPlayer.jerseyNumber - correctPlayer.jerseyNumber <= 3) {
            tempAnswer.jerseyNumber = 'DOWN';
        } else if (guessedPlayer.jerseyNumber < correctPlayer.jerseyNumber && correctPlayer.jerseyNumber - guessedPlayer.jerseyNumber <= 3) {
            tempAnswer.jerseyNumber = 'UP';
        } else if (guessedPlayer.jerseyNumber > correctPlayer.jerseyNumber && guessedPlayer.jerseyNumber - correctPlayer.jerseyNumber >= 3) {
            tempAnswer.jerseyNumber = 'WRONGDOWN';
        } else {
            tempAnswer.jerseyNumber = 'WRONGUP';
        }

        if (guessedPlayer.age === correctPlayer.age) {
            tempAnswer.age = 'CORRECT';
        } else if (guessedPlayer.age > correctPlayer.age && guessedPlayer.age - correctPlayer.age <= 3) {
            tempAnswer.age = 'DOWN';
        } else if (guessedPlayer.age < correctPlayer.age && correctPlayer.age - guessedPlayer.age <= 3) {
            tempAnswer.age = 'UP';
        } else if (guessedPlayer.age > correctPlayer.age && guessedPlayer.age - correctPlayer.age >= 3) {
            tempAnswer.age = 'WRONGDOWN';
        } else {
            tempAnswer.age = 'WRONGUP';
        }

        answer.push(tempAnswer);
    }

    return answer;
}

export const randomNumber = () => {
    return dispatch => {
        fetch('http://localhost:3001/api/randomNumber')
            .then(response => response.json())
            .then(data => {
                dispatch({
                    type: actionTypes.SELECT_RANDOM_NUMBER,
                    randomNumber: data.randomNumber
                })
            })
            .catch(error => console.error('Error fetching data:', error));
    }
}