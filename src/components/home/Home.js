import React, {useEffect, useState} from "react";
import {connect, useDispatch} from "react-redux";
import * as actions from "../../store/actions";
import devordleLogo from '../../helper/images/devordle.png';
import {getAllPlayerNames, getAllPlayers, getCorrectPlayer, getGuessedPlayer} from "../../store/actions";
import {compare} from "../../store/actions/playerActions";
import {Autocomplete, Box, createFilterOptions, styled, TextField} from "@mui/material";
import CorrectPlayer from "../player/CorrectPlayer";
import WrongPlayer from "../player/WrongPlayer";
import CardPlayer from "../player/CardPlayer";
import {store} from "../../store/store";

const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'red',
        },
        '&:hover fieldset': {
            borderColor: '#ff5100',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#ff5100',
        },
        fontFamily: 'BwGradualDEMO-Medium'
    },
});

const Home = (props) => {
    const [guessedPlayers, setGuessedPlayers] = useState([]);
    const [answers, setAnswers] = useState([]);
    const dispatch = useDispatch();
    // const [selectedOptions, setSelectedOptions] = useState([]);
    const [counter, setCounter] = useState(0);
    const [correctGuess, setCorrectGuess] = useState(false);
    const [correctPlayer, setCorrectPlayer] = useState();
    const [open, setOpen] = useState(false);
    const [wrongGuess, setWrongGuess] = useState(false);
    const [key, setKey] = useState(false);
    const answer = store.getState().playerReducer.answer;

    const wrong = {
        name: 'RED',
        teamId: 'RED',
        position: 'RED',
        nationality: 'RED',
        height: 'RED',
        jerseyNumber: 'RED',
        age: 'RED'
    };

    const handleLastIncorrect = () => {
        const guessedPlayerTemp = getGuessedPlayer(props.randomNumber);
        setGuessedPlayers(old => [...old, guessedPlayerTemp]);
        answer.push(wrong);
        const answerTemp = wrong;
        setAnswers(old => [...old, answerTemp]);
        setWrongGuess(true);
        setCounter(oldCounter => oldCounter + 1);
        setKey(!key);
    }

    useEffect(() => {
        getAllPlayers();
        getAllPlayerNames();
    });

    const handleClick = (value) => {
        if (!value.value)
            console.log("Nothing");
        else {
                if (counter === 7) {
                    const guessedPlayerTemp = getGuessedPlayer(value.value);
                    setGuessedPlayers(old => [...old, guessedPlayerTemp]);

                    const answerTemp = compare(value.value, props.randomNumber);
                    setAnswers(old => [...old, answerTemp]);

                    if (answerTemp[counter].name === 'CORRECT') {
                        setCorrectGuess(true);
                    } else {
                        handleLastIncorrect();
                    }
                    setCounter(oldCounter => oldCounter + 1);
                    setKey(!key);
                    // setSelectedOptions(null);
                } else {
                    const answerTemp = compare(value.value, props.randomNumber);
                    setAnswers(old => [...old, answerTemp]);
                    if (answerTemp[counter].name === 'CORRECT') {
                        setCorrectGuess(true);
                    }

                    const guessedPlayerTemp = getGuessedPlayer(value.value);

                    setGuessedPlayers(old => [...old, guessedPlayerTemp]);
                    setCounter(oldCounter => oldCounter + 1);
                    setKey(!key);
                }
        }
    };

    useEffect(() => {
        dispatch(getAllPlayerNames());
        setCorrectPlayer(getCorrectPlayer(props.randomNumber));
        console.log(props.randomNumber);
    }, [dispatch, props.randomNumber]);

    const OPTIONS_LIMIT = 3;
    const filterOptions = createFilterOptions({
        limit: OPTIONS_LIMIT
    });

    return (
        <Box>
            <Box sx={{
                paddingTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                bgcolor: 'transparent',
                borderRadius: '5px',
                paddingBottom: 8
            }}>
                <Box component="img" sx={{
                    height: 130,
                    maxHeight: {xs: 80, md: 130},
                }}
                     src={devordleLogo}/>
                <Autocomplete
                    key={key}
                    filterOptions={filterOptions}
                    id="free-solo-demo"
                    freeSolo
                    options={props.allPlayerNames}
                    open={open}
                    getOptionLabel={(option) => option.label}
                    onChange={(event, value) => {
                        handleClick(value);
                    }}
                    onInputChange={(event, value) =>
                        setOpen(true)}
                    onClose={(event, value) =>
                        setOpen(false)}
                    style={{width: 400}}
                    renderInput={(params) => (
                        <CssTextField {...params} placeholder={
                            counter < 8
                                ? correctGuess
                                    ? 'Correct Guess!'
                                    : `Guess ${counter + 1} of 8`
                                : 'Game Over'
                        } variant="outlined"/>
                    )}
                    disabled={counter >= 8 || correctGuess}
                />
                {correctGuess && counter && correctPlayer &&
                    <CorrectPlayer player={correctPlayer} counter={counter} open={correctGuess}/>}
                {wrongGuess && counter && correctPlayer && <WrongPlayer player={correctPlayer} open={wrongGuess}/>}
                <Box sx={{
                    marginTop: 5
                }}>
                    {counter !== 0 && guessedPlayers.length === counter && answers.length === counter &&
                        <CardPlayer player={guessedPlayers} answer={answers}/>}
                </Box>
            </Box>
        </Box>
    )
}

const mapStateToProps = (state) => {
    return {
        allPlayers: state.playerReducer.allPlayers,
        guessedPlayer: state.playerReducer.guessedPlayer,
        allPlayerNames: state.playerReducer.allPlayerNames,
        answer: state.playerReducer.answer,
        randomNumber: state.playerReducer.randomNumber,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAllPlayerNames: () => dispatch(actions.getAllPlayerNames()),
        compare: (playerId) => dispatch(actions.compare(playerId)),
        getGuessedPlayer: (playerId) => dispatch(actions.getGuessedPlayer(playerId)),
        getAllPlayers: () => dispatch(actions.getAllPlayers()),
        getCorrectPlayer: (playerId) => dispatch(actions.getCorrectPlayer(playerId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);