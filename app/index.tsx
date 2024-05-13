import { useNavigation, useRouter } from 'expo-router';
import { useLayoutEffect } from 'react';
import { Button, Text, View } from 'react-native';

export default function Index() {
  const navigation = useNavigation();
  const router = useRouter();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Test Screen',
    });
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text>Running my test.</Text>
      <Button
        title='Start App'
        onPress={() => router.push('welcome/Welcome')}
      ></Button>
    </View>
  );
}
