import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import desktopImage from './aboutme.JPG';


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
                                variant='h3'
                                display='block'
                                align='center'
                                justifyContent='center'
                                style={{ fontWeight: 'bold' }}
                                className='aboutme'
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
                            <img src={desktopImage}
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
                                style={{ paddingRight: '7px' }}
                                className='about-text' >
                                <p>
                                    I was fortunate enough to engrave myself into new experiences by
                                    <b className="bold bold-phone"> exploring diverse cultures </b> and
                                    <b className="bold  bold-phone"> building relationships with people
                                     from all around the world</b> through my traveling experiences.
                                      Whilst traveling my <b className="bold bold-phone"> deep connection
                                       to sports </b>, especially cricket, was always a constant. Weekends
                                        brought a smile to my face as I got to engage with the sport and
                                         share experiences with teammates.
                                </p>

                                <p>
                                    During my high school experience in India I was introduced to
                                    <b className="bold  bold-phone"> coding</b>. This gave me an understanding
                                     of a new side of the world that I had no idea existed. <b className="bold bold-phone">
                                        I could build real things to help real people make real changes </b >.
                                         This motivated me to pursue computer science as a degree at university.


                                </p>


                                <p>
                                    During my studies at the <b className="bold bold-phone">University of Edinburgh
                                    </b> I got to learn more about <b className="bold bold-phone"> machine learning </b>
                                     (ML). I was blown away by it because of the ways in which the ideas could be
                                     applied to any kind of datasets in opposing fields and still end up creating
                                     powerful applications. <b className="bold bold-phone"> My experiences motivated me to
                                     study it further and apply my knowledge to various problems</b>.
                                </p>

                                <p>
                                    The two areas which I am interested in applying ML to currently are
                                    <b className="bold bold-phone"> computer vision and algorithmic trading </b>. I
                                    <b className="bold bold-phone"> enjoy all sorts of applications </b> because they
                                    give me a chance to experience the broad spectrum it reaches, but also helps me
                                    <b className="bold bold-phone"> push my boundaries</b>.


                                </p>


                            </Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>





        </div >


    )

}


export default AboutMe;