import React from 'react';
import { TouchableHighlight, StyleSheet, View, Image, ScrollView} from 'react-native';
import CustomText from '../common/CustomText';
import GetStarted from './GetStarted';

export default class Home extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
      <ScrollView>
      </ScrollView>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
            <TouchableHighlight onPress={() => this.props.navigation.navigate('Health')}>
                <Image source={require("../../images/health.png")}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Home')}>
                <Image source={require("../../images/home.png")}/>
            </TouchableHighlight>

            <TouchableHighlight onPress={() => this.props.navigation.navigate('Profile')}>
             <Image source={require("../../images/profile.png")}/>
            </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222644'
  },
  top: {
  },
  bottom: {
      height:10,
      width: 10,
      alignItems: 'baseline',
      flexDirection: 'row'

  },
  fullWidthButton: {
          flexDirection: 'row',
          alignSelf: 'stretch',
          justifyContent: 'space-between'
  },
});
