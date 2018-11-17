import React from 'react';

class LinkForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name = "",
      email = "",
      suggestions = "",
      formLink = this.props.match.id
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    roomData = Object.assign({}, {rooms: this.state})
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
            <label>Name:</label>
            <input type="text" onChange={this.handleChange('name')} ></input>
          </div>
          <div>
            <label>Email:</label>
            <input type="text" onChange={this.handleChange('email')} ></input>
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

export default LinkForm; 
