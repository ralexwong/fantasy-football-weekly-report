// import React, { Component } from "react";

// import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
// // import { fetchPayout } from '../../actions';

// class League extends Component {

//   componentDidMount() {
    
//   }

//   // takes descontructed props from <Field>
//   renderInput = ({ input }) => {    
//     return (
//       <input {...input} autoComplete="off" />
//     ); // {...input} === onChange={formProps.input.onChange}  value={formProps.input.value}
//   }

//   onSubmit = (formValues) => {
//     console.log(formValues.title);   
      
//   }


//   mapTableRows = (x) => {
//     for (let i = 0; i < x; i++) {
//       return (
//         <tr>
//           <td>Week {x}</td>
//           <td>
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//               <Field name="title" component={this.renderInput} label="Enter Title" />
//             </form>
//           </td>
//           <td>
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//               <Field name="description" component={this.renderInput} label="Enter Title" />
//             </form>
//           </td>
//           <td>
//             <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
//               <Field name="winner" component={this.renderInput} label="Enter Title" />
//             </form>
//           </td>
//         </tr>
//       )
//     }
//   }

//   render() {
//     return (
//         <Table striped bordered hover>
//           <tbody>
//             {this.mapTableRows(13)}
//           </tbody>
//         </Table>
//     )
//   }
// }

// // checks if user inputted a valid title/description
// const validate = formValues => {
//   const errors = {};

//   if (!formValues.title) {
//       errors.title = "You must enter a title";
//   }
//   return errors;
// }

// const mapStateToProps = (state) => {
//   return {  }
// }

// export default connect(mapStateToProps, {  })(reduxForm({
//   form: 'payouts',
//   validate
// })(League))


