import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import { ArrowDown2, Global, More } from "iconsax-react-native";
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
    // router.push("Language");
  };

  // const goToNextScreen = () => {
  //   router.push("/verify/phone");
  // };

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
              <MenuOptions
                optionsContainerStyle={{
                  paddingVertical: 10,
                }}
              >
                <MenuOption text="Help" />
              </MenuOptions>
            </Menu>
          </TouchableOpacity>
          <View className="p-0 flex-1 justify-center">
            <Image
              source={require("@/assets/images/fruit-pattern.jpg")}
              className="w-64 h-64 rounded-full"
            />
          </View>
        </View>

        {/* Info and buttons container */}
        <View className="flex-1 items-center">
          <Text className="text-2xl font-semibold">Welcome to Whatsapp</Text>

          <Text className="text-lg my-4 text-center">
            Read our <Text className="text-[blue]">Privacy Policy</Text>. Tap
            "Agree and continue" to accept the{" "}
            <Text className="text-[blue]">Terms of Service</Text>.
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
            <Text className="text-green-900 text-lg">English</Text>
            <ArrowDown2 size={18} color="green" />
          </TouchableOpacity>

          <Link
            href={"/(verify)/phone"}
            replace
            className="mt-auto bg-teal-800 w-full py-4 rounded-[30px]"
            asChild
          >
            <Text className="text-white text-lg font-semibold text-center">
              Agree and Continue
            </Text>
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Welcome;
