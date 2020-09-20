import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Grid from '@material-ui/core/Grid';


const Project = (props) => {
  return (
    <Card style={{ height: "400px" }}>
      <CardActionArea style={{ height: "350px" }}>
        <CardContent>
          <Typography
            variant='h4'
            style={{ textAlign: 'center', fontWeight: 'bold', paddingBottom: '10px' }}>
            {props.title}
          </Typography>
          <Typography variant="body1" color="black" component="p"
            align='center'>
            {props.summary}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>

        <Grid container justify="flex-end" alignItems="flex-end" style={{ paddingBottom: "10px", height: '50px' }}>
          <Grid item >
            <Button size="small" color="primary">
              <a href={props.link}>{
                props.id === 'Attrition' ? <><GitHubIcon className='icon' style={{
                  color: 'black', paddingRight: '10px'
                }} />
                </> :
                  props.id === 'Salary' ?
                    <><GitHubIcon className='icon' style={{
                      color: 'black', paddingRight: '10px'
                    }} />
                    </> :
                    <></>


              }</a>
            </Button>

          </Grid>
        </Grid>


      </CardActions>
    </Card>
  )
}

export default Project;