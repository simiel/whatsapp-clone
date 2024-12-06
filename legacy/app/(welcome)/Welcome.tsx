import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { ArrowDown2, Global, More } from "iconsax-react-native";
import Colors from "@/legacy/constants/Colors";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from "react-native-popup-menu";

const Welcome = () => {
  const router = useRouter();

  const openLink = () => {
    Linking.openURL("https://www.whatsapp.com/legal/#terms-of-service");
  };

  const openLanguageModal = () => {
    router.push("Language");
  };

  const goToNextScreen = () => {
    router.push("Phone");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ flex: 1, padding: 20 }}>
        {/* menu and pattern image */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <TouchableOpacity
            style={{
              alignSelf: "flex-end",
              padding: 0,
            }}
          >
            <Menu>
              <MenuTrigger>
                <More
                  size={24}
                  color="black"
                  variant="Broken"
                  style={{ transform: [{ rotate: "90deg" }] }}
                />
              </MenuTrigger>
              <MenuOptions optionsContainerStyle={{ paddingVertical: 10 }}>
                <MenuOption text="Help" />
              </MenuOptions>
            </Menu>
          </TouchableOpacity>
          <View
            style={{
              alignSelf: "center",
              padding: 0,
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Image
              source={require("@/assets/images/green.png")}
              style={{ width: 200, height: 200 }}
            />
          </View>
        </View>

        {/* Info and buttons container */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={{ fontSize: 28, fontWeight: "500" }}>
            Welcome to Whatsapp
          </Text>

          <Text
            style={{
              fontSize: 16,
              marginTop: 15,
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            Read our{" "}
            <Text
              style={{
                color: "blue",
              }}
            >
              Privacy Policy
            </Text>
            . Tap "Agree and continue" to accept the{" "}
            <Text
              style={{
                color: "blue",
              }}
            >
              Terms of Service
            </Text>
            .
          </Text>

          {/* Language button */}
          <TouchableOpacity
            onPress={openLanguageModal}
            style={{
              flexDirection: "row",
              gap: 10,
              backgroundColor: "#F1F1F1",
              padding: 10,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <Global size={24} color="green" />
            <Text style={{ color: "green", fontSize: 16 }}>English</Text>
            <ArrowDown2 size={18} color="green" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={goToNextScreen}
            style={{
              marginTop: "auto",
              backgroundColor: Colors.teal,
              width: "100%",
              padding: 15,
              alignItems: "center",
              borderRadius: 30,
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 16 }}>
              Agree and Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
