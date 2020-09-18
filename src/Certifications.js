import React from 'react';
import { Grid } from '@material-ui/core';
import Certification from './Certification.js';
const Certifications = () => {
    return (
        <div id="Certifications">


            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={12} styile={{ margin: "0px" }}>
                    <h1 style={{ textAlign: "center" }}> Certifications/Awards </h1>
                </Grid>


                <Grid item xs={12}>
                    <Certification title="Data Scientist with Python Track, DataCamp"
                        image="./images/datacamp.png"
                        link="https://www.datacamp.com/statement-of-accomplishment/track/ddf465c58cf5072f3a8edf080fe3dbcf047f26ec" />
                </Grid>

                <Grid item xs={12}>
                    <Certification title="Data Scientist in Python, DataQuest"
                        image="./images/dataquest.png"
                        link="https://app.dataquest.io/verify_cert/QXE1C44XNZNWV7AK6SX4/" />
                </Grid>
                <Grid item xs={12}>
                    <Certification title="Edinburgh Award, University of Edinburgh"
                        image="./images/ed.png"
                        link="https://www.linkedin.com/in/shivammgupta09/" />
                </Grid>
                <Grid item xs={12}>
                    <Certification title="SQL Essential Training, Linkedin Learning"
                        image="./images/linkedin.png"
                        link="https://www.linkedin.com/in/shivammgupta09/" />
                </Grid>
            </Grid>
        </div>

        // <Certification/>
    );
}

export default Certifications;