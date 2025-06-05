import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '@/components/common/Card';
import { Bell, X } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface ReminderCardProps {
  message: string;
  date: string;
  onDismiss: () => void;
}

export default function ReminderCard({
  message,
  date,
  onDismiss,
}: ReminderCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.iconContainer}>
        <Bell size={24} color={Colors.primary[500]} />
      </View>
      
      <View style={styles.contentContainer}>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      
      <TouchableOpacity
        style={styles.dismissButton}
        onPress={onDismiss}
        hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
      >
        <X size={16} color={Colors.neutral[500]} />
      </TouchableOpacity>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[50],
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary[500],
  },
  iconContainer: {
    marginRight: Theme.spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  message: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  date: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
  },
  dismissButton: {
    padding: Theme.spacing.xs,
  },
});