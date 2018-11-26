import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import styled from "styled-components";
import { connect } from "react-redux";
import RoomForm from './room_form_container';
import { ProtectedRoute } from "../../util/route_util";
import { requestRooms, requestCurrentRoom } from "../../util/admin_api_util";
import { logoutAdmin } from '../../util/session_api_util';
import SantaHat from '../../images/secret-santa.png';
import SnowTrees from '../../images/snow-trees.png';

class AdminShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
      currentRoomParticipants: [],
    };
  }

 componentDidMount() {
    debugger;
    let currentRooms = this.props.getRooms(this.props.currentUser.id);

    debugger;
    this.setState({
      rooms: currentRooms
    });
  }

  render() {
    debugger;
    let sidebar_content ;
    if (this.state.rooms) {
      sidebar_content = <div>Hi, I'm the rooms</div>
    } else {
      sidebar_content = 
      <>
          it's a little empty here, why don't you create a secret-santa game?
          <CenterFlex>
            <StyledLink to="/home/create">
              <NewGame>Create a Game</NewGame>
            </StyledLink>
          </CenterFlex>
      </>
    }
    return <Home>
      <Background />
      <Snow src={SnowTrees} alt='snow' />
        <Header>
          <StyledLink to="/home/">
            <Image src={SantaHat} alt='home' />
          </StyledLink>
          <StyledLink to="/" onClick={() => this.props.logoutAdmin()}>
            <Logout>Log Out</Logout>
          </StyledLink>

          
        </Header>
        <SideBar>{sidebar_content}</SideBar>
        <Content>
          <Switch>
            <ProtectedRoute exact path="/home/create" component={RoomForm} />
            <ProtectedRoute exact path="/home/:roomid" />
            <div>
              Here goes Secret Santa Mission Statement. What we are about. What we are doing.
            </div>
          </Switch>
        </Content>
        <Footer>© 2018 Secret Santa</Footer>
      </Home>
  }
}



const mapStateToProps = ({ session }) => {
  return {
    currentUser: session
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getRooms: adminId => dispatch(requestRooms(adminId)),
    getCurrentRoom: roomId => dispatch(requestCurrentRoom(roomId)),
    logoutAdmin: () => dispatch(logoutAdmin())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminShow);

const Home = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 1fr 40px;
  grid-template-areas: "header  header  header" "sidebar content content"
    "footer  footer  footer";
  color: #fef9f9;
`;

const Header = styled.div`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  padding: 0 25px;
  align-items: center;
  background: #235e6f;
`;

const Footer = styled.div`
  grid-area: footer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fef9f9;
  color: #333;
  box-shadow: 0 -1px 5px -4px #333;
`;

const Content = styled.div`
  grid-area: content;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  position: relative;
  padding: 0.5rem;
  margin-right: 10px;
`;

const SideBar = styled.div`
  grid-area: sidebar;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 0.5rem;
  margin-left: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 22px;
  display: block;
`;

const Image = styled.img`
  width: 50px;
`;

const Logout = styled.button`
  &:hover {
    color: #159957;
  }
`;

const Snow = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  z-index: -1;
`;

const Background = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -2;
  background: #159957;
  background: -webkit-linear-gradient(to right, #155799, #159957);
  background: linear-gradient(to right, #155799, #159957);
`;

const NewGame = styled.button`
  background: #cc231e;
  padding: 5px;
  border-radius: 5px;
  margin-top: 20px;
  width: 180px;
`;

const CenterFlex = styled.div`
  display: flex;
  justify-content: center;
`;