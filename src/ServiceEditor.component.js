import React, { Component } from 'react';
import {PlannerConsumer} from './Planner.context';

class ServiceEditor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(event) {
    const target = event.target;
    const val = target.value;
    const name = target.name; 
    
    this.props.actions.handleServiceActionUpdate(this.props.id, name, val);      
  }

  render() {
    return (
      <form style={{display: (this.props.attributes.editing) ? 'block' : 'none'}}>
        <h5>Edit Service Action {this.props.attributes.name}</h5>
        <label>Number of Engineers</label>
        <input type="number" name="engineers" defaultValue={this.props.attributes.engineers} ref={this.input} onChange={this.handleChange} /> 
        <label>Duration (hrs)</label>
        <input type="number" name="duration" defaultValue={this.props.attributes.duration}  onChange={this.handleChange} />
      </form>
    );
  }
}


const ServiceEditors = (props) => (
 	<PlannerConsumer>
 		
    {context => {
      const editors = context.state.serviceActions.map((sa, index) => <ServiceEditor id={sa.id} attributes={sa} key={index} actions={context.actions}/> );
 		  return (
        <div className="editors">{editors}</div>
      )
    }}
  </PlannerConsumer>
);

export default ServiceEditors;