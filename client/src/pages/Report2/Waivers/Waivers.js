// import React, { useEffect } from 'react';
// import { setWaiversToState } from '../../../actions';

// const Waivers = () => {

//     useEffect(() => {
//         if (state.sleeper.roster) {
//             refactorData(state.sleeper.roster, state.sleeper.league_info)
//         }
//     }, [state.sleeper.roster])

//     const refactorData = (roster, league_info) => {
//         let combinedObjects = [];
//         console.log(roster);
//         for (let i = 0; i < roster.length; i++) {
//           let settings = roster[i].settings;
//           let waiverOrder = settings.waiver_position;
//           let budget = (100 - settings.waiver_budget_used);
//           combinedObjects.push({ name: roster[i].owner_id, waiverOrder: waiverOrder, budget: budget })
//         }
    
//         for (let i = 0; i < league_info.length; i++) {
//           for (let j = 0; j < roster.length; j++) {
//             if (league_info[i].user_id === combinedObjects[j].name) {
//               combinedObjects[j].name = league_info[i].display_name;
//             }
//           }
//         }
//         combinedObjects.sort((a, b) => (a.waiverOrder > b.waiverOrder) ? 1 : -1)
//         console.log(combinedObjects);
//         dispatch(setWaiversToState(combinedObjects));
//     }

//     return (
//         <Fragment>
//             <div>
//                 <p className="cardTitle">WAIVER ORDER</p>
//             </div>
//             <Table striped bordered >
//                 <thead>
//                     <tr>
//                     <th>Team Name</th>
//                     <th>Order</th>
//                     <th>Budget</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {state.sleeper.waivers ? 
//                     (
//                         state.sleeper.waivers.map(player => (
//                             <tr key={player.waiverOrder}>
//                                 <td>{player.name}</td>
//                                 <td>{player.waiverOrder}</td>
//                                 <td>{player.budget}</td>
//                             </tr>
//                         ))
//                     ) : 
//                     ('')}
//                 </tbody>
//             </Table>
//         </Fragment>
//     )
// }

// export default Waivers;