import React from "react";

import YearInput from '../../components/YearInput';
import Sleeper1 from './Sleeper1';
import Sleeper2 from './Sleeper2';
import Sleeper3 from './Sleeper3';

import SeasonInput from '../../components/SeasonInput';
import TitleInput from '../../components/TitleInput';
import CaptionInput from '../../components/CaptionInput';

import GenerateReportButton from '../../components/GenerateReportButton';

import { Container, Row, Col } from "reactstrap"

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

const Sleeper = () => {
    const classes = useStyles();
    return (
        <div className="sleeperBackground">
            <Container>
                <Row>
                    <Col className="sleeper">
                        <YearInput platform={'sleeper'} />
                        <Sleeper1 />
                        <Sleeper2 />
                        <Sleeper3 />

                        <div className={classes.root}>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>
                                        <SeasonInput platform={'sleeper'} />
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                        </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                >
                                    <Typography className={classes.heading}>Accordion 2</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                        sit amet blandit leo lobortis eget.
                                        </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        <TitleInput platform={'sleeper'} />
                        <CaptionInput platform={'sleeper'} />
                        <GenerateReportButton reportPage={'weekly-report-sleeper'} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}


export default Sleeper;

