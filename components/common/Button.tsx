import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator,
  ViewStyle,
  TextStyle
} from 'react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  style,
  textStyle,
  icon
}: ButtonProps) {
  // Determine styles based on variant and size
  const getButtonStyles = () => {
    const baseStyle = [styles.button];
    
    // Add size styles
    if (size === 'sm') baseStyle.push(styles.buttonSm);
    if (size === 'lg') baseStyle.push(styles.buttonLg);
    
    // Add variant styles
    if (variant === 'primary') baseStyle.push(styles.buttonPrimary);
    if (variant === 'secondary') baseStyle.push(styles.buttonSecondary);
    if (variant === 'outline') baseStyle.push(styles.buttonOutline);
    if (variant === 'ghost') baseStyle.push(styles.buttonGhost);
    
    // Add disabled style
    if (disabled) baseStyle.push(styles.buttonDisabled);
    
    // Add custom style
    if (style) baseStyle.push(style);
    
    return baseStyle;
  };
  
  const getTextStyles = () => {
    const baseStyle = [styles.text];
    
    // Add size styles
    if (size === 'sm') baseStyle.push(styles.textSm);
    if (size === 'lg') baseStyle.push(styles.textLg);
    
    // Add variant styles
    if (variant === 'primary') baseStyle.push(styles.textPrimary);
    if (variant === 'secondary') baseStyle.push(styles.textSecondary);
    if (variant === 'outline') baseStyle.push(styles.textOutline);
    if (variant === 'ghost') baseStyle.push(styles.textGhost);
    
    // Add disabled style
    if (disabled) baseStyle.push(styles.textDisabled);
    
    // Add custom text style
    if (textStyle) baseStyle.push(textStyle);
    
    return baseStyle;
  };
  
  const getSpinnerColor = () => {
    if (variant === 'primary') return Colors.white;
    if (variant === 'secondary') return Colors.white;
    return Colors.primary[500];
  };
  
  return (
    <TouchableOpacity
      style={getButtonStyles()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator color={getSpinnerColor()} size="small" />
      ) : (
        <>
          {icon && icon}
          <Text style={getTextStyles()}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: Theme.borderRadius.md,
    paddingVertical: Theme.spacing.md,
    paddingHorizontal: Theme.spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: Theme.spacing.sm,
  },
  buttonSm: {
    paddingVertical: Theme.spacing.sm,
    paddingHorizontal: Theme.spacing.md,
  },
  buttonLg: {
    paddingVertical: Theme.spacing.lg,
    paddingHorizontal: Theme.spacing.xl,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary[500],
  },
  buttonSecondary: {
    backgroundColor: Colors.secondary[500],
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary[500],
  },
  buttonGhost: {
    backgroundColor: 'transparent',
  },
  buttonDisabled: {
    backgroundColor: Colors.neutral[300],
    borderColor: Colors.neutral[300],
  },
  text: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    textAlign: 'center',
  },
  textSm: {
    fontSize: Theme.typography.fontSize.sm,
  },
  textLg: {
    fontSize: Theme.typography.fontSize.lg,
  },
  textPrimary: {
    color: Colors.white,
  },
  textSecondary: {
    color: Colors.white,
  },
  textOutline: {
    color: Colors.primary[500],
  },
  textGhost: {
    color: Colors.primary[500],
  },
  textDisabled: {
    color: Colors.neutral[500],
  },
});