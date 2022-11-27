import React from "react";
import { Icon, ScreenContainer, Touchable, withTheme } from "@draftbit/ui";
import { useNavigation } from "@react-navigation/native";
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import { Fetch } from "react-request";
const AvailableRidesScreen = (props) => {
  const Navigation = useNavigation();
  const { theme } = props;
  return (
    <ScreenContainer hasSafeArea={true} scrollable={false}>
      <View
        style={styles.Viewfd}
        accessible={true}
        importantForAccessibility="auto"
        hitSlop={{}}
        pointerEvents="auto"
      >
        <TouchableOpacity
          onPress={() => Navigation.navigate("HomeScreen")}
          style={{ position: "absolute", top: 10, left: 0 }}
        >
          <Image
            style={{
              height: 20,
              width: 20,
            }}
            source={require("../assets/back.png")}
          />
        </TouchableOpacity>
        <Text
          style={StyleSheet.flatten([
            styles.Text_2S,
            theme.typography.headline4,
            { color: theme.colors.strong },
          ])}
        >
          Available Rides to your Institution
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.ScrollViewoi}
        showsHorizontalScrollIndicator={true}
        showsVerticalScrollIndicator={true}
        bounces={true}
      >
        <Fetch
          url={`https://example-data.draftbit.com/authors?_limit=10`}
          headers={{
            Accept: "application/json",
            "Content-Type": "application/json",
          }}
        >
          {({ loading, error, data, refetch }) => {
            if (loading) {
              return null;
            }
            if (error) {
              return null;
            }
            if (!data) {
              return null;
            }
            return (
              <FlatList
                renderItem={({ item }) => (
                  <View
                    style={StyleSheet.flatten([
                      styles.Viewjf,
                      {
                        backgroundColor: theme.colors.surface,
                        borderRadius: theme.borderRadius.global,
                      },
                    ])}
                    accessible={true}
                    importantForAccessibility="auto"
                    hitSlop={{}}
                    pointerEvents="auto"
                  >
                    <View
                      style={StyleSheet.flatten([
                        styles.ViewTJ,
                        { borderRadius: theme.borderRadius.button },
                      ])}
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <ImageBackground
                        style={styles.ImageBackgroundwJ}
                        resizeMode="cover"
                        source={{ uri: item["imgUrl"] }}
                      />
                    </View>
                    <View
                      style={styles.View_6N}
                      accessible={true}
                      importantForAccessibility="auto"
                      hitSlop={{}}
                      pointerEvents="auto"
                    >
                      <View
                        accessible={true}
                        importantForAccessibility="auto"
                        hitSlop={{}}
                        pointerEvents="auto"
                      >
                        <Text
                          style={StyleSheet.flatten([
                            styles.TexttW,
                            theme.typography.custom51,
                          ])}
                          adjustsFontSizeToFit={false}
                          numberOfLines={2}
                        >
                          {item && item["person"]}
                        </Text>
                        <Text style={{ color: theme.colors.strong }}>
                          Travelling From: Travelling To: Fare Requested:
                        </Text>
                      </View>
                      <Touchable style={styles.TouchableoS}>
                        <View
                          style={styles.ViewTh}
                          accessible={true}
                          importantForAccessibility="auto"
                          hitSlop={{}}
                          pointerEvents="auto"
                        >
                          <Icon
                            color={theme.colors.strong}
                            size={24}
                            name="FontAwesome/user-circle"
                          />
                        </View>
                      </Touchable>
                    </View>
                  </View>
                )}
                numColumns={1}
                data={data}
              />
            );
          }}
        </Fetch>
      </ScrollView>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  Viewjf: {
    flexDirection: "row",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    marginTop: 16,
  },
  Viewfd: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  ViewTJ: {
    width: 140,
    height: 140,
    overflow: "hidden",
  },
  ViewTh: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  TexttW: {
    width: "100%",
    textAlign: "left",
    marginBottom: 4,
  },
  ImageBackgroundwJ: {
    width: 140,
    height: 140,
  },
  Text_2S: {
    textAlign: "center",
  },
  ScrollViewoi: {
    marginLeft: 16,
    marginRight: 16,
  },
  View_6N: {
    alignSelf: "flex-start",
    justifyContent: "space-between",
    flexGrow: 1,
    flexShrink: 1,
    marginLeft: 16,
  },
  TouchableoS: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
export default withTheme(AvailableRidesScreen);
