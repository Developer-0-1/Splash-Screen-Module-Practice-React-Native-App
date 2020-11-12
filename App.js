import React from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableHighlight,
  Text,
} from 'react-native';
// import {bindActionCreators} from 'redux';
// import * as reduxActions from '../redux/actions/actions';
// import colors from '../constants/colors';

import SplashScreen from 'react-native-splash-screen';
export default class Splash extends React.Component {
  componentDidMount() {
    // SplashScreen.hide();
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{color: 'black'}}>
          abdmfkhfghmgfkhmgflhmfghlmgfhngf;hnmgfonhlkg hgoigikdmglkfdgmkl
          ghifjgfklgmlkf
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// const mapStateToProps = (state) => ({
//   reduxState: state.reducers,
// });

// const mapDispatchToProps = (dispatch) => ({
//   reduxActions: bindActionCreators(reduxActions, dispatch),
// });
