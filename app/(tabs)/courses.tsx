import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Search, BookOpen, Filter } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import Input from '@/components/common/Input';
import Badge from '@/components/common/Badge';
import CourseCard from '@/components/courses/CourseCard';

export default function CoursesScreen() {
  const categories = [
    'All',
    'Programming',
    'Data Science',
    'Web Dev',
    'Mobile Dev',
    'DevOps'
  ];

  const courses = [
    {
      id: '1',
      title: 'Python for Beginners',
      description: 'Learn Python programming from scratch with hands-on exercises and projects.',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 75,
      difficulty: 'beginner',
      estimatedTime: '12 hours'
    },
    {
      id: '2',
      title: 'Data Structures & Algorithms',
      description: 'Master key CS concepts with practical implementations in Python and Java.',
      thumbnail: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 30,
      difficulty: 'intermediate',
      estimatedTime: '24 hours'
    },
    {
      id: '3',
      title: 'Machine Learning Fundamentals',
      description: 'Understand core ML concepts and implement various algorithms from scratch.',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      progress: 15,
      difficulty: 'advanced',
      estimatedTime: '30 hours'
    }
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Courses</Text>
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Input
            placeholder="Search courses..."
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

        <View style={styles.inProgressSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>In Progress</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          {courses.filter(course => course.progress > 0).map(course => (
            <CourseCard
              key={course.id}
              title={course.title}
              description={course.description}
              thumbnail={course.thumbnail}
              progress={course.progress}
              difficulty={course.difficulty as any}
              estimatedTime={course.estimatedTime}
              onPress={() => {}}
            />
          ))}
        </View>

        <View style={styles.recommendedSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended for You</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.featuredCourse}>
            <CourseCard
              title="Web Development Bootcamp"
              description="Comprehensive course covering HTML, CSS, JavaScript, React, Node.js and more!"
              thumbnail="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              progress={0}
              difficulty="intermediate"
              estimatedTime="48 hours"
              onPress={() => {}}
            />
          </View>

          <View style={styles.popularCoursesHeader}>
            <BookOpen size={20} color={Colors.primary[500]} />
            <Text style={styles.popularCoursesTitle}>Popular Courses</Text>
          </View>

          <CourseCard
            title="Git & GitHub - Complete Guide"
            description="Master version control with Git and collaborate effectively with GitHub."
            thumbnail="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            progress={0}
            difficulty="beginner"
            estimatedTime="6 hours"
            onPress={() => {}}
          />
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
  inProgressSection: {
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
  featuredCourse: {
    marginBottom: Theme.spacing.lg,
  },
  popularCoursesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  popularCoursesTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.primary[500],
    marginLeft: Theme.spacing.xs,
  },
});