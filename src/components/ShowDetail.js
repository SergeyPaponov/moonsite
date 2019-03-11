import React from 'react';
import { TouchableOpacity, Text, View, Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';

const ShowDetail = ({show}) => {

    const { id, rating, name, image, url } = show;
    const {
        thumbnailStyle,
        titleStyle,
        thumbnailContentStyle,
        headerTextStyle,
        imageStyle
    } = styles;

    const onRatingPress = () =>{
      Actions.showExtendedDetails({show});
    }

    return(
        <Card>
            <CardSection>
                <Image
                    style={ imageStyle }
                    source={{ uri: show.image.original }}
                />
            </CardSection>

            <CardSection>
                <View style={ titleStyle }>
                   <Text style={ headerTextStyle }>{show.name}</Text>
                </View>
            </CardSection>

            <CardSection>
              <TouchableOpacity onPress={onRatingPress}>
                <Text style={ headerTextStyle }>Rating: average - {show.rating.average}</Text>
              </TouchableOpacity>
            </CardSection>

        </Card>
    );
};

const styles = {

    titleStyle:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    headerContentStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    headerTextStyle:{
      fontSize: 18,
      textAlign: 'center',
      color: '#000'
    },
    thumbnailStyle: {
      height: 50,
      width:50
    },
    thumbnailContentStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      marginTop: 20,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      height: 300,
      flex: 1,
      width: null
    }
}

export default ShowDetail;
