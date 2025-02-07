import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Menu',
        }}
      />
      <Stack.Screen
        name="notification/index"
        options={{
          title: 'Notification',
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: 'Profile',
        }}
      />
    </Stack>
  );
}
