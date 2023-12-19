import React, {useEffect, useRef} from "react";
import {BrowserRouter} from "react-router-dom";
import Layout from "../components/layout/Layout";
import background from '../helper/images/background-image.png';
import {randomNumber} from "../store/actions";
import {useDispatch} from "react-redux";
import icon from '../helper/images/devordle-icon.png';

function App() {
    const dispatch = useDispatch();
    const faviconRef = useRef(null);

    useEffect(() => {
        dispatch(randomNumber());
        document.title = 'Devordle';
        // Create a reference to the link element for the favicon
        faviconRef.current = document.querySelector("link[rel*='icon']") || document.createElement('link');

        // Set the favicon href to the new favicon path
        faviconRef.current.href = icon;

        // Append the link element to the head if it doesn't exist
        if (!document.querySelector("link[rel*='icon']")) {
            faviconRef.current.rel = 'icon';
            document.head.appendChild(faviconRef.current);
        }
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
