import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  SafeAreaView,
  TouchableOpacity,
  Image 
} from 'react-native';
import { Settings, Award, Clock, Calendar, BookOpen } from 'lucide-react-native';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import Button from '@/components/common/Button';
import SkillProgressCard from '@/components/profile/SkillProgressCard';
import StatCard from '@/components/profile/StatCard';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.settingsButton}>
            <Settings size={20} color={Colors.neutral[700]} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image
              source={{ uri: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" }}
              style={styles.profileImage}
            />
            <View style={styles.profileInfo}>
              <Text style={styles.profileName}>Riya Sharma</Text>
              <Text style={styles.profileEmail}>riya.sharma@example.com</Text>
              <View style={styles.profileBadge}>
                <Award size={14} color={Colors.primary[500]} />
                <Text style={styles.profileBadgeText}>ML Enthusiast</Text>
              </View>
            </View>
          </View>
          
          <View style={styles.profileActions}>
            <Button
              title="Edit Profile"
              variant="outline"
              size="sm"
              onPress={() => {}}
              style={styles.editButton}
            />
            <Button
              title="View Progress"
              size="sm"
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.statsSection}>
          <View style={styles.statsRow}>
            <StatCard
              title="Courses Completed"
              value={8}
              icon={<BookOpen size={24} />}
              color={Colors.primary[500]}
            />
            <StatCard
              title="Projects Completed"
              value={5}
              icon={<Award size={24} />}
              color={Colors.secondary[500]}
            />
          </View>
          
          <View style={styles.statsRow}>
            <StatCard
              title="Hours Studied"
              value={87}
              icon={<Clock size={24} />}
              color={Colors.success[500]}
            />
            <StatCard
              title="Learning Days"
              value={42}
              icon={<Calendar size={24} />}
              color={Colors.accent[500]}
            />
          </View>
        </View>

        <View style={styles.skillsSection}>
          <Text style={styles.sectionTitle}>Skills Progress</Text>
          
          <SkillProgressCard
            skillName="Python"
            progress={85}
            level="intermediate"
            lastActivity="2 days ago"
          />
          
          <SkillProgressCard
            skillName="Machine Learning"
            progress={60}
            level="intermediate"
            lastActivity="5 days ago"
          />
          
          <SkillProgressCard
            skillName="Data Analysis"
            progress={75}
            level="intermediate"
            lastActivity="1 week ago"
          />
          
          <SkillProgressCard
            skillName="Web Development"
            progress={40}
            level="beginner"
            lastActivity="3 weeks ago"
          />
        </View>

        <View style={styles.certificatesSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Certificates</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.certificateCard}>
            <View style={styles.certificateHeader}>
              <Award size={24} color={Colors.primary[500]} />
              <Text style={styles.certificateTitle}>Python for Data Science</Text>
            </View>
            <Text style={styles.certificateIssuer}>Issued by: DataCamp</Text>
            <Text style={styles.certificateDate}>Earned: June 15, 2023</Text>
            <TouchableOpacity style={styles.viewCertificateButton}>
              <Text style={styles.viewCertificateText}>View Certificate</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.certificateCard}>
            <View style={styles.certificateHeader}>
              <Award size={24} color={Colors.primary[500]} />
              <Text style={styles.certificateTitle}>Machine Learning Fundamentals</Text>
            </View>
            <Text style={styles.certificateIssuer}>Issued by: Coursera</Text>
            <Text style={styles.certificateDate}>Earned: August 22, 2023</Text>
            <TouchableOpacity style={styles.viewCertificateButton}>
              <Text style={styles.viewCertificateText}>View Certificate</Text>
            </TouchableOpacity>
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
  title: {
    fontFamily: Theme.typography.fontFamily.bold,
    fontSize: Theme.typography.fontSize.xxl,
    color: Colors.neutral[900],
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    ...Theme.shadows.sm,
  },
  profileSection: {
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.lg,
    ...Theme.shadows.md,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: Theme.spacing.md,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: Theme.spacing.md,
  },
  profileInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  profileName: {
    fontFamily: Theme.typography.fontFamily.bold,
    fontSize: Theme.typography.fontSize.xl,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.xs,
  },
  profileEmail: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[600],
    marginBottom: Theme.spacing.sm,
  },
  profileBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary[50],
    paddingVertical: Theme.spacing.xs,
    paddingHorizontal: Theme.spacing.sm,
    borderRadius: Theme.borderRadius.full,
    alignSelf: 'flex-start',
  },
  profileBadgeText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[700],
    marginLeft: Theme.spacing.xs,
  },
  profileActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: Theme.spacing.sm,
  },
  editButton: {
    backgroundColor: Colors.white,
  },
  statsSection: {
    marginBottom: Theme.spacing.lg,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
  },
  skillsSection: {
    marginBottom: Theme.spacing.lg,
  },
  sectionTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.md,
  },
  certificatesSection: {
    marginBottom: Theme.spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Theme.spacing.md,
  },
  seeAllText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
  },
  certificateCard: {
    backgroundColor: Colors.white,
    borderRadius: Theme.borderRadius.lg,
    padding: Theme.spacing.md,
    marginBottom: Theme.spacing.md,
    ...Theme.shadows.sm,
  },
  certificateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Theme.spacing.sm,
  },
  certificateTitle: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[900],
    marginLeft: Theme.spacing.sm,
  },
  certificateIssuer: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[700],
    marginBottom: Theme.spacing.xs,
  },
  certificateDate: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.neutral[600],
    marginBottom: Theme.spacing.md,
  },
  viewCertificateButton: {
    alignSelf: 'flex-end',
  },
  viewCertificateText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.sm,
    color: Colors.primary[500],
  },
});