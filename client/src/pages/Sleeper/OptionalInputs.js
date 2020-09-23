import React from 'react';

import SeasonInput from '../../components/SeasonInput';
import TitleInput from '../../components/TitleInput';
import CaptionInput from '../../components/CaptionInput';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function OptionalInputs() {
  const classes = useStyles();

  return (
    <>
    <p>Optional Inputs</p>
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
        <AccordionDetails>
          <Typography>
            <SeasonInput platform={'sleeper'} />
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
        <AccordionDetails>
          <Typography>
            <TitleInput platform={'sleeper'} />

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
        <AccordionDetails>
          <Typography>
            <CaptionInput platform={'sleeper'} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );
}