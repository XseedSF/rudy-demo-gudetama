import { connect } from "react-redux";
import Image from "../components/Image";

const mapStateToProps = (state, ownProps) => ({
  src: state.image.src
});

const mapDispatchToProps = dispatch => ({});

const ImageContainer = connect(mapStateToProps, mapDispatchToProps)(Image);

export default ImageContainer;