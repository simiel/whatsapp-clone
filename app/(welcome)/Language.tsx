import { View, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { RadioGroup } from 'react-native-radio-buttons-group';
import languages from '@/constants/Languages';
import Colors from '@/constants/Colors';

const Language = () => {
  const radioButtons = useMemo(
    () =>
      languages.map((language, index) => ({
        id: `${index + 1}`,
        label: language.englishName,
        value: language.nativeName,
        color: Colors.teal,
        description: language.nativeName,
        containerStyle: {},
        descriptionStyle: {
          marginLeft: 45,
          marginBottom: 5,
          fontSize: 12,
          color: Colors.gray,
        },
        labelStyle: {
          fontSize: 16,
        },
      })),
    []
  );

  const [selectedId, setSelectedId] = useState<string | undefined>('1');

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView>
        <RadioGroup
          radioButtons={radioButtons}
          onPress={setSelectedId}
          selectedId={selectedId}
          containerStyle={{ alignItems: 'flex-start' }}
        />
      </ScrollView>
    </View>
  );
};

export default Language;
