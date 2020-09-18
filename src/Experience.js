import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import { Button } from '@material-ui/core';
import WorkExp from './WorkExp.js';
import Scroll from './Scroll.js';



const Experience = () => {

    return (
        <div id="WorkExperience">
            <Grid container direction="row" justify="center" alignItems="center"
                style={{ marginBottom: "100px", backgroundColor: 'rgba(102, 252, 242,0.7)' }}>

                <Grid item md={4} xs={12} style={{ backgroundColor: "rgba(0,0,0,0.7)", color: 'white', height: "500px" }}>
                    <Typography
                        display='block'
                        justifyContent='center'
                        align='center'
                        variant='h4'
                        style={{ height: '500px', paddingTop: '30%', fontSize: '40px', fontWeight: "bold" }}>
                        Work Experience</Typography>
                </Grid>

                <Grid item md={8} xs={12}
                    style={{ backgroundColor: 'white' }}>
                    <Scroll>
                        <Grid container
                            direction="row" justify="center" alignItems="center"
                            spacing={3}
                            style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '20px' }}>
                            <WorkExp
                                logo='logo'
                                jobTitle='Research Assistant in Genetic Algorithms and
                            Algorithmic Trading'
                                company='Supervision of Dr.Stylianos'
                                date='May 2020 - '
                                description='
                                During my internship experience, I worked on two projects under the 
                                supervision of Dr.Stylianos. The first one involved 
                            testing and evaluating the precision of an automated machine learning algorithm
                            based on a genetic algorithms framework.
                            
                            The second project alllowed me to research and develop of strategies for algorthimic 
                            trading to maximize the returns and minimize the risks, using the Quantopian framework. 
                            '/>


                            <WorkExp
                                logo='logo'
                                jobTitle='Data Science Consultant and Engagement Manager'
                                company='DataGrasp London'
                                date='Jan 2020 ​– ​Aug 2020'
                                description='
                            
                            
                            During my internship experience at DataGrasp, I worked on two projects. In the first one, 
                            I created a machine learning model using time series data to predict the unemployment rate of 
                            UK and Sweeden. The model generated beat the consesus model used by current economists.
                            I also managed the team working on this project to ensure we were on track to produce high quality delieverables and meet the deadline. 
                            
                            In the second project, I created and evaluated different machine learning models to optimize marketing strategies and help the customer divide
                             their marketing resources accordingly to maximize efficiency and return.
                            
                            '/>

                            <WorkExp
                                logo='logo'
                                jobTitle='IM / Analytics Intern, Consulting'
                                company='Deloitte India'
                                date='Aug 2019 - Sept 2019'
                                description='

                            During my internship experience at Deloitte, I designed and engineered a text classification application which could be used to 
                            organize offical documents. I tested different machine learning models to optimize the classification process. The best model produced
                            reached an accuracy of 97.9%.        
                            '/>

                            <WorkExp
                                logo='logo'
                                jobTitle='Data Science Research Assistant'
                                company='University of Edinburgh'
                                date='May 2019 - Aug 2019'
                                description='
                            
                            During my internship experience, I preprocessed and visualized
                            all the data (using Python) and outputs from the Coursera online course “Data
                            Science in Stratified Healthcare and Precision
                            Medicine” under the supervision of PhD. Areti
                            Manataki. This was done to gather information about the students interactions with the course, their progress and results.
                            '/>

                            <WorkExp
                                logo='logo'
                                jobTitle='Independent Data Science Intern'
                                company='CricViz'
                                date='May 2019 - Aug 2019'
                                description="
                            During my internship experience at CricViz, (using Python) I inspected and reviewed
                            the Indian Premier League's (IPL) contribution to Indian Cricket.  I worked independently 
                            with a database to quantatively describe Indian cricket's improvement and formulated
                            conclusions based on the results. This was all summarized in a extensive report in the end.
                            "/>

                            <WorkExp
                                logo='logo'
                                jobTitle='Informatics Tutor'
                                company='University of Edinburgh'
                                date='Sept 2018 - May 2019'
                                description="
                            I planned and supervised sessions for first year informatics students, with the aim of 
                            facilitating discussion and increasing their understanding of the covered material 
                            from their peers. 
                            "/>
                        </Grid>




                    </Scroll>
                </Grid>
            </Grid>





        </div>


    )

}


export default Experience;