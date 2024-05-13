import { View, Text } from 'react-native';
import React, { useLayoutEffect, useMemo, useState } from 'react';
import { useNavigation } from 'expo-router';
import { RadioGroup } from 'react-native-radio-buttons-group';

const Language = () => {
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'English',
        value: 'option1',
      },
      {
        id: '2',
        label: 'Hausa',
        value: 'option2',
      },
    ],
    []
  );

  const [selectedId, setSelectedId] = useState<string | undefined>('1');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={setSelectedId}
        selectedId={selectedId}
        containerStyle={{
          backgroundColor: 'green',
        }}
        labelStyle={{
          backgroundColor: 'red',
        }}
      />
    </View>
  );
};

export default Language;
