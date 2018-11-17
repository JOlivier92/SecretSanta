import React from 'react';

class RoomForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: "",
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
    debugger;
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
    return <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <input type="text" onChange={this.handleChange("title")} placeholder="Name your group!"></input>
          </div>
          <div>
            <label>Min:</label>
            <input type="text" onChange={this.handleChange("min")} placeholder="Suggested Minimum Price" />
          </div>
          <div>
            <label>Max:</label>
          <input type="text" onChange={this.handleChange("max")} placeholder="Suggested Maximum Price" />
          </div>
          <div>
            <label>Suggestion:</label>
            <input type="text" onChange={this.handleChange("suggestions")} placeholder="Suggestions of presents for your Secret Santa" />
          </div>
          <label>Create</label>
          <input type="submit" className="submit-button" />
        </form>
      </div>;
  }
}

export default RoomForm;