import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Card from '@/components/common/Card';
import ProgressBar from '@/components/common/ProgressBar';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface SkillProgressCardProps {
  skillName: string;
  progress: number;
  level: 'beginner' | 'intermediate' | 'advanced';
  lastActivity?: string;
}

export default function SkillProgressCard({
  skillName,
  progress,
  level,
  lastActivity,
}: SkillProgressCardProps) {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return Colors.success[500];
      case 'intermediate':
        return Colors.warning[500];
      case 'advanced':
        return Colors.error[500];
      default:
        return Colors.neutral[500];
    }
  };

  const getLevelText = () => {
    return level.charAt(0).toUpperCase() + level.slice(1);
  };
  
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.skillName}>{skillName}</Text>
        <View style={[styles.levelIndicator, { backgroundColor: getLevelColor() }]}>
          <Text style={styles.levelText}>{getLevelText()}</Text>
        </View>
      </View>
      
      <View style={styles.progressContainer}>
        <ProgressBar 
          progress={progress} 
          showLabel={true}
          color={getLevelColor()}
        />
      </View>
      
      {lastActivity && (
        <Text style={styles.lastActivity}>
          Last activity: {lastActivity}
        </Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  skillName: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
  },
  levelIndicator: {
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.full,
  },
  levelText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.white,
  },
  progressContainer: {
    marginBottom: Theme.spacing.sm,
  },
  lastActivity: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
    marginTop: Theme.spacing.xs,
  },
});