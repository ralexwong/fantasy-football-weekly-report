// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// import { Row, Col, Jumbotron } from "reactstrap"

// export default function EspnGuide() {
//     const classes = useStyles();
//     // getModalStyle is not a pure function, we roll the style only on the first render
//     const [modalStyle] = React.useState(getModalStyle);
//     const [open, setOpen] = React.useState(false);
  
//     const handleOpen = () => {
//       setOpen(true);
//     };
  
//     const handleClose = () => {
//       setOpen(false);
//     };
  
//     const body = (
//       <div style={modalStyle} className={classes.paper}>
//         <img className='espnGuide__image' src="./images/espn-id.png" alt="photo1"></img>
//       </div>
//     );

//     return (
//         <div className='espnGuide'>
//             <Jumbotron className="jumbotron sleeper__jumbotron">
//                 <Row>
//                     <Col xs={12}>
//                         <div className='composition'>
//                             <img className='espnGuide__image' src="./images/espn-id.png" alt="photo1" onClick={handleOpen}></img>
//                         </div>
//                     </Col>

//                     <Col xs={12}>
//                         <h3 className='heading-teritary'><u><b>Step 1</b></u></h3>
//                         <p className='paragraph bold'>Log on to the espn website. (ID cannot be viewed on the app)</p>

//                         <h3 className='heading-teritary'><u><b>Step 2</b></u></h3>
//                         <p className='paragraph'>Copy or remember the highlighted number for your league. This is your league ID.</p>
//                     </Col>
//                 </Row>
//             </Jumbotron>

//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="simple-modal-title"
//                 aria-describedby="simple-modal-description"
//             >
//                 {body}
//             </Modal>
//         </div>
//     )
// }

// const getModalStyle = () => {
//   const top = 50;
//   const left = 50;

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     position: 'absolute',
//     width: '100%',
//     padding: theme.spacing(2, 4, 3),
//   },
// }));

import React from 'react'
import { Link } from 'react-router-dom';
import { Row, Col, Jumbotron } from "reactstrap"

export default function EspnGuide() {
    return (
        <div className='espnGuide'>
            <Jumbotron className="jumbotron sleeper__jumbotron">
                    <Col xs={12}>
                        <h3 className='heading-teritary'><u><b>Step 1</b></u></h3>
                        <p className='paragraph'>Log on to the espn website. (ID cannot be viewed on the app)</p>

                        <h3 className='heading-teritary'><u><b>Step 2</b></u></h3>
                        <p className='paragraph'>Copy or remember the highlighted number for your league. This is your league ID.</p>
                    </Col>

                    <Col xs={12}>
                        <a target="_blank" href='/images/espn-id.png'><img className='espnGuide__image' src="./images/espn-id.png" alt="photo1"></img></a>
                    </Col>
            </Jumbotron>
            <Jumbotron className="jumbotron sleeper__jumbotron">
                    <Col xs={12}>
                        <h3 className='heading-teritary'><u><b>Step 3</b></u></h3>
                        <p className='paragraph'>Go to your league settings and make the league viewable to public. (Can only be done by the league commissioner)</p>
                    </Col>

                    <Col xs={12}>
                        <a target="_blank" href='/images/espn-public-red-circle.jpg'><img className='espnGuide__image' src="./images/espn-public-red-circle.jpg" alt="photo2"></img></a>
                    </Col>
            </Jumbotron>
        </div>
    )
}