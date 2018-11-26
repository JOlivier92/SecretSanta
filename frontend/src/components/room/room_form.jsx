import React from "react";
import styled from "styled-components";

class RoomForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      adminId: "",
      title: "",
      min: "",
      max: "",
      suggestions: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ adminId: this.props.currentUser.id });
  }

  handleSubmit(e) {
    e.preventDefault();
    let roomData = Object.assign({}, { rooms: this.state });
    this.props.sendForm(roomData);
    // .then( (resdata) => (this.props.history.push(`/rooms/${resdata.id}`)))
    debugger;
  }

  handleChange(type) {
    debugger;
    return event => {
      event.preventDefault();
      this.setState({ [type]: event.currentTarget.value });
    };
  }
  render() {
    debugger;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <FlexOuter>
            <List>
              <Label for="title">title</Label>
              <Input type="text" id="title" onChange={this.handleChange("title")} placeholder="Name your group!" />
            </List>
            <List>
              <Label for="min">min</Label>
              <Input type="text" id="min" onChange={this.handleChange("min")} placeholder="Suggested minimum price" />
            </List>
            <List>
              <Label for="max">max</Label>
              <Input type="text" id="max" onChange={this.handleChange("max")} placeholder="Suggested maximum price" />
            </List>
            <List>
              <Label for="suggestion">suggestion</Label>
              <TextArea rows="6" id="suggestion" onChange={this.handleChange("suggestions")} placeholder="Suggestions of presents for your Secret Santa" />
            </List>
            <List>
              <Button type="submit">Submit</Button>
            </List>
          </FlexOuter>
        </form>
      </Container>

    )
  }
}

export default RoomForm;


const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

const FlexOuter = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const List = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  padding: 8px;
  font-weight: 300;
  letter-spacing: .09em;
  text-transform: uppercase;
  flex: 1 0 120px;
  max-width: 220px;
`;

const Input = styled.input`
  padding: 15px;
  border: none;
  width: 100%;
`;

const TextArea = styled.textarea`
  padding: 15px;
  border: none;
  width: 100%;
`;

const Button = styled.button`
  background: #cc231e;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  width: 120px;
`;