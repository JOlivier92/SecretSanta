class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            participants: []
        }
    }

    componentDidMount() {
        this.setState({
            rooms: this.props.getRooms;
        });
    }

    render () {
        <div>Nothing here yet</div>
    }
}

export default Sidebar; 
