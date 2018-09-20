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
      <ScrollView style={styles.scroll}>
      </ScrollView>
      <View style={styles.bottom}>
            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Health')}>
                <Image style={styles.images} source={require("../../images/health.png")}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Home')}>
                <Image style={styles.images} source={require("../../images/home.png")}/>
            </TouchableHighlight>

            <TouchableHighlight style={styles.fullWidthButton} onPress={() => this.props.navigation.navigate('Profile')}>
             <Image style={styles.images} source={require("../../images/profile.png")}/>
            </TouchableHighlight>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#222644'
  },
  scroll: {
      flex: 0.7,
      flexDirection: 'column'
  },
  bottom: {
      flex: 0.3,
      flexDirection: 'row',
  },
  fullWidthButton: {
      flex: 0.33,
      flexDirection: 'row'
  }
});
