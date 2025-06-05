import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral';
type BadgeSize = 'sm' | 'md' | 'lg';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export default function Badge({
  label,
  variant = 'primary',
  size = 'md',
  style,
  textStyle,
}: BadgeProps) {
  // Get badge container styles based on variant and size
  const getBadgeStyles = () => {
    const baseStyle = [styles.badge];
    
    // Add size styles
    if (size === 'sm') baseStyle.push(styles.badgeSm);
    if (size === 'lg') baseStyle.push(styles.badgeLg);
    
    // Add variant styles
    if (variant === 'primary') baseStyle.push(styles.badgePrimary);
    if (variant === 'secondary') baseStyle.push(styles.badgeSecondary);
    if (variant === 'success') baseStyle.push(styles.badgeSuccess);
    if (variant === 'warning') baseStyle.push(styles.badgeWarning);
    if (variant === 'error') baseStyle.push(styles.badgeError);
    if (variant === 'neutral') baseStyle.push(styles.badgeNeutral);
    
    // Add custom style
    if (style) baseStyle.push(style);
    
    return baseStyle;
  };
  
  // Get text styles based on variant and size
  const getTextStyles = () => {
    const baseStyle = [styles.text];
    
    // Add size styles
    if (size === 'sm') baseStyle.push(styles.textSm);
    if (size === 'lg') baseStyle.push(styles.textLg);
    
    // Add variant styles
    if (variant === 'primary') baseStyle.push(styles.textPrimary);
    if (variant === 'secondary') baseStyle.push(styles.textSecondary);
    if (variant === 'success') baseStyle.push(styles.textSuccess);
    if (variant === 'warning') baseStyle.push(styles.textWarning);
    if (variant === 'error') baseStyle.push(styles.textError);
    if (variant === 'neutral') baseStyle.push(styles.textNeutral);
    
    // Add custom text style
    if (textStyle) baseStyle.push(textStyle);
    
    return baseStyle;
  };
  
  return (
    <View style={getBadgeStyles()}>
      <Text style={getTextStyles()}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    borderRadius: Theme.borderRadius.full,
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.md,
    alignSelf: 'flex-start',
  },
  badgeSm: {
    paddingVertical: 2,
    paddingHorizontal: Theme.spacing.sm,
  },
  badgeLg: {
    paddingVertical: Theme.spacing.sm,
    paddingHorizontal: Theme.spacing.lg,
  },
  badgePrimary: {
    backgroundColor: Colors.primary[100],
  },
  badgeSecondary: {
    backgroundColor: Colors.secondary[100],
  },
  badgeSuccess: {
    backgroundColor: Colors.success[100],
  },
  badgeWarning: {
    backgroundColor: Colors.warning[100],
  },
  badgeError: {
    backgroundColor: Colors.error[100],
  },
  badgeNeutral: {
    backgroundColor: Colors.neutral[100],
  },
  text: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
  },
  textSm: {
    fontSize: Theme.typography.fontSize.xs,
  },
  textLg: {
    fontSize: Theme.typography.fontSize.md,
  },
  textPrimary: {
    color: Colors.primary[700],
  },
  textSecondary: {
    color: Colors.secondary[700],
  },
  textSuccess: {
    color: Colors.success[700],
  },
  textWarning: {
    color: Colors.warning[700],
  },
  textError: {
    color: Colors.error[700],
  },
  textNeutral: {
    color: Colors.neutral[700],
  },
});