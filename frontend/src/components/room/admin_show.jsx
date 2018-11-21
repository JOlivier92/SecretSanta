import React from 'react';
class AdminShow extends React.Component {
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
          <div className="home-container">
            <div className="header-container">
            header
            </div>
            <div className="main-content-container">
                <div className="left-sidebar-container">
                    left-sidebar
                </div>

                <div className="current-room-container">
                    main-content
                </div>
            </div>
          </div>
        )
    }
}

export default AdminShow;