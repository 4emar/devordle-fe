import React, {useEffect} from "react";
import {BrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout";
import background from '../helper/images/background-image.png';
import {randomNumber} from "../store/actions";
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(randomNumber());
    }, [dispatch]);

    return (
        <div style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover', minHeight: '100vh'
        }}>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </div>
    );
}

export default App;
