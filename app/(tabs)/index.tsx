import { Platform, SafeAreaView, StatusBar } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNotification } from "@/context/NotificationContext";

export default function HomeScreen() {
  const { expoPushToken, notification, error } = useNotification();
  if (error) {
    return <ThemedText>Error:{error.message}</ThemedText>
  }
  console.log("Latest Notification:", JSON.stringify(notification, null, 2));
  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 10,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 10,
      }}
    >
      <SafeAreaView style={{ flex: 1 }}>
         <ThemedText type="subtitle">Home screen</ThemedText>
      </SafeAreaView>
    </ThemedView>
  );
}


