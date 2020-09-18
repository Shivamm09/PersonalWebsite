import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Project from './Project.js';
import { Grid } from '@material-ui/core';


const Projects = () => {
    return (
        <div id="Projects">


            <Grid container direction="row" justify="center" alignItems="center"
                style={{
                    marginBottom: '60px', marginRight: '30px', backgroundColor: "rgba(0,0,0,0.7)",
                    color: "white"
                }}>

                <Grid item md={4} xs={12}>
                    <Typography
                        display='block'
                        justifyContent='center'
                        align='center'
                        variant='h4'
                        style={{ fontSize: '40px', fontWeight: "bold" }}>
                        Projects</Typography>
                </Grid>

                <Grid item md={8} xs={12}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={2}>

                        <Grid item md={4} sm={12}>
                            <Project
                                image='/images/happy.JPG'
                                title="Kirket Scoring Web App"
                                summary='A ​standalone web application​ used to score cricket games automatically, display the results, and ​data science visualization​s of the player and team statistics.
                            Developed using React, CSS, JavaScript, NestJS connected to a local database using MySQL.
                            '
                                id='Kirket'
                            />
                        </Grid>

                        <Grid item md={4} sm={12}>
                            <Project
                                image='/images/happy.JPG'
                                title="Employee Attrition Study"
                                summary=' Researched factors which most significantly contribute to employee attrition.
                                Developed machine learning models (​SVM and​ N​eural Networks​) to predict the likelihood of employees leaving the company given their current attributes.
                                Evaluated models accuracy and their long term effect.
                                Best Model: 83% precision, 89% accuracy'
                                link='https://github.com/Shivamm09/HRAttritionStudy'
                                id='Attrition'
                            />
                        </Grid>
                        <Grid item md={4} sm={12}>
                            <Project
                                image='/images/happy.JPG'
                                title="Salary Prediction Model"
                                summary='Developed a salary prediction model to be used by HR / talent function​ to improve retention rate​ in competitive labour markets. 
                                The application was devised in P​ython, relied on gradient boosting regression​ and was trained on a dataset with 8 features. 
                                The final achieved MSE was 369.'
                                link='https://github.com/Shivamm09/SalaryPredictions'
                                id='Salary'
                            />
                        </Grid>

                    </Grid>




                </Grid>
            </Grid>
        </div>

    )
}

export default Projects;