import React, { useState } from 'react'
import { Image, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../../constants'
import { categories } from '../categories'

const Categories = () => {
  const [active, setActive] = useState<number | null>(null)

  return (
    <View style={{ paddingTop: 60 }}>
      <Text style={{ fontSize: SIZES.h1, fontWeight: 'bold', color: COLORS.white }}>Hey,</Text>
      <Text style={{ fontSize: SIZES.h1, color: COLORS.white }}>what's up</Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 20
        }}
      >
        {categories.map((cat, i) => (
          <View
            key={`category ${i}`}
            style={{
              width: '30%',
              marginBottom: 20,
              /* backgroundColor: active === i ? COLORS.secondary : COLORS.grey, */
            }}
          >
            <TouchableHighlight
              underlayColor={COLORS.secondary}
              onPress={() => setActive(i)}
              style={{
                borderRadius: SIZES.radius,
                justifyContent: 'center',
                paddingHorizontal: 5,
                height: 110,
                backgroundColor: COLORS.grey
              }}
            >
              <View
                style={{
                  alignItems: 'center'
                }}
              >
                <Image
                  source={{ uri: cat.image }}
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
                  {cat.name}
                </Text>
              </View>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Categories
