import { connect } from "react-redux";
import Nav from "../components/Nav";
import { routerOperations, routerTypes } from '../ducks/router';

const mapStateToProps = (state, ownProps) =>({});

const mapDispatchToProps = dispatch => ({
  redirectToBacon: routerOperations.bacon
});

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
