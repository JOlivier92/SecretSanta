import React from 'react';
class RoomShow extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            participants: []
        }
    }

    componentDidMount () {
        this.setState({
            participants: this.props.getCurrentParticipants
        });
    }

    
    render(){
        return(
          <div>
              NOPE
          </div>
        )
      }
}