import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Card from '@/components/common/Card';
import Badge from '@/components/common/Badge';
import { FileText, Video, ExternalLink } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';

type ResourceType = 'video' | 'pdf' | 'article';

interface ResourceCardProps {
  title: string;
  description: string;
  type: ResourceType;
  duration: string;
  thumbnail?: string;
  onPress: () => void;
}

export default function ResourceCard({
  title,
  description,
  type,
  duration,
  thumbnail,
  onPress,
}: ResourceCardProps) {
  const renderIcon = () => {
    switch (type) {
      case 'video':
        return <Video size={24} color={Colors.primary[500]} />;
      case 'pdf':
        return <FileText size={24} color={Colors.error[500]} />;
      case 'article':
        return <ExternalLink size={24} color={Colors.secondary[500]} />;
      default:
        return null;
    }
  };
  
  const getTypeLabel = () => {
    switch (type) {
      case 'video':
        return 'Video';
      case 'pdf':
        return 'PDF';
      case 'article':
        return 'Article';
      default:
        return '';
    }
  };
  
  const getTypeVariant = () => {
    switch (type) {
      case 'video':
        return 'primary';
      case 'pdf':
        return 'error';
      case 'article':
        return 'secondary';
      default:
        return 'neutral';
    }
  };
  
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Card style={styles.card}>
        <View style={styles.container}>
          {thumbnail ? (
            <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
          ) : (
            <View style={styles.iconContainer}>
              {renderIcon()}
            </View>
          )}
          
          <View style={styles.contentContainer}>
            <View style={styles.headerContainer}>
              <Badge 
                label={getTypeLabel()} 
                variant={getTypeVariant() as any}
                size="sm"
              />
              <Text style={styles.duration}>{duration}</Text>
            </View>
            
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            
            <Text style={styles.description} numberOfLines={2}>
              {description}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.md,
  },
  container: {
    flexDirection: 'row',
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: Theme.borderRadius.md,
    marginRight: Theme.spacing.md,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: Theme.borderRadius.md,
    backgroundColor: Colors.neutral[100],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Theme.spacing.md,
  },
  contentContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.xs,
  },
  duration: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.xs,
    color: Colors.neutral[600],
    marginLeft: Theme.spacing.sm,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  description: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
  },
});