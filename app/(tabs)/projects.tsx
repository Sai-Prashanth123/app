import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Search, Filter, Lightbulb } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import Input from '@/components/common/Input';
import Badge from '@/components/common/Badge';
import ProjectCard from '@/components/projects/ProjectCard';

export default function ProjectsScreen() {
  const categories = [
    'All',
    'Python',
    'Web',
    'Mobile',
    'ML/AI',
    'Data'
  ];

  const projects = [
    {
      id: '1',
      title: 'Personal Portfolio Website',
      description: 'Build a responsive portfolio website using HTML, CSS, and JavaScript to showcase your projects and skills.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      estimatedTime: '10-15 hours',
      difficulty: 'beginner',
      skills: [
        { name: 'HTML', level: 'beginner' },
        { name: 'CSS', level: 'beginner' },
        { name: 'JavaScript', level: 'beginner' }
      ]
    },
    {
      id: '2',
      title: 'Sentiment Analysis App',
      description: 'Develop a machine learning application that analyzes sentiment in text using Python and natural language processing.',
      thumbnail: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      estimatedTime: '20-25 hours',
      difficulty: 'intermediate',
      skills: [
        { name: 'Python', level: 'intermediate' },
        { name: 'NLP', level: 'intermediate' },
        { name: 'ML', level: 'intermediate' },
        { name: 'Data Analysis', level: 'beginner' }
      ]
    },
    {
      id: '3',
      title: 'E-commerce Web App',
      description: 'Create a full-stack e-commerce application with user authentication, product listings, cart functionality, and payment processing.',
      thumbnail: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      estimatedTime: '40-50 hours',
      difficulty: 'advanced',
      skills: [
        { name: 'React', level: 'intermediate' },
        { name: 'Node.js', level: 'intermediate' },
        { name: 'MongoDB', level: 'intermediate' },
        { name: 'API Design', level: 'intermediate' },
        { name: 'Auth', level: 'intermediate' }
      ]
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Projects</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Input
            placeholder="Search projects..."
            leftIcon={<Search size={20} color={Colors.neutral[500]} />}
            containerStyle={styles.searchInput}
          />
        </View>

        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false} 
          style={styles.categoriesContainer}
          contentContainerStyle={styles.categoriesContent}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.categoryButton,
                index === 0 ? styles.activeCategoryButton : null
              ]}
            >
              <Text 
                style={[
                  styles.categoryText,
                  index === 0 ? styles.activeCategoryText : null
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.featuredSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.featuredTitleContainer}>
              <Lightbulb size={20} color={Colors.accent[500]} />
              <Text style={styles.featuredTitle}>Featured Project</Text>
            </View>
            <Badge label="New" variant="accent" size="sm" />
          </View>

          <ProjectCard
            title="Machine Learning Image Classifier"
            description="Build an image classification system using TensorFlow that can identify objects in photos with high accuracy."
            thumbnail="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            estimatedTime="30 hours"
            difficulty="intermediate"
            skills={[
              { name: 'Python', level: 'intermediate' },
              { name: 'TensorFlow', level: 'intermediate' },
              { name: 'CNN', level: 'intermediate' },
              { name: 'Computer Vision', level: 'intermediate' }
            ]}
            onPress={() => {}}
            onStartProject={() => {}}
          />
        </View>

        <View style={styles.recommendedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              estimatedTime={project.estimatedTime}
              difficulty={project.difficulty as any}
              skills={project.skills as any}
              onPress={() => {}}
              onStartProject={() => {}}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.neutral[50],
  },
  container: {
    flex: 1,
    padding: Theme.spacing.md,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Theme.spacing.lg,
    marginBottom: Theme.spacing.md,
  },
  title: {
    fontFamily: Theme.typography.fontFamily.bold,
    fontSize: Theme.typography.fontSize.xxl,
    color: Colors.neutral[900],
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.sm,
  },
  searchContainer: {
    marginBottom: Theme.spacing.md,
  },
  searchInput: {
    marginBottom: 0,
  },
  categoriesContainer: {
    marginBottom: Theme.spacing.lg,
  },
  categoriesContent: {
    paddingRight: Theme.spacing.md,
  },
  categoryButton: {
    paddingVertical: Theme.spacing.sm,
    paddingHorizontal: Theme.spacing.md,
    borderRadius: Theme.borderRadius.full,
    marginRight: Theme.spacing.sm,
    backgroundColor: Colors.white,
    ...Theme.shadows.sm,
  },
  activeCategoryButton: {
    backgroundColor: Colors.primary[500],
  },
  categoryText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[700],
  },
  activeCategoryText: {
    color: Colors.white,
  },
  featuredSection: {
    marginBottom: Theme.spacing.xl,
  },
  recommendedSection: {
    marginBottom: Theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  featuredTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.accent[700],
    marginLeft: Theme.spacing.xs,
  },
  sectionTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
  },
  seeAllText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
  },
});