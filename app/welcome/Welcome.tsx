import {
  View,
  Text,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';
import { More } from 'iconsax-react-native';

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'gold' }}>
        {/* menu and pattern image */}
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
            <More size={30} color='black' />
          </TouchableOpacity>

          {/* <Image
            source={require('assets/images/pattern.png')}
            style={{ width: 200, height: 200 }}
          /> */}
        </View>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
