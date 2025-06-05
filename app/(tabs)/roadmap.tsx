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
import { Compass, Share2 } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import RoadmapStep from '@/components/roadmap/RoadmapStep';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

export default function RoadmapScreen() {
  const [roadmapSteps, setRoadmapSteps] = useState([
    {
      id: '1',
      title: 'Learn Python Fundamentals',
      description: 'Master basic syntax, data types, and control structures',
      isCompleted: true,
      isActive: false,
    },
    {
      id: '2',
      title: 'Data Structures and Algorithms',
      description: 'Learn essential CS concepts and implementations',
      isCompleted: true,
      isActive: false,
    },
    {
      id: '3',
      title: 'Basic Machine Learning Concepts',
      description: 'Understand supervised, unsupervised learning, and evaluation metrics',
      isCompleted: false,
      isActive: true,
    },
    {
      id: '4',
      title: 'Machine Learning Libraries',
      description: 'Learn to use NumPy, Pandas, Scikit-learn, and TensorFlow',
      isCompleted: false,
      isActive: false,
    },
    {
      id: '5',
      title: 'Build Machine Learning Projects',
      description: 'Create portfolio projects to showcase your skills',
      isCompleted: false,
      isActive: false,
    },
  ]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Career Roadmap</Text>
          <TouchableOpacity style={styles.shareButton}>
            <Share2 size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>

        <View style={styles.careerGoalContainer}>
          <Card style={styles.careerGoalCard}>
            <View style={styles.careerGoalHeader}>
              <Compass size={24} color={Colors.primary[500]} />
              <Text style={styles.careerGoalTitle}>Your Career Goal</Text>
            </View>
            <Text style={styles.careerGoalText}>Machine Learning Engineer</Text>
            <Text style={styles.careerGoalDescription}>
              This roadmap is tailored to help you become a Machine Learning Engineer, 
              focusing on the most in-demand skills and knowledge areas.
            </Text>
            <Button 
              title="Update Goal" 
              variant="outline" 
              size="sm" 
              onPress={() => {}}
              style={styles.updateButton}
            />
          </Card>
        </View>

        <View style={styles.timelineContainer}>
          <Text style={styles.sectionTitle}>Your Learning Path</Text>
          
          <View style={styles.timeline}>
            {roadmapSteps.map((step, index) => (
              <RoadmapStep
                key={step.id}
                title={step.title}
                description={step.description}
                isCompleted={step.isCompleted}
                isActive={step.isActive}
                isLast={index === roadmapSteps.length - 1}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Industry Insights</Text>
          
          <Card style={styles.insightCard}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
              style={styles.insightImage}
            />
            <View style={styles.insightContent}>
              <Text style={styles.insightTitle}>ML Engineer Salary Trends</Text>
              <Text style={styles.insightDescription}>
                The average salary for Machine Learning Engineers continues to rise, with 
                entry-level positions starting at $90,000+ in major tech hubs.
              </Text>
              <TouchableOpacity>
                <Text style={styles.readMoreText}>Read more</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Related Career Paths</Text>
          
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.relatedPathsContent}
          >
            <TouchableOpacity style={styles.relatedPathCard}>
              <Text style={styles.relatedPathTitle}>Data Scientist</Text>
              <Text style={styles.relatedPathDescription}>
                Focus on statistical analysis and extracting insights from data
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.relatedPathCard}>
              <Text style={styles.relatedPathTitle}>AI Engineer</Text>
              <Text style={styles.relatedPathDescription}>
                Specialize in artificial intelligence and deep learning systems
              </Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.relatedPathCard}>
              <Text style={styles.relatedPathTitle}>MLOps Engineer</Text>
              <Text style={styles.relatedPathDescription}>
                Focus on deploying and maintaining ML systems in production
              </Text>
            </TouchableOpacity>
          </ScrollView>
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
  shareButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.sm,
  },
  careerGoalContainer: {
    marginBottom: Theme.spacing.xl,
  },
  careerGoalCard: {
    backgroundColor: Colors.primary[50],
    borderLeftWidth: 4,
    borderLeftColor: Colors.primary[500],
  },
  careerGoalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  careerGoalTitle: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.primary[700],
    marginLeft: Theme.spacing.sm,
  },
  careerGoalText: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.xl,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.sm,
  },
  careerGoalDescription: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[700],
    marginBottom: Theme.spacing.md,
  },
  updateButton: {
    alignSelf: 'flex-start',
  },
  timelineContainer: {
    marginBottom: Theme.spacing.xl,
  },
  timeline: {
    paddingTop: Theme.spacing.md,
  },
  sectionTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.md,
  },
  section: {
    marginBottom: Theme.spacing.xl,
  },
  insightCard: {
    padding: 0,
    overflow: 'hidden',
  },
  insightImage: {
    width: '100%',
    height: 160,
  },
  insightContent: {
    padding: Theme.spacing.md,
  },
  insightTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  insightDescription: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[700],
    marginBottom: Theme.spacing.sm,
  },
  readMoreText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
  },
  relatedPathsContent: {
    paddingRight: Theme.spacing.md,
  },
  relatedPathCard: {
    width: 200,
    padding: Theme.spacing.md,
    marginRight: Theme.spacing.md,
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.lg,
    ...Theme.shadows.sm,
  },
  relatedPathTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  relatedPathDescription: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[700],
  },
});