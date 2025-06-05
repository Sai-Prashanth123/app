import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react-native';

interface RoadmapStepProps {
  title: string;
  description: string;
  isCompleted: boolean;
  isActive?: boolean;
  isLast?: boolean;
  onPress: () => void;
}

export default function RoadmapStep({
  title,
  description,
  isCompleted,
  isActive = false,
  isLast = false,
  onPress,
}: RoadmapStepProps) {
  return (
    <View style={styles.container}>
      <View style={styles.timeline}>
        {isCompleted ? (
          <CheckCircle size={24} color={Colors.success[500]} />
        ) : (
          <Circle 
            size={24} 
            color={isActive ? Colors.primary[500] : Colors.neutral[300]} 
            strokeWidth={isActive ? 3 : 2}
          />
        )}
        {!isLast && (
          <View 
            style={[
              styles.line,
              isCompleted ? styles.completedLine : null,
              isActive ? styles.activeLine : null
            ]} 
          />
        )}
      </View>
      
      <TouchableOpacity 
        style={[
          styles.contentContainer,
          isActive ? styles.activeContent : null
        ]} 
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.textContainer}>
          <Text style={[
            styles.title,
            isCompleted ? styles.completedTitle : null,
            isActive ? styles.activeTitle : null
          ]}>
            {title}
          </Text>
          
          <Text style={[
            styles.description,
            isCompleted ? styles.completedDescription : null
          ]}>
            {description}
          </Text>
        </View>
        
        <ChevronRight 
          size={16} 
          color={
            isActive 
              ? Colors.primary[500] 
              : isCompleted 
                ? Colors.success[500] 
                : Colors.neutral[400]
          } 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: Theme.spacing.md,
  },
  timeline: {
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  line: {
    width: 2,
    flex: 1,
    backgroundColor: Colors.neutral[300],
    marginTop: Theme.spacing.xs,
    marginBottom: Theme.spacing.xs,
  },
  completedLine: {
    backgroundColor: Colors.success[500],
  },
  activeLine: {
    backgroundColor: Colors.primary[300],
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Theme.spacing.md,
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.neutral[200],
    ...Theme.shadows.sm,
  },
  activeContent: {
    borderColor: Colors.primary[300],
    backgroundColor: Colors.primary[50],
  },
  textContainer: {
    flex: 1,
    marginRight: Theme.spacing.sm,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  completedTitle: {
    color: Colors.success[700],
  },
  activeTitle: {
    color: Colors.primary[700],
  },
  description: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
  },
  completedDescription: {
    color: Colors.neutral[500],
  },
});