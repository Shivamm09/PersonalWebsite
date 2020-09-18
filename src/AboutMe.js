import React from 'react';
import { Grid, Typography } from '@material-ui/core';


const AboutMe = () => {
    return (
        <div id="AboutMe">
            <Grid container direction="row" justify="center" alignItems="center"
                style={{ color: 'white', marginBottom: '90px', marginTop: '90px', backgroundColor: 'rgba(102, 252, 242,0.7)' }}>

                <Grid item sm={12} md={4}
                    style={{ color: 'black', width: '100%', height: '100%' }}>
                    <Grid container
                        direction="row" justify="center" alignItems="center"
                        style={{ height: '100%' }}>
                        <Grid item>
                            <Typography
                                variant='h4'
                                display='block'
                                align='center'
                                justifyContent='center'
                                style={{ fontWeight: 'bold' }}
                            > About Me</Typography>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item sm={12} md={8}
                    style={{ backgroundColor: 'rgba(0,0,0,0.7)', paddingLeft: '30px', minHeight: '100vh' }}>

                    <Grid container
                        direction="column"
                        justify="center"
                        alignItems="center"
                    >

                        <Grid item
                            style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <img src="images/aboutme.JPG"
                                style={{ height: '300px', borderRadius: '50%', marginTop: '30px' }}>
                            </img>
                        </Grid>

                        <Grid item
                            style={{ marginBottom: '30px' }}>
                            <Typography
                                display='block'
                                justifyContent='center'
                                align='center'
                                variant='h6'
                                style={{ paddingRight: '7px' }} >
                                Travelling through many countries as a kid, I was fortunate enough to explore diverse cultures, engrave myself into new experiences, and build lifetime relationships with people from all around the world.
                                Throughout the journey, I had a deep connection to sports, especially cricket.
                                Weekends always put a smile on my face as it was a chance to play, be it on an actual ground or even in unorthodox places such as tennis courts
                                since it was a chance to engage with the sport and share great experiences with teammates and the opposition team.
                                When I moved back home to India, I was introduced to coding in high school.
                                Coding gave me an understanding to a new side of the world that I had no idea existed.
                                I could build real things to help real people to make real changes.
                                I felt like an Avenger with the tools available at my disposal.
                                This motivated me to pursue computer science as a degree at university.
                                During my experiences at the University of Edinburgh and in my internships, I got to learn more about machine learning (ML).
                                I was blown away by these concepts because of the ways in which the ideas could be applied to any kind of datasets in such opposing fields and still end up creating powerful applications.
                                My experiences motivated me to take up online courses on ML and apply my skills on different platforms.
                                The two areas which I am interested in applying ML to currently are computer vision and algorithmic trading.
                                I enjoy all sorts of applications of ML because they give me a chance to experience the broad spectrum it reaches,
                                but also helps me push my boundaries.
                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>





        </div >


    )

}


export default AboutMe;