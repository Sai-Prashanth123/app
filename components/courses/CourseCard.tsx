import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import ProgressBar from '@/components/common/ProgressBar';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

interface CourseCardProps {
  title: string;
  description: string;
  thumbnail: string;
  progress: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  onPress: () => void;
}

export default function CourseCard({
  title,
  description,
  thumbnail,
  progress,
  difficulty,
  estimatedTime,
  onPress,
}: CourseCardProps) {
  const getDifficultyVariant = () => {
    switch (difficulty) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'error';
      default:
        return 'neutral';
    }
  };

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Badge 
              label={difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} 
              variant={getDifficultyVariant() as any}
              size="sm"
            />
            <Text style={styles.time}>{estimatedTime}</Text>
          </View>
          
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          
          <Text style={styles.description} numberOfLines={2}>
            {description}
          </Text>
          
          <View style={styles.progressContainer}>
            <ProgressBar progress={progress} />
            <Text style={styles.progressText}>{progress}% Complete</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 0,
    overflow: 'hidden',
  },
  thumbnail: {
    width: '100%',
    height: 160,
  },
  contentContainer: {
    padding: Theme.spacing.md,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.xs,
  },
  time: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.neutral[600],
    marginLeft: Theme.spacing.sm,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  description: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[600],
    marginBottom: Theme.spacing.md,
  },
  progressContainer: {
    marginTop: Theme.spacing.sm,
  },
  progressText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.neutral[600],
    marginTop: Theme.spacing.xs,
    textAlign: 'right',
  },
});