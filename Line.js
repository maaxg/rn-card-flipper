import React from 'react'
import {View} from 'react-native'

const Line = ({rotation, alignSelf, width}) =>{
    return(
        <View style={{
            borderWidth: 0.5,
            borderColor: 'red',
            transform: [{rotate: rotation}],
            width: width,
            height: 80,
            alignSelf: alignSelf,
        }}/>
    )
}
export default Line