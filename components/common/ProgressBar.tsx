import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface ProgressBarProps {
  progress: number; // 0 to 100
  height?: number;
  showLabel?: boolean;
  color?: string;
  backgroundColor?: string;
  style?: ViewStyle;
  labelPosition?: 'top' | 'right';
}

export default function ProgressBar({
  progress,
  height = 8,
  showLabel = false,
  color = Colors.primary[500],
  backgroundColor = Colors.neutral[200],
  style,
  labelPosition = 'right',
}: ProgressBarProps) {
  // Ensure progress is between 0 and 100
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  
  return (
    <View style={[styles.container, style]}>
      {showLabel && labelPosition === 'top' && (
        <Text style={styles.topLabel}>{normalizedProgress}%</Text>
      )}
      
      <View style={[styles.track, { height, backgroundColor }]}>
        <View 
          style={[
            styles.progress, 
            { 
              width: `${normalizedProgress}%`,
              height,
              backgroundColor: color 
            }
          ]} 
        />
      </View>
      
      {showLabel && labelPosition === 'right' && (
        <Text style={styles.rightLabel}>{normalizedProgress}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: Theme.spacing.sm,
  },
  track: {
    borderRadius: Theme.borderRadius.full,
    overflow: 'hidden',
    width: '100%',
  },
  progress: {
    borderRadius: Theme.borderRadius.full,
  },
  topLabel: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[700],
    marginBottom: Theme.spacing.xs,
  },
  rightLabel: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[700],
    marginLeft: Theme.spacing.sm,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});