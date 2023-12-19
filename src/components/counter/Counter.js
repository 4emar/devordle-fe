import Countdown from "react-countdown";
import * as React from 'react';
import {useEffect, useState} from "react";
import '../../helper/fonts/BwGradualDEMO-Black.otf';
import '../../helper/fonts/BwGradualDEMO-Medium.otf';
import styled from 'styled-components';

const PurpleCount = styled.div`
  span {
    color: #8e74f4;
    font-family: 'BwGradualDEMO-Black';
  }
`;

const renderer = ({ total, hours, minutes, seconds }) => {
    if (total) {
        // Render a countdown
        return (
            <span style={{ color: 'red' }}>
        {hours}:{minutes}:{seconds}
      </span>
        );
    }
};

const Counter = () => {
    const [date, setDate] = useState(new Date(new Date().setHours(24, 0, 0, 0)));

    return (
        <>
            <PurpleCount>
                <Countdown date={date} daysInHours={true}/>
            </PurpleCount>
        </>
    );
}

export default Counter;