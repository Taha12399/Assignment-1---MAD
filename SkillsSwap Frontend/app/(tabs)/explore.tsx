import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy user data
const user = {
  name: 'Your Name',
  email: 'test@student.com',
  skills: ['React Native', 'Guitar', 'Photography', 'Python'],
  bio: 'A passionate developer and musician looking to share my skills with the world. I love teaching and learning new things!',
  rating: 4.8,
  totalSessions: 24,
  completedSessions: 18,
};

const userOffers = [
  {
    id: 1,
    title: 'React Native Development',
    category: 'Programming',
    status: 'Active',
    bookings: 3,
  },
  {
    id: 2,
    title: 'Guitar Lessons',
    category: 'Music',
    status: 'Active',
    bookings: 2,
  },
  {
    id: 3,
    title: 'Photography Basics',
    category: 'Photography',
    status: 'Completed',
    bookings: 5,
  },
];

const userBookings = [
  {
    id: 1,
    title: 'Python Programming',
    tutor: 'Ali Ahmed',
    date: '2024-01-15',
    status: 'Upcoming',
  },
  {
    id: 2,
    title: 'Digital Art',
    tutor: 'Ahmed Hassan',
    date: '2024-01-10',
    status: 'Completed',
  },
];

export default function ProfileScreen() {
  const handleEditProfile = () => {
    // Navigate to edit profile screen
    console.log('Edit profile');
  };

  const handleLogout = () => {
    router.replace('/auth/login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>{user.name.charAt(0)}</Text>
          </View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userEmail}>{user.email}</Text>
          <View style={styles.ratingContainer}>
            <IconSymbol name="star.fill" size={16} color="#f39c12" />
            <Text style={styles.rating}>{user.rating}</Text>
            <Text style={styles.ratingText}>({user.totalSessions} sessions)</Text>
          </View>
        </View>

        {/* Bio Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
          <Text style={styles.bio}>{user.bio}</Text>
        </View>

        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          <View style={styles.skillsContainer}>
            {user.skills.map((skill, index) => (
              <View key={index} style={styles.skillTag}>
                <Text style={styles.skillText}>{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* My Offers Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Skill Offers</Text>
          {userOffers.map((offer) => (
            <View key={offer.id} style={styles.offerItem}>
              <View style={styles.offerInfo}>
                <Text style={styles.offerTitle}>{offer.title}</Text>
                <Text style={styles.offerCategory}>{offer.category}</Text>
              </View>
              <View style={styles.offerStats}>
                <Text style={styles.offerStatus}>{offer.status}</Text>
                <Text style={styles.offerBookings}>{offer.bookings} bookings</Text>
              </View>
            </View>
          ))}
        </View>

        {/* My Bookings Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Bookings</Text>
          {userBookings.map((booking) => (
            <View key={booking.id} style={styles.bookingItem}>
              <View style={styles.bookingInfo}>
                <Text style={styles.bookingTitle}>{booking.title}</Text>
                <Text style={styles.bookingTutor}>with {booking.tutor}</Text>
              </View>
              <View style={styles.bookingDetails}>
                <Text style={styles.bookingDate}>{booking.date}</Text>
                <Text style={styles.bookingStatus}>{booking.status}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <IconSymbol name="pencil" size={20} color="#3498db" />
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <IconSymbol name="rectangle.portrait.and.arrow.right" size={20} color="#e74c3c" />
            <Text style={styles.logoutButtonText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  profileHeader: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#22c55e',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    shadowColor: '#22c55e',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  avatarText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 16,
    color: '#4a5568',
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#15803d',
    marginLeft: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#4a5568',
    marginLeft: 8,
  },
  section: {
    backgroundColor: '#ffffff',
    marginTop: 16,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15803d',
    marginBottom: 12,
  },
  bio: {
    fontSize: 16,
    color: '#4a5568',
    lineHeight: 24,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: '#dcfce7',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#bbf7d0',
  },
  skillText: {
    fontSize: 14,
    color: '#22c55e',
    fontWeight: '600',
  },
  offerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  offerInfo: {
    flex: 1,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#15803d',
  },
  offerCategory: {
    fontSize: 14,
    color: '#4a5568',
    marginTop: 2,
  },
  offerStats: {
    alignItems: 'flex-end',
  },
  offerStatus: {
    fontSize: 12,
    color: '#38a169',
    fontWeight: '600',
  },
  offerBookings: {
    fontSize: 12,
    color: '#4a5568',
    marginTop: 2,
  },
  bookingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  bookingInfo: {
    flex: 1,
  },
  bookingTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#15803d',
  },
  bookingTutor: {
    fontSize: 14,
    color: '#4a5568',
    marginTop: 2,
  },
  bookingDetails: {
    alignItems: 'flex-end',
  },
  bookingDate: {
    fontSize: 12,
    color: '#4a5568',
  },
  bookingStatus: {
    fontSize: 12,
    color: '#ed8936',
    fontWeight: '600',
    marginTop: 2,
  },
  actionButtons: {
    padding: 20,
    gap: 12,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#22c55e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  editButtonText: {
    color: '#22c55e',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e53e3e',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  logoutButtonText: {
    color: '#e53e3e',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});