import React from 'react';
import styled from 'styled-components';

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
`;

const Title = styled.h1`
  font-size: 24px;
  color: #2a2a2a;
`;
const Schedule = styled.div`
    text-align: left;
    width: 100%;
`;

const DayGroup = styled.h2`
  font-size: 20px;
  color: #1a1a1a;
  margin-top: 15px;
`;

const TimeSlot = styled.p`
  font-size: 16px;
  color: #4a4a4a;
  margin-left: 20px;
`;

const FenwayDiningHallCard = () => (
    <Card>
        <Title>Campus Dining Hall Hours</Title>
        <Schedule>
            <DayGroup>Monday-Friday</DayGroup>
            <TimeSlot>Breakfast: 7:00 AM - 10:00 AM</TimeSlot>
            <TimeSlot>Continental Breakfast: 10:00 AM - 11:00 AM</TimeSlot>
            <TimeSlot>Lunch: 11:30 AM - 2:00 PM</TimeSlot>
            <TimeSlot>Light Lunch (Deli, Pizza, Grill, Soup & Salad): 2:00 PM - 4:30 PM</TimeSlot>
            <DayGroup>Monday-Thursday</DayGroup>
            <TimeSlot>Dinner: 4:30 PM - 8:00 PM</TimeSlot>
            <TimeSlot>Light Dinner (Global, Deli, Grill, Soup & Salad): 8:00 PM - 10:00 PM</TimeSlot>
            <DayGroup>Saturday-Sunday</DayGroup>
            <TimeSlot>Brunch: 10:00 AM - 1:00 PM</TimeSlot>
            <TimeSlot>Light Lunch (Deli, Pizza, Grill, Soup & Salad): 1:00 PM - 4:30 PM</TimeSlot>
            <DayGroup>Friday-Sunday</DayGroup>
            <TimeSlot>Dinner: 4:30 PM - 7:30 PM</TimeSlot>
        </Schedule>
    </Card>
);

export default FenwayDiningHallCard;
