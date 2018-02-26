import { connect } from "react-redux";
import Nav from "../components/Nav";
import { routerOperations, routerTypes } from '../ducks/router';

const mapStateToProps = (state, ownProps) =>({});

const mapDispatchToProps = dispatch => ({
  redirectToBacon: routerOperations.bacon,
  redirectToBacon3: () => dispatch(routerOperations.bacon(3)),
});

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
