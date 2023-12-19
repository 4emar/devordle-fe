import {playerInitialState, playerNamesInitialState} from "./helper";
import {updateObject} from "../../shared/utility";
import * as actionTypes from "../actionTypes";

const initialState = {
    allPlayers: playerInitialState,
    guessedPlayer: [],
    correctPlayer: [],
    allPlayerNames: playerNamesInitialState,
    answer: [],
    randomNumber: 1
}

const getAllPlayers = (state, action) => {
    return updateObject(state, {allPlayers: action.allPlayers});
}

const getAllPlayerNames = (state, action) => {
    return updateObject(state, {allPlayerNames: action.allPlayerNames});
}

const getGuessedPlayer = (state, action) => {
    return updateObject(state, {guessedPlayer: action.guessedPlayer});
}

const selectRandomNumber = (state, action) => {
    return updateObject(state, {randomNumber: action.randomNumber});
}


const playerReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_ALL_PLAYERS:
            return getAllPlayers(state, action);
        case actionTypes.GET_ALL_PLAYER_NAMES:
            return getAllPlayerNames(state, action);
        case actionTypes.SELECT_RANDOM_NUMBER:
            return selectRandomNumber(state, action);
        case actionTypes.GET_GUESSED_PLAYER:
            return getGuessedPlayer(state, action);
        default:
            return state;
    }
}

export default playerReducer;