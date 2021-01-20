import React, { useEffect, useState } from 'react'
import { View, TouchableOpacity, Text, Image, Dimensions, Animated, Easing } from 'react-native'
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import Line from './Line'
const App = ({ }) => {
  var turnValue = new Animated.Value(0)
  var turnSecondValue = new Animated.Value(0)

  const [turn, setTurn] = useState('0deg')
  const [turn_second, setTurnSecond] = useState('0deg')
  const [showFace, setShowFace] = useState(false)
  const [showSecondFace, setShowSecondFace] = useState(false)
  const [cardUri, setCardUri] = useState("")
  const [secondCardUri, setSecondCardUri] = useState("")
  async function getCard(value) {
    try {
      var url = "https://deckofcardsapi.com/api/deck/kzrsddfawusu/draw/?count=1"
      await axios.get(url)
        .then(resp => {
          if (value === 'first') {
            setCardUri(resp.data.cards[0].image)
          } else {
            setSecondCardUri(resp.data.cards[0].image)
          }
        })
    } catch (err) {
      console.log('*----')
      if (err.response.status === 404) {
        url = "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
        await axios.get(url)
          .then(resp => {
            console.log(resp.data)
            if (value === 'first') {
              setCardUri(resp.data.cards[0].image)
            } else {
              setSecondCardUri(resp.data.cards[0].image)
            }
          })
      } else {
        console.log(err.response)
      }
    }
  }


  function animateMe(value) {
    if (value === 'first') {
      Animated.timing(
        turnValue,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start()
      setTurn(turnValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      }))
      if (showFace) {
        setShowFace(false)
      } else {
        setShowFace(true)
      }
    } else {
      Animated.timing(
        turnSecondValue,
        {
          toValue: 1,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: true
        }
      ).start()


      setTurnSecond(turnSecondValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
      }))
      if (showSecondFace) {
        setShowSecondFace(false)
      } else {
        setShowSecondFace(true)
      }

    }
  }
  return (
    <View style={styles.container}>
      {/* CARD 1 */}
      <TouchableOpacity onPress={() => {
        animateMe('first')
        getCard('first')

      }} style={styles.cardWrapper}>
        {
          !showFace
            ?
            < Animated.View style={[styles.card, { transform: [{ rotateY: turn }] }]}>
              <Line rotation={'120deg'} alignSelf={'center'} width={400} />
              <Line rotation={'80deg'} alignSelf={'center'} width={400} />
              <Line rotation={'50deg'} alignSelf={'center'} width={400} />
            </Animated.View>
            :
            < Animated.View style={[styles.face, { transform: [{ rotateY: turn }] }]}>
              <Image source={{ uri: cardUri }} style={styles.cardImage} />

            </Animated.View>

        }
      </TouchableOpacity>
      {/* CARD 2 */}
      <TouchableOpacity onPress={() => {
        animateMe('second')
        getCard('second')
      }} style={styles.cardWrapper}>
        {
          !showSecondFace
            ?
            < Animated.View style={[styles.card, { transform: [{ rotateY: turn_second }] }]}>
              <Line rotation={'120deg'} alignSelf={'center'} width={400} />
              <Line rotation={'80deg'} alignSelf={'center'} width={400} />
              <Line rotation={'50deg'} alignSelf={'center'} width={400} />
            </Animated.View>
            :
            < Animated.View style={[styles.face, { transform: [{ rotateY: turn_second }] }]}>
              <Image source={{ uri: secondCardUri }} style={styles.cardImage} />

            </Animated.View>
        }
      </TouchableOpacity>

    </View >
  )
}

export default App