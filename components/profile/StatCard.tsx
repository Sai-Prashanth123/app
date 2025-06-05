import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '@/components/common/Card';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color?: string;
}

export default function StatCard({
  title,
  value,
  icon,
  color = Colors.primary[500],
}: StatCardProps) {
  return (
    <Card style={styles.card}>
      <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
        {React.cloneElement(icon as React.ReactElement, { color })}
      </View>
      
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.title}>{title}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.md,
    alignItems: 'center',
    flex: 1,
    minWidth: 120,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: Theme.borderRadius.full,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  value: {
    fontFamily: Theme.typography.fontFamily.bold,
    fontSize: Theme.typography.fontSize.xl,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
    textAlign: 'center',
  },
});