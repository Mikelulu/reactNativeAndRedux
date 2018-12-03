import React from 'react'
import { Text, View, Image, Linking } from 'react-native'; 
import Card from './Card';
import CardSection from './CardSection'
import Button from './Button'

const AlbumDetail = ( {album} ) => {
    const { title, artist, thumbnail_image, image, url } = album; 
    const { headerContentStyle, thumbnailStyle, thumbnailContainerStyle, headerTextStyle, imageStyle } = styles; 

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle} >
                    {/* have to define and pass in an image style with dimenstions or the image won't display */}
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle} >
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={imageStyle} source={{ uri: image }} />
            </CardSection>
            <CardSection>
                {/* sending a prop to the button  */}
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now!
                </Button>
            </CardSection>
        </Card>
    )
}; 

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    }, 

    headerTextStyle: {
        fontSize: 18, 
        fontWeight: 'bold'
    },

    imageStyle: {
        height: 300, 
        // this does something to make the image 
        // full width somehow 
        flex: 1, 
        width: null 
    },

    thumbnailStyle: {
        height: 50, 
        width: 50
    }, 

    thumbnailContainerStyle: {
        justifyContent: 'center', 
        alignItems: 'center',
        marginLeft: 10, 
        marginRight: 10
    }
}

export default AlbumDetail
