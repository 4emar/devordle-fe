import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import * as React from 'react';
import Box from "@mui/material/Box";
import '../../helper/fonts/BwGradualDEMO-Black.otf';
import '../../helper/fonts/BwGradualDEMO-Medium.otf';
import '../../index.css';
import {useEffect} from "react";

const CardPlayer = (props) => {

    return (
        <>
            <div className="App">
                <Box sx={{overflow: "auto"}}>
                    <Box sx={{width: "100%", display: "table", tableLayout: "fixed", maxWidth: "750px" }}>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 750, fontWeight: 'bold'}} aria-label="simple table">
                                {/*<Table sx={{ minWidth: 750, fontWeight: 'bold'}} aria-label="simple table">*/}
                                <TableHead>
                                    <TableRow>
                                        <TableCell ></TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Team</TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Position</TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Nationality</TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Height</TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontWeight: 'bold', color: '#8e74f4'}} align="center">#</TableCell>
                                        <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', color: '#8e74f4'}} align="center">Age</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody sx={{ fontWeight: 'bold' }}>
                                    {props.player.map((p, idx) => (
                                        <TableRow
                                            key={idx}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 }, }}
                                        >

                                            {props.answer[0][idx].name === "CORRECT" ?
                                                <TableCell sx={{
                                                    backgroundColor: '#37be75'
                                                    , color: '#FFFFFF',
                                                    textTransform: 'uppercase',
                                                    fontFamily: 'BwGradualDEMO-Black'
                                                    , fontSize: '13pt'
                                                }} component="th" scope="row">
                                                    {p[idx].name}
                                                </TableCell>
                                                :

                                                props.answer[0][idx].name === "RED" ?
                                                    <TableCell sx={{
                                                        backgroundColor: '#920000'
                                                        , color: '#FFFFFF' , textTransform: 'uppercase',
                                                        fontFamily: 'BwGradualDEMO-Black'
                                                        , fontSize: '13pt'
                                                    }} component="th" scope="row">
                                                        {p[idx].name}
                                                    </TableCell>
                                                    :
                                                    <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black', fontSize: '13pt'}} component="th" scope="row">
                                                        {p[idx].name}
                                                    </TableCell>
                                            }


                                            {props.answer[0][idx].teamId === 'CORRECT' ?
                                                <TableCell align="center" sx={{
                                                    backgroundColor: '#37be75'
                                                    , color: '#FFFFFF'
                                                }}><Box component="img" sx={{
                                                    height: 50,
                                                    // width: 60,
                                                    maxHeight: {xs: 50, md: 50},
                                                    // maxWidth: {xs: 60, md: 60},
                                                }}
                                                        src={p[idx].teamImage}/></TableCell>
                                                :

                                                props.answer[0][idx].teamId === 'RED' ? <TableCell align="center" sx={{
                                                        backgroundColor: '#920000'
                                                        , color: '#FFFFFF'
                                                    }}><Box component="img" sx={{
                                                        height: 50,
                                                        // width: 60,
                                                        maxHeight: {xs: 50, md: 50},
                                                        // maxWidth: {xs: 60, md: 60},
                                                    }}
                                                            src={p[idx].teamImage}/></TableCell> :

                                                    <TableCell align="center" sx={{

                                                    }}><Box component="img" sx={{
                                                        height: 50,
                                                        // width: 60,
                                                        maxHeight: {xs: 50, md: 50},
                                                        // maxWidth: {xs: 60, md: 60},
                                                    }}
                                                            src={p[idx].teamImage}/></TableCell>
                                            }

                                            {props.answer[0][idx].position === "CORRECT" ?
                                                <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].position}
                                                </TableCell>
                                                :
                                                props.answer[idx].position === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].position}
                                                    </TableCell> :
                                                    <TableCell sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium', fontWeight: 'bold'}} align="center">{p[0].position}</TableCell>
                                            }

                                            {props.answer[0][idx].nationality === "CORRECT" ?
                                                <TableCell sx={{backgroundColor: '#37be75', fontFamily: 'BwGradualDEMO-Medium', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase'}} align="center">{p[idx].nationality}</TableCell>
                                                :
                                                props.answer[idx].nationality === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].nationality}</TableCell> :
                                                    <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].nationality}</TableCell>
                                            }

                                            {props.answer[0][idx].height === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].height}</TableCell> : null}
                                            {props.answer[0][idx].height === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].height} ↑</TableCell> : null}
                                            {props.answer[0][idx].height === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].height} ↓</TableCell> : null}
                                            {props.answer[0][idx].height === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].height} ↓</TableCell> : null}
                                            {props.answer[0][idx].height === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium' }} align="center">{p[idx].height} ↑</TableCell> : null}
                                            {props.answer[0][idx].height === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].height}</TableCell> : null}

                                            {props.answer[0][idx].jerseyNumber === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber}</TableCell> : null}
                                            {props.answer[0][idx].jerseyNumber === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber} ↑</TableCell> : null}
                                            {props.answer[0][idx].jerseyNumber === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber} ↓</TableCell> : null}
                                            {props.answer[0][idx].jerseyNumber === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber} ↓</TableCell> : null}
                                            {props.answer[0][idx].jerseyNumber === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber} ↑</TableCell> : null}
                                            {props.answer[0][idx].jerseyNumber === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].jerseyNumber}</TableCell> : null}

                                            {props.answer[0][idx].age === "CORRECT" ? <TableCell sx={{backgroundColor: '#37be75', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age}</TableCell> : null}
                                            {props.answer[0][idx].age === "UP" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age} ↑</TableCell> : null}
                                            {props.answer[0][idx].age === "DOWN" ? <TableCell sx={{backgroundColor: '#e5d661', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age} ↓</TableCell> : null}
                                            {props.answer[0][idx].age === "WRONGDOWN" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age} ↓</TableCell> : null}
                                            {props.answer[0][idx].age === "WRONGUP" ? <TableCell sx={{fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age} ↑</TableCell> : null}
                                            {props.answer[0][idx].age === "RED" ? <TableCell sx={{backgroundColor: '#920000', color: '#FFFFFF', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}} align="center">{p[idx].age === 100 ? "00" : p[idx].age}</TableCell> : null}
                                        </TableRow>
                                    ))}

                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </div>
        </>
    )
}

export default CardPlayer;