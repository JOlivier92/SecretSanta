import React from 'react';
class SecretRoom extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            participants: []
        }
    }

    componentDidMount() {
        this.setState({
            participants: this.props.getCurrentParticipants
        });
    }


    render() {
        return (
            <div>
                NOPE
          </div>
        )
    }
}

export default SecretRoom;