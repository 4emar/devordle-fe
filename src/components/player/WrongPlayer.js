import * as React from 'react';
import Box from "@mui/material/Box";
import {
    Dialog,
    DialogContent,
    Divider, Slide,
    Typography
} from "@mui/material";
import {TransitionProps} from "@mui/material/transitions";
import Counter from "../counter/Counter";
import {useEffect} from "react";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const WrongPlayer = (props) => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        console.log(props);
    }, [props])

    return (
        <Dialog
            open={props.open && open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            fullWidth
        >
            {/*<DialogTitle>{"Use Google's location service?"}</DialogTitle>*/}
            <DialogContent>
                <Box textAlign="center" sx={{
                    minWidth: "100%"
                }}>
                    <Box component="img"
                         sx={{
                             maxHeight: 420,
                             maxWidth: 370,
                             alignItems: 'center',

                         }}
                         src={props.player.image}
                    />
                    <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
                    <Box sx={{
                        pt: '15px',
                        pb: '-10px'
                    }}>
                        <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                            Congrats!
                        </Typography>
                        <Typography variant="h5" sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Black'}}>
                            {props.player.name}
                        </Typography>
                        {props.counter === 1 ?
                            <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                                You solved it in {props.counter} guess!
                            </Typography>
                            :
                            <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                                You solved it in {props.counter} guesses!
                            </Typography>
                        }

                    </Box>
                    <Divider variant="middle" color='#ff5100' sx={{marginLeft: '5%', marginRight: '5%', marginTop: '5%', borderBottomWidth: 5}}/>
                    <Box sx={{marginTop: '2%'}}>
                        <Typography variant='h7' sx={{textTransform: 'uppercase', fontFamily: 'BwGradualDEMO-Medium'}}>
                            New player in
                        </Typography>
                        <Counter/>
                    </Box>
                </Box>
            </DialogContent>
        </Dialog>

    )
}

export default WrongPlayer;