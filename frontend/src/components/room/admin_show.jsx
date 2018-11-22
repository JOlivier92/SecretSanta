import React from "react";
import styled from "styled-components";
import { connect } from "react-redux"; 
import { requestRooms, requestCurrentRoom } from "../../util/admin_api_util";

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
    return <Home>
        <Header>header</Header>
          <SideBar>
            <div>hi</div>
            Lorem ipsum dolor amet air plant gastropub intelligentsia, food
            truck franzen occupy PBR&B. Put a bird on it fanny pack iPhone
            four dollar toast edison bulb. Four dollar toast kale chips
            cardigan selvage man bun lyft church-key drinking vinegar roof
            party vice. Lumbersexual air plant snackwave stumptown shabby
            chic man bun brooklyn master cleanse narwhal. Wayfarers jean
            shorts pork belly photo booth meh VHS polaroid mixtape godard
            fingerstache four dollar toast 8-bit 90's kickstarter.
            Post-ironic next level photo booth raclette.
          </SideBar>
          <Content>
            Chambray narwhal taiyaki beard. Meggings butcher intelligentsia,
            mlkshk iceland poke locavore retro neutra selvage letterpress
            VHS bushwick squid kitsch. Cardigan vape lumbersexual tbh ennui
            fam chia hell of put a bird on it mumblecore. Disrupt gochujang
            neutra, intelligentsia swag listicle cliche four loko master
            cleanse copper mug taiyaki. Edison bulb snackwave woke, franzen
            before they sold out pour-over art party migas health goth
            butcher 3 wolf moon chicharrones. Tacos gochujang banh mi
            williamsburg glossier. Drinking vinegar tacos enamel pin blue
            bottle sartorial, asymmetrical ennui post-ironic. Franzen
            adaptogen 90's, la croix you probably haven't heard of them woke
            art party waistcoat kickstarter hella listicle authentic
            tousled. Banjo bitters pitchfork fanny pack poutine. Succulents
            vegan slow-carb, unicorn vape wayfarers vice neutra drinking
            vinegar try-hard cray iPhone pour-over taxidermy. Venmo lo-fi
            pork belly VHS palo santo gochujang. Pug vape mustache austin
            tousled vexillologist copper mug taiyaki hot chicken blue bottle
            banjo humblebrag. Taiyaki ramps live-edge brunch ethical
            crucifix. Live-edge meggings dreamcatcher kitsch. Tote bag
            godard small batch etsy woke you probably haven't heard of them
            hoodie salvia hot chicken locavore raclette ethical af
            gastropub. Cardigan tbh cornhole disrupt pour-over literally,
            sriracha yr af cray small batch seitan. Artisan ethical bicycle
            rights offal small batch master cleanse brunch retro next level
            vegan umami four loko. Heirloom farm-to-table activated charcoal
            DIY butcher air plant direct trade subway tile keffiyeh beard
            retro.
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
    getCurrentRoom: roomId => dispatch(requestCurrentRoom(roomId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminShow);

const Home = styled.div`
  display: grid;
  grid-gap: 10px;
  height: 100vh;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 80px 1fr 100px;
  grid-template-areas: "header  header  header" "sidebar content content"
    "footer  footer  footer";
  background: #159957;
  background: -webkit-linear-gradient(to right, #155799, #159957);
  background: linear-gradient(to right, #155799, #159957);

  color: #fef9f9;
`;

const Header = styled.div`
  grid-area: header;
  background: #235e6f;
`;

const Footer = styled.div`
  grid-area: footer;
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
