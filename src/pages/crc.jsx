import React from "react";
import styled from "styled-components";
import Threecard from "../components/threecard.jsx";


const Container = styled.div`
  display: flex;
  flex-direction: row;
`;
function Crc(){
    return(
        <>
            <Container>
                <Threecard
                    title="Marciano Commons"
                    breakfastWkd="7:00 AM - 11:30 AM"
                    lunchWkd="11:30 AM - 5:00 PM"
                    dinnerWkd="5:00 PM - 9:00 PM"
                    breakfastWke="9:00 AM - 11:30 AM"
                    lunchWke="11:30 AM - 5:00 PM"
                    dinnerWke="5:00 PM - 9:00 PM"
                />
                <Threecard
                    title="Warren Towers"
                    breakfastWkd="7:00 AM - 11:00 AM"
                    lunchWkd="11:00 AM - 5:00 PM"
                    dinnerWkd="5:00 PM - 10:00 PM"
                    breakfastWke="9:00 AM - 11:00 AM"
                    lunchWke="11:00 AM - 5:00 PM"
                    dinnerWke="5:00 PM - 9:00 PM"
                />
                <Threecard
                    title="West Campus"
                    breakfastWkd="7:00 AM - 11:00 AM"
                    lunchWkd="11:00 AM - 5:00 PM"
                    dinnerWkd="5:00 PM - 10:00 PM"
                    breakfastWke="9:00 AM - 11:00 AM"
                    lunchWke="11:00 AM - 5:00 PM"
                    dinnerWke="5:00 PM - 9:00 PM"
                />
            </Container>
        </>
    )
}
export default Crc;