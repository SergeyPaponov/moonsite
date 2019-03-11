import React from 'react';
import { TouchableOpacity, Text, View, Image, Linking } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Card from './Card';
import CardSection from './CardSection';

const ShowExtendedDetail = ({show}) => {

    const { id, rating, name, image, language, genres, schedule } = show;
    const {
        titleStyle,
        thumbnailContentStyle,
        textStyle,
        imageStyle,
        ratingViewStyle
    } = styles;

  //  const onCardPress = () =>{
  //    Actions.showList();
  //  }

    return(
        <Card>
            <CardSection>
                <Image
                    style={ imageStyle }
                    source={{ uri: show.image.medium }}
                />
            </CardSection>

            <CardSection>
                <View style={ titleStyle }>
                   <Text style={ textStyle }>{show.name}</Text>
                </View>
            </CardSection>

            <CardSection>
              <View style={ ratingViewStyle }>
                <Text style={ thumbnailContentStyle }>Rating:{'            '}{show.rating.average}</Text>
                <Text style={ thumbnailContentStyle }>Language:{'      '}{show.language}</Text>
                <Text style={ thumbnailContentStyle }>Genres:{'           '}{show.genres[0]}</Text>
                <Text style={ thumbnailContentStyle }>{'                         '}{show.genres[1]}</Text>
                <Text style={ thumbnailContentStyle }>{'                         '}{show.genres[2]}</Text>
                <Text style={ thumbnailContentStyle }>Schedule:{'       '}Time - {show.schedule.time}</Text>
                <Text style={ thumbnailContentStyle }>{'                         '}Days - {show.schedule.days}</Text>
              </View>
            </CardSection>
        </Card>
    );
};

const styles = {

    titleStyle:{
      justifyContent: 'center',
      alignItems: 'center'
    },
    textStyle:{
      fontSize: 18,
      color: '#000'
    },
    thumbnailContentStyle: {
      fontSize: 18,
      color: '#000'
    },
    imageStyle: {
      marginTop: 20,
      marginBottom: 5,
      marginLeft: 10,
      marginRight: 10,
      height: 200,
      flex: 2,
      width: null
    },
    ratingViewStyle: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
    }
}

export default ShowExtendedDetail;
