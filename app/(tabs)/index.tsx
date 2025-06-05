import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import { Search, Bell } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import LearningPlanCard from '@/components/home/LearningPlanCard';
import ReminderCard from '@/components/home/ReminderCard';
import ResourceCard from '@/components/home/ResourceCard';

export default function HomeScreen() {
  const [reminders, setReminders] = useState([
    {
      id: '1',
      message: 'Hey Riya, you haven\'t practiced coding this week!',
      date: 'Today'
    },
    {
      id: '2',
      message: 'Your Python Fundamentals quiz is due tomorrow',
      date: 'Yesterday'
    }
  ]);

  const dismissReminder = (id: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hi, Riya! 👋</Text>
            <Text style={styles.subtitle}>Ready to continue learning?</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Bell size={24} color={Colors.neutral[700]} />
            <View style={styles.notificationBadge} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Input
            placeholder="Search courses, projects..."
            leftIcon={<Search size={20} color={Colors.neutral[500]} />}
            containerStyle={styles.searchInput}
          />
        </View>

        {reminders.length > 0 && (
          <View style={styles.remindersContainer}>
            <Text style={styles.sectionTitle}>Reminders</Text>
            {reminders.map(reminder => (
              <ReminderCard
                key={reminder.id}
                message={reminder.message}
                date={reminder.date}
                onDismiss={() => dismissReminder(reminder.id)}
              />
            ))}
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Learning Plan</Text>
          <LearningPlanCard
            title="Python for Machine Learning"
            description="Master Python fundamentals and ML algorithms with hands-on projects"
            progress={65}
            daysLeft={5}
            onPress={() => {}}
          />
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recommended Resources</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.resourcesScroll}>
            <ResourceCard
              title="Introduction to Python Classes"
              description="Learn object-oriented programming with Python"
              type="video"
              duration="15 mins"
              thumbnail="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onPress={() => {}}
            />
            <ResourceCard
              title="Python Data Structures Cheatsheet"
              description="A comprehensive guide to Python data structures"
              type="pdf"
              duration="5 pages"
              onPress={() => {}}
            />
            <ResourceCard
              title="Machine Learning Basics"
              description="Understanding the fundamentals of ML algorithms"
              type="article"
              duration="10 mins read"
              onPress={() => {}}
            />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Skill Assessment</Text>
          </View>
          <View style={styles.quizContainer}>
            <View style={styles.quizContent}>
              <Text style={styles.quizTitle}>Test your Python knowledge</Text>
              <Text style={styles.quizDescription}>
                Take a quick quiz to assess your current Python skills and get personalized recommendations.
              </Text>
              <Button
                title="Start Quiz"
                onPress={() => {}}
                style={styles.quizButton}
              />
            </View>
            <Image
              source={{ uri: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
              style={styles.quizImage}
            />
          </View>
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
  greeting: {
    fontFamily: Theme.typography.fontFamily.bold,
    fontSize: Theme.typography.fontSize.xxl,
    color: Colors.neutral[900],
  },
  subtitle: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[600],
    marginTop: Theme.spacing.xs,
  },
  notificationButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.sm,
  },
  notificationBadge: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.error[500],
    position: 'absolute',
    top: 12,
    right: 12,
  },
  searchContainer: {
    marginBottom: Theme.spacing.md,
  },
  searchInput: {
    marginBottom: 0,
  },
  remindersContainer: {
    marginBottom: Theme.spacing.lg,
  },
  section: {
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
    marginBottom: Theme.spacing.sm,
  },
  seeAllText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
  },
  resourcesScroll: {
    marginLeft: -Theme.spacing.md,
    paddingLeft: Theme.spacing.md,
  },
  quizContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.primary[50],
    borderRadius: Theme.borderRadius.lg,
    overflow: 'hidden',
    ...Theme.shadows.sm,
  },
  quizContent: {
    flex: 2,
    padding: Theme.spacing.lg,
  },
  quizTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.primary[700],
    marginBottom: Theme.spacing.sm,
  },
  quizDescription: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[700],
    marginBottom: Theme.spacing.lg,
  },
  quizButton: {
    alignSelf: 'flex-start',
  },
  quizImage: {
    flex: 1,
    height: '100%',
  },
});