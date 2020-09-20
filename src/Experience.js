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

                <Grid item md={4} xs={12} style={{ backgroundColor: "rgba(0,0,0,0.7)", color: 'white', height: "500px" }}
                    className="exp-title">
                    <Typography
                        display='block'
                        justifyContent='center'
                        align='center'
                        variant='h4'
                        style={{ height: '500px', paddingTop: '30%', fontSize: '40px', fontWeight: "bold" }}
                        className="exp-title">
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
                                description={<><p>During my internship experience, I worked on two projects under the
                                supervision of Dr.Stylianos. The first one involved <b>testing and evaluating</b> the precision of an <b>automated machine learning algorithm
                                based on a genetic algorithms framework.</b>

                            The second project allowed me to <b>research and develop strategies for algorthimic
                            trading</b> to maximize the returns and minimize the risks, using the <b>Quantopian</b> framework.</p> </>}


                            />


                            <WorkExp
                                logo='logo'
                                jobTitle='Data Science Consultant and Engagement Manager'
                                company='DataGrasp London'
                                date='Jan 2020 ​– ​Aug 2020'
                                description={
                                    <><p>
                                        During my internship experience at DataGrasp, I worked on two projects. In the first one,
                            I created a <b>machine learning model using time series data to predict the unemployment rate</b> of
                            UK and Sweeden. The <b>model generated beat the consesus model </b> used by current economists.
                            I also <b>managed the team working</b> on this project to ensure we were on track to produce high quality delieverables and meet the deadline.

                            In the second project, I <b>created and evaluated different machine learning models to optimize marketing strategies</b> and help the customer divide
                             their marketing resources accordingly to maximize efficiency and return.

                                    </p>
                                    </>
                                }




                            />

                            <WorkExp
                                logo='logo'
                                jobTitle='IM / Analytics Intern, Consulting'
                                company='Deloitte India'
                                date='Aug 2019 - Sept 2019'
                                description={
                                    <><p>
                                        During my internship experience at Deloitte, I <b>designed and engineered a text classification</b> application which could be used to

                                         <b> organize offical documents</b>. I tested different machine learning models to optimize the classification process. The best model produced
                                        reached an <b>accuracy of 97.9%</b>.

                                    </p></>
                                }


                            />

                            <WorkExp
                                logo='logo'
                                jobTitle='Data Science Research Assistant'
                                company='University of Edinburgh'
                                date='May 2019 - Aug 2019'
                                description={
                                    <><p>
                                        During my internship experience, I <b>preprocessed and visualized </b>
                            all the data (using <b>Python</b>) and outputs from the Coursera online course “Data
                            Science in Stratified Healthcare and Precision
                            Medicine” under the supervision of PhD. Areti
                            Manataki. This was done to <b>gather further information</b> about the students interactions with the course, their progress and results.

                                    </p></>

                                }




                            />

                            <WorkExp
                                logo='logo'
                                jobTitle='Independent Data Science Intern'
                                company='CricViz'
                                date='May 2019 - Aug 2019'
                                description={
                                    <><p>
                                        During my internship experience at CricViz, (using <b>Python</b>) I inspected and reviewed
                            the Indian Premier League's (IPL) contribution to Indian Cricket.  I <b>worked independently </b>
                            with a <b>database</b> to <b>quantatively describe</b> Indian cricket's improvement and <b>formulated
                            conclusions based on the results</b>. This was all summarized in a extensive report in the end.
                                    </p></>
                                }



                            />

                            <WorkExp
                                logo='logo'
                                jobTitle='Informatics Tutor'
                                company='University of Edinburgh'
                                date='Sept 2018 - May 2019'
                                description={
                                    <><p>I <b>planned and supervised </b> sessions for first year informatics students, with the aim of
                                    facilitating discussion and increasing their understanding of the covered material
                                    from their peers.
                                        </p></>
                                }

                            />
                        </Grid>




                    </Scroll>
                </Grid>
            </Grid >





        </div >


    )

}


export default Experience;