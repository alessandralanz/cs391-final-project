import styled from 'styled-components';
import React from 'react';
import { ScrollRotate } from 'react-scroll-rotate';
import plate from '/public/plate.png';
import salad from '/public/salad.png'
//Extra credit component
function PlateImage() {
    return (
        <div>
            <ScrollRotate>
                <img src={plate} alt="Plate with fork and knife" style={{width: '100px', height: 'auto'}}/>
            </ScrollRotate>
        </div>
    );
}
//Extra credit component
function SaladImage() {
    return (
        <div>
            <ScrollRotate>
                <img src={salad} alt="bowl with lettuce" style={{ width: '50px', height: 'auto' }}/>
            </ScrollRotate>
        </div>
    );
}

// Component Contributor: Andrew Cabral
const CardWrapper = styled.div`
    display:flex;
`
//Creating the left card and matching the styling of the other components
const Card = styled.div`
    background-color: #ffffff;
    border-radius: 15px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    font-family: 'Open Sans', sans-serif;
`;

const Title = styled.h1`
    font-size: 40px;
    color: #2a2a2a;
    font-family: 'Open Sans', sans-serif;
`;
const Schedule = styled.div`
    text-align: left;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;
const MealPlan = styled.h2`
    font-size: 20px;
    color: #1a1a1a;
    margin-top: 15px;
    font-family: 'Open Sans', sans-serif;
`;

const Stats = styled.p`
    font-size: 12px;
    color: #4a4a4a;
    margin-left: 20px;
    font-family: 'Open Sans', sans-serif;
`;

//creating the right card and matching the styling of the other components
const CardTwo = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 2%;
    margin: 2%;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    font-family: 'Open Sans', sans-serif;
`;

const SubHeader = styled.h1`
    font-size: 25px;
    color: black;
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: 25px;
    margin-bottom: 15px;
    font-family: 'Open Sans', sans-serif;
`;

const SubText = styled.p`
    font-size: 12px;
    color: #4a4a4a;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
`;

const ReviewText = styled.p`
    color: black;
    font-size: 12px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Open Sans', sans-serif;
`;
// The function home displays both card and card2
export default function Home() {

    return (
        <>
            <CardWrapper>
                <Card>
                    <PlateImage />
                    <Title>Dining Plan Costs</Title>
                    <Schedule>
                        <MealPlan>Open Access</MealPlan>
                        <Stats>Dining Points $265 per semester</Stats>
                        <Stats>Cost $3,420 per semester</Stats>
                        <MealPlan>Open Access+</MealPlan>
                        <Stats>Dining Points $475 per semester</Stats>
                        <Stats>Cost $3,625 per semester</Stats>
                        <MealPlan>Weekly 10+</MealPlan>
                        <Stats>Dining Points $790 per semester</Stats>
                        <Stats>Cost $3,625 per semester</Stats>
                        <MealPlan>Kosher</MealPlan>
                        <Stats>Dining Points $370 per semester</Stats>
                        <Stats>Cost $3,420 per semester</Stats>
                        <MealPlan>Campus Connector 50</MealPlan>
                        <Stats>Convenience Points $250 per semester</Stats>
                        <Stats>Cost $875 per semester</Stats>
                        <MealPlan>Campus Connector 50+</MealPlan>
                        <Stats>Convenience Points $500 per semester</Stats>
                        <Stats>Cost $1,125 per semester</Stats>
                        <MealPlan>Campus Connector 50+</MealPlan>
                        <Stats>Convenience Points $500 per semester</Stats>
                        <Stats>Cost $1,435 per semester</Stats>
                    </Schedule>
                </Card>
                <CardTwo>
                    <Title>Boston University Dining Life</Title>
                    <SubHeader>What Is BU Dining?</SubHeader>
                    <SubText>When you’re ready for breakfast, lunch, dinner, or late night options, conveniently view open dining locations, here. On campus dining locations provide an essential service for the BU community of students, staff, and faculty. Whether it’s comfort food for dinner take-out, sushi ordered via your mobile device for lunch, or a quick coffee and breakfast sandwich, you’ll find a variety of menu options to fill every craving.</SubText>
                    <SubHeader>How Is The Dining Staff?</SubHeader>
                    <SubText>Our highly trained staff are professionals at preparing food for students and staff alike. You would wish you were far away from here if not for the meals cooked with love in every bite.</SubText>
                    <SubHeader><SaladImage />Reviews From Students<SaladImage /></SubHeader>
                    <ReviewText>"Beautiful and one of the newer dining halls built on the Boston University campus. The employees are nice and friendly and the food is great. My only complaint is that there needs to be more variety in terms of food options because every other day most stations just have chicken that is cooked differently. I'm tired of CHICKEN BU! But other than that it's great."</ReviewText>
                    <ReviewText>"rude personnel, dirty tables, average food"</ReviewText>
                    <ReviewText>"I love this place. As a BU student, this is a must-have experience either alone or with a  group of friends. My most favorite item here is their coffee but everything else is amazing. I think their Sunday brunches is their best deal for about $11 you eat breakfast and lunch. They also have celebratory events and festivities such as Thanksgiving that they create representative foods. Very helpful staff. I am so glad we have such an amazing dining hall at Boston University. Thank you so much Boston University for caring about us deeply."</ReviewText>
                </CardTwo>
            </CardWrapper>
        </>
    );
}


