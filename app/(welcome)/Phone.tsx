import {
  View,
  Text,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { ArrowDown2, More } from 'iconsax-react-native';
import Colors from '@/constants/Colors';

const Phone = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='padding' style={{ padding: 20, flex: 1 }}>
        {/* Header and menu */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text
            style={{
              color: Colors.teal,
              fontWeight: '600',
              fontSize: 20,
              flex: 1,
              textAlign: 'center',
            }}
          >
            Enter your phone number
          </Text>
          <Menu>
            <MenuTrigger>
              <More
                size={24}
                color='black'
                variant='Broken'
                style={{ transform: [{ rotate: '90deg' }] }}
              />
            </MenuTrigger>
            <MenuOptions optionsContainerStyle={{ paddingVertical: 10 }}>
              <MenuOption text='Link as companion device' />
              <MenuOption text='Help' />
            </MenuOptions>
          </Menu>
        </View>

        {/* Disclaimer */}
        <View style={{ marginTop: 30 }}>
          <Text style={{ fontSize: 15, textAlign: 'center' }}>
            WhatsApp will need to verify your phone number. Carrier charges may
            apply. <Text style={{ color: Colors.blue }}>What's my number?</Text>
          </Text>
        </View>

        {/* Phone input */}
        <View
          style={{
            marginTop: 40,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: Colors.teal,
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Text style={{ flex: 1, textAlign: 'center', fontSize: 16 }}>
                Ghana
              </Text>
              <ArrowDown2 size='24' color={Colors.teal} variant='Bold' />
            </View>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', marginTop: 15, gap: 20 }}>
            <View
              style={{
                flex: 1,
                borderBottomWidth: 1,
                borderColor: Colors.teal,
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}
            >
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 16,
                  color: Colors.gray,
                }}
              >
                +
              </Text>
              <TextInput
                placeholder=''
                style={{ flex: 1, fontSize: 16 }}
                keyboardType='number-pad'
                enterKeyHint='done'
                // cursorColor={'red'}
              />
            </View>
            <View
              style={{
                flex: 4,
                marginLeft: 10,
                borderBottomWidth: 1,
                borderColor: Colors.teal,
              }}
            >
              <TextInput
                placeholder='Phone number'
                style={{ flex: 1, fontSize: 16 }}
                keyboardType='number-pad'
                enterKeyHint='done'
                // cursorColor={'red'}
              />
            </View>
          </View>
        </View>

        {/* Next button */}
        <TouchableOpacity
          style={{
            backgroundColor: Colors.teal,
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 100,
            alignSelf: 'center',
            marginTop: 'auto',
          }}
        >
          <Text
            style={{
              color: 'white',
              textAlign: 'center',
              fontSize: 16,
              fontWeight: '500',
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Phone;
