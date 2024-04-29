import styled from 'styled-components';
import { ScrollRotate } from 'react-scroll-rotate';
import ramen from '/ramen.png';
// Extra Credit Component
function Ramen() {
    return (
        <div>
            <ScrollRotate>
                <img src={ramen} alt="ramen bowl with chop sticks" style={{width: '80px', height: 'auto'}}/>
            </ScrollRotate>
        </div>
    );
}

// Component Contributor: Aditya Chowdhri
// Creating the outer card which matches the styling of all other components
const Card = styled.div`
    background-color: #f8f8f8;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    padding: 20px;
    margin: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h1`
    font-size: 24px;
    color: #2a2a2a;
    text-align: left;
    font-family: 'Open Sans', sans-serif;
`;
const Schedule = styled.div`
    text-align: left;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;

const DayGroup = styled.h2`
    font-size: 20px;
    color: #1a1a1a;
    margin-top: 15px;
    font-family: 'Open Sans', sans-serif;
`;

const TimeSlot = styled.p`
    font-size: 16px;
    color: #4a4a4a;
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
`;
// Named threecard as it serves as one of the three cards on the CRC page
// For ease of generalization many variables are passed through to change info based on the actual dining hall
function Threecard({title,breakfastWkd, lunchWkd, dinnerWkd,breakfastWke, lunchWke, dinnerWke}){
    return(
        <Card>
            {/*Extra credit component is Ramen*/}
            <Ramen />
            <Title>{title}</Title>
            <Schedule>
                <DayGroup>Monday-Friday</DayGroup>
                <TimeSlot>Breakfast: {breakfastWkd}</TimeSlot>
                <TimeSlot>Lunch: {lunchWkd}</TimeSlot>
                <TimeSlot>Dinner: {dinnerWkd}</TimeSlot>
                <DayGroup>Saturday-Sunday</DayGroup>
                <TimeSlot>Breakfast: {breakfastWke}</TimeSlot>
                <TimeSlot>Lunch: {lunchWke}</TimeSlot>
                <TimeSlot>Dinner: {dinnerWke}</TimeSlot>
            </Schedule>
        </Card>
    );
}

    export default Threecard;
