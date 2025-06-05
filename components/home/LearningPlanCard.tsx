import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import ProgressBar from '@/components/common/ProgressBar';
import { ChevronRight } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface LearningPlanCardProps {
  title: string;
  description: string;
  progress: number;
  daysLeft: number;
  onPress: () => void;
}

export default function LearningPlanCard({
  title,
  description,
  progress,
  daysLeft,
  onPress,
}: LearningPlanCardProps) {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>{title}</Text>
          <Badge 
            label={`${daysLeft} days left`}
            variant={daysLeft < 3 ? 'warning' : 'primary'}
            size="sm"
          />
        </View>
        
        <Text style={styles.description} numberOfLines={2}>
          {description}
        </Text>
        
        <View style={styles.progressContainer}>
          <ProgressBar 
            progress={progress} 
            showLabel={true}
          />
        </View>
        
        <View style={styles.footer}>
          <Text style={styles.footerText}>Continue learning</Text>
          <ChevronRight size={16} color={Colors.primary[500]} />
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.lg,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    flex: 1,
  },
  description: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[600],
    marginBottom: Theme.spacing.md,
  },
  progressContainer: {
    marginBottom: Theme.spacing.md,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
    marginRight: Theme.spacing.xs,
  },
});