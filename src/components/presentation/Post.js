import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import config from '../../config';

class Post extends Component {
constructor() {
  super();
  this.state = {
    liked: false, //SET STATE OF liked to FALSE
    screenWidth: Dimensions.get("window").width
  };
}

likeToggled() { //MAKE A FUNCTION SET STATE TO NOT LIKED YET = False !!!!
  this.setState({
    liked: !this.state.liked
  });
}
  render() {
    const imageHeight = Math.floor(this.state.screenWidth * 1.1);
    const imageSelection =
    this.props.item % 2===0 //each time it grabs the post divide it by 2 so that we get ODD then Even each time.
      ? "https://lh3.googleusercontent.com/j5SxUxGI6P4XBsd0IU68lSabInjuRCVuCvdUM8jbvsH0-LUVDRmS3TX3pm1BY5Gjc5jhQHT1_TrxvEQEd2koqQ9x"
      : "https://lh3.googleusercontent.com/A90G7xfSx0HVRXNEs0nshieBvtJL2n3voe5CFPJWiOYwyIFzf070ys9GVCWIlKkPgRr_-_cMwAqGSipEYNFfMr7HjQ"
    const imageUri = imageSelection + "=s" + imageHeight + "-c";

    const heartIconColor = (this.state.liked) ? 'rgb(252,61,57)': null;
    //IF YOU CLICK AND IT IS LIKED THEN SET IT TOO red otherwise do nothing = null

    return(
      <View style={{ flex: 1, width: 100 + "%"}}>
        <View style={styles.userBar}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image
              style={styles.userPic}
               source={{ uri:"https://lh3.googleusercontent.com/lB5y-Na0deCOmHyL33AhQs72odP7uURROP3qzTh_pN3-YqZBClcVBUHHt7AzWaoKlGWx5C5TZdWG6lDIJUGtn23nbg"}}/>
            <Text style={{marginLeft:10}}>Chris Scully</Text>
          </View>
          <View style={{alignItems: 'center'}}><Text style={{fontSize: 26}}>...</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {      //ON CLICK GRAB THE FUNCTION
          this.likeToggled();
        }}
        >
        <Image
          style={{ width: this.state.screenWidth, height: 405 }}
          source={{
            uri: imageUri
          }}
          />
          </TouchableOpacity>
      <View style={styles.iconBar}>
        <Image style={[styles.icon, { height: 40, width: 40, tintColor: heartIconColor }]}
           source={config.images.heartIcon}
        />
        <Image style={[styles.icon, { height: 35, width: 35 }]}
          source={config.images.bubbleIcon}/>
        <Image style={[styles.icon, { height: 40, width: 40 }]}
          source={config.images.arrowIcon}/>
      </View>
      <View style={styles.iconBar}>
        <Image style={[styles.icon, { height: 30, width: 30 }]}
           source={config.images.heartIcon}
        />
        <Text>128 Likes</Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 56,
    marginTop: 20,
    height: 75,
    backgroundColor:"rgb(250,250,250)",
    borderBottomColor: "rgb(233,233,233)",
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: "center",
    alignItems: "center"
  },
  userBar: {
    width: 100 + "%",
    height: config.styleConstants.rowHeight,
    backgroundColor: "rgb(255,255,255)",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between"
  },
  userPic: {
    height: 40,
    width: 40,
    borderRadius: 20
  },
  iconBar: {
    height: config.styleConstants.rowHeight,
    width: 100 + "%",
    borderColor: "rgb(233,233,233)",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginHorizontal: 5
  }

})
export default Post;
