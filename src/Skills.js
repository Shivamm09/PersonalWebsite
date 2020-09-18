import React from 'react';
import Skill from "./Skill.js"
import { Grid, Typography } from '@material-ui/core';

const Skills = () => {
    return (
        <div id="Skills">
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}
                style={{ paddingBottom: '30px' }}>
                <Grid item xs={12}>
                    <Typography
                        display='block'
                        justifyContent='center'
                        align='center'
                        variant='h4'
                        style={{ fontSize: '60px', marginBottom: '30px', fontWeight: "bold" }}>
                        Skills</Typography>
                </Grid>

                <Grid item md={3} sm={6} xs={6}>

                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item >
                            <Skill
                                title="Web Development"
                                list={<><li>HTML</li><li>CSS</li><li>JavaScript</li><li>React</li><li>Material UI</li><li>NestJS</li></>
                                }
                                height="150px"
                            />

                        </Grid>
                        <Grid item>
                            <Skill
                                title="Python"
                                list={<><li>Numpy</li><li>Pandas</li></>}
                                height="150px"
                            />


                        </Grid>
                    </Grid>
                </Grid>

                <Grid item md={3} sm={6} xs={6}>

                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item >
                            <Skill
                                title="Machine Learning"
                                list={<><li>Sckit-Learn (Python)</li><li>Keras (Python)</li><li>Deep Learning</li></>
                                }
                                height="150px"
                            />

                        </Grid>
                        <Grid item >
                            <Skill
                                title="Computer Vision"
                                list={<><li>OpenCV (Python)</li></>}
                                height="150px"
                            />
                        </Grid>
                    </Grid>
                </Grid>


                <Grid item md={3} sm={6} xs={6}>

                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <Skill
                                title="Database Management"
                                list={<><li>Postgres SQL</li><li>MY SQL</li></>
                                }
                                height="150px"
                            />

                        </Grid>
                        <Grid item>
                            <Skill
                                title="Java"
                                list={<><li>OOP</li><li>JUnit Testing</li></>}
                                height="100px"
                            />
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={3}>

                    <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
                        <Grid item>
                            <Skill
                                title="Data Visualization"
                                list={<><li>Tableau</li><li>Matplotlib (Python)</li><li>Seaborn (Python)</li></>
                                }
                                height="150px"
                            />

                        </Grid>
                        <Grid item>
                            <Skill
                                title="Github"
                                list={<></>}
                                height="100px"
                            />
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>




    );

}

export default Skills;
