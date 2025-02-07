import { Platform, SafeAreaView, StatusBar, TouchableOpacity } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useNotification } from "@/context/NotificationContext";
import { router } from "expo-router";

export default function MenuScreen() {
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
                    <ThemedText type="subtitle">Menu Screen</ThemedText>
                    <ThemedText>{expoPushToken}</ThemedText>
                    <ThemedText type="subtitle">Latest notification:</ThemedText>
                    <ThemedText>{notification?.request.content.subtitle}</ThemedText>
                    <ThemedText>
                         {JSON.stringify(notification?.request.content.data, null, 2)}
                    </ThemedText>
                    <TouchableOpacity onPress={() => router.push("/menu/notification")}>
                         <ThemedText type="subtitle">Notification settings</ThemedText>
                    </TouchableOpacity>
               </SafeAreaView>
          </ThemedView>
     );
}


