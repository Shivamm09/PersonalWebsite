import React from 'react';
import { Grid } from '@material-ui/core';

const Certification = (props) => {
    return (


        <Grid container direction="row" justify="center" alignItems="center" style={{ marginBottom: "10px" }} >
            <Grid item xs={4} >
                <Grid container direction="row" justify="center" alignItems="center" >
                    <Grid item>
                        <a href={props.link} >
                            <img src={props.image} className="shadows"
                                style={{ height: '80px', borderRadius: '50%' }}
                            >

                            </img>
                        </a>

                    </Grid>

                </Grid>


            </Grid>

            <Grid item xs={8}>
                <h3>
                    {props.title}
                </h3>
            </Grid>

        </Grid >



        // <div>
        // <h3>
        // Data Scientist with Python Track, Data Camp
        // </h3>
        // </div>


    );
}

export default Certification;