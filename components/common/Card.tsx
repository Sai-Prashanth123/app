import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface CardProps {
  children: React.ReactNode;
  style?: ViewStyle;
  elevation?: 'sm' | 'md' | 'lg';
}

export default function Card({ 
  children, 
  style, 
  elevation = 'md' 
}: CardProps) {
  const shadowStyle = () => {
    switch (elevation) {
      case 'sm':
        return Theme.shadows.sm;
      case 'lg':
        return Theme.shadows.lg;
      case 'md':
      default:
        return Theme.shadows.md;
    }
  };

  return (
    <View style={[styles.card, shadowStyle(), style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.md,
    marginVertical: Theme.spacing.sm,
  },
});