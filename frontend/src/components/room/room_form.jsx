import React from 'react';

class RoomForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      min: "",
      max: "",
      suggestions: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    let roomData = Object.assign({}, {rooms: this.state});
    this.props.sendForm(roomData).then( (resdata) => (this.props.history.push(`/rooms/${resdata.id}`)))
  }

  handleChange(type){
    return (event) => {
      event.preventDefault();
      this.setState({[type]: event.currentTarget.value})
    }
  }
  render(){
    debugger
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Min:</label>
            <input type="text" onChange={this.handleChange('min')} placeholder="min price to spend"></input>
          </div>
          <div>
            <label>Max:</label>
            <input type="text" onChange={this.handleChange('max')} placeholder="max price to spend"></input>
          </div>
          <div>
            <label>Suggestion:</label>
            <input type="text" onChange={this.handleChange('suggestions')} placeholder="Suggestions of presents for your Secret Santa"></input>
          </div>
        
          <input type="submit" className="submit-button">Create</input>
        </form>
      </div>
    )
  }
}

export default RoomForm;