import React from 'react';

import OptionalInput from './OptionalInput';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { Jumbotron } from 'reactstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: theme.typography.fontWeightRegular,
  },
  accordianDetails: {
    display: 'block',
    
  }
}));

export default function OptionalInputs(props) {
  const classes = useStyles();

  return (
    <>
    <Jumbotron className="sleeper__jumbotron">
    <p className="heading-tertiary">Optional Inputs</p>

    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Season
            </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianDetails}>
          <Typography>
            <OptionalInput input={'Season'} platform={props.platform} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Title</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianDetails}>
          <Typography>
            <OptionalInput input={'Title'} platform={props.platform} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Caption</Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.accordianDetails}>
          <Typography>
            <OptionalInput input={'Caption'} platform={props.platform} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </Jumbotron>
    </>
  );
}