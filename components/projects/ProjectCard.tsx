import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import Button from '@/components/common/Button';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import { Clock, BookOpen } from 'lucide-react-native';

interface Skill {
  name: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  estimatedTime: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  skills: Skill[];
  onPress: () => void;
  onStartProject: () => void;
}

export default function ProjectCard({
  title,
  description,
  thumbnail,
  estimatedTime,
  difficulty,
  skills,
  onPress,
  onStartProject,
}: ProjectCardProps) {
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
  
  const renderSkills = () => {
    return skills.slice(0, 3).map((skill, index) => (
      <Badge
        key={index}
        label={skill.name}
        variant="neutral"
        size="sm"
        style={styles.skillBadge}
      />
    ));
  };
  
  return (
    <Card style={styles.card}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
        
        <View style={styles.contentContainer}>
          <View style={styles.headerContainer}>
            <Badge 
              label={difficulty.charAt(0).toUpperCase() + difficulty.slice(1)} 
              variant={getDifficultyVariant() as any}
              size="sm"
            />
            <View style={styles.timeContainer}>
              <Clock size={14} color={Colors.neutral[600]} />
              <Text style={styles.timeText}>{estimatedTime}</Text>
            </View>
          </View>
          
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          
          <Text style={styles.description} numberOfLines={3}>
            {description}
          </Text>
          
          <View style={styles.skillsContainer}>
            {renderSkills()}
            {skills.length > 3 && (
              <Text style={styles.moreSkills}>+{skills.length - 3} more</Text>
            )}
          </View>
          
          <View style={styles.footer}>
            <Button
              title="Start Project"
              onPress={onStartProject}
              size="sm"
              icon={<BookOpen size={16} color={Colors.white} />}
            />
          </View>
        </View>
      </TouchableOpacity>
    </Card>
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
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Theme.spacing.sm,
  },
  timeText: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.neutral[600],
    marginLeft: Theme.spacing.xs,
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
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: Theme.spacing.md,
  },
  skillBadge: {
    marginRight: Theme.spacing.xs,
    marginBottom: Theme.spacing.xs,
  },
  moreSkills: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.neutral[600],
    alignSelf: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});