import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name= "journal" options={{ title: 'Journal'}} />
      <Tabs.Screen name= "timeline" options = {{ title: 'Arcus' }} />
      <Tabs.Screen name= "pictures" options={{ title: 'Memories'}} />
      <Tabs.Screen name= "menu" options={{ title: 'Menu' }} />
      <Tabs.Screen name= "aichat" options={{ title: 'AI Assistance' }} />
    </Tabs>
  );
}