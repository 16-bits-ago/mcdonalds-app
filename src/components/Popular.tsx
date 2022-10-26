import React, { useState } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { popular } from '../popular'

const Popular = () => {
  const [active, setActive] = useState<number | null>(null)
  return (
    <View style={{ paddingTop: 20 }}>
      <Text
        style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}
      >
        Popular
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 20
        }}
      >
        {popular.map((propduct, i) => (
          <View
            key={`popular ${i}`}
            style={{
              width: '30%',
              marginBottom: 20,
              paddingHorizontal: 5,
              height: 120,
              backgroundColor: active === i ? COLORS.secondary : COLORS.grey,
              borderRadius: SIZES.radius
            }}
          >
            <TouchableHighlight
              /* underlayColor={COLORS.secondary} */
              onPress={() => setActive(i)}
              style={{
                justifyContent: 'center'
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Image
                  source={{ uri: propduct.image }}
                  style={{ width: 40, height: 40 }}
                />
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.white,
                    marginTop: 10,
                    textAlign: 'center'
                  }}
                >
                  {propduct.name}
                </Text>
                <Text
                  style={{
                    fontSize: SIZES.h4,
                    color: COLORS.primary,
                    marginTop: 10,
                    textAlign: 'center'
                  }}
                >
                  {propduct.price}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Popular
