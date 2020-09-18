import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Grid } from '@material-ui/core';

const Skill = (props) => {
    const AccordionSummary = withStyles({
        root: {
            flexDirection: "column"
        },
        content: {
            marginBottom: 0
        },
        expandIcon: {
            marginRight: 0,
            paddingTop: 0
        }
    })(MuiAccordionSummary);

    return (
        <>

            <Accordion style={{
                backgroundColor: "white",
                width: "150px", color: 'black', marginBottom: '0px'
            }}>
                <AccordionSummary
                    style={{ backgroundColor: 'white', height: "100px", textAlign: 'center' }}
                    expandIcon={<ExpandMoreIcon style={{ color: "black" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.title} </Typography>
                </AccordionSummary>
                <AccordionDetails style={{ backgroundColor: "white" }}>

                    <Typography
                        align='left'>
                        {props.list}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <div class="arrow-down"></div>



        </>

    );

}

export default Skill;