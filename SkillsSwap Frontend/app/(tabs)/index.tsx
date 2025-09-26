import { IconSymbol } from '@/components/ui/icon-symbol';
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  FlatList,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// Dummy data for skill offers
const dummyOffers = [
  {
    id: 1,
    title: 'Python Programming',
    description: 'Learn Python from basics to advanced concepts. Perfect for beginners!',
    user: 'Ali Ahmed',
    category: 'Programming',
    rating: 4.8,
    duration: '2 hours',
    availableSlots: 3,
  },
  {
    id: 2,
    title: 'Guitar Lessons',
    description: 'Acoustic guitar lessons for beginners. Bring your own guitar!',
    user: 'Fatima Khan',
    category: 'Music',
    rating: 4.9,
    duration: '1.5 hours',
    availableSlots: 2,
  },
  {
    id: 3,
    title: 'Digital Art & Drawing',
    description: 'Learn digital art techniques using Procreate and Photoshop.',
    user: 'Ahmed Hassan',
    category: 'Art',
    rating: 4.7,
    duration: '2.5 hours',
    availableSlots: 1,
  },
  {
    id: 4,
    title: 'Yoga & Meditation',
    description: 'Relaxing yoga session with meditation techniques for stress relief.',
    user: 'Sara Ali',
    category: 'Wellness',
    rating: 4.9,
    duration: '1 hour',
    availableSlots: 4,
  },
  {
    id: 5,
    title: 'React Native Development',
    description: 'Build mobile apps with React Native. From setup to deployment.',
    user: 'Omar Farooq',
    category: 'Programming',
    rating: 4.6,
    duration: '3 hours',
    availableSlots: 2,
  },
  {
    id: 6,
    title: 'Photography Basics',
    description: 'Learn composition, lighting, and camera settings for better photos.',
    user: 'Layla Ibrahim',
    category: 'Photography',
    rating: 4.8,
    duration: '2 hours',
    availableSlots: 3,
  },
];

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  };

  const renderOfferCard = ({ item }: { item: any }) => (
    <TouchableOpacity style={styles.offerCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.offerTitle}>{item.title}</Text>
        <View style={styles.ratingContainer}>
          <IconSymbol name="star.fill" size={16} color="#f39c12" />
          <Text style={styles.rating}>{item.rating}</Text>
        </View>
      </View>
      
      <Text style={styles.offerDescription}>{item.description}</Text>
      
      <View style={styles.cardFooter}>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>by {item.user}</Text>
          <Text style={styles.category}>{item.category}</Text>
        </View>
        
        <View style={styles.offerDetails}>
          <Text style={styles.duration}>⏱️ {item.duration}</Text>
          <Text style={styles.slots}>{item.availableSlots} slots left</Text>
        </View>
      </View>
      
      <TouchableOpacity style={styles.bookButton}>
        <Text style={styles.bookButtonText}>Book Session</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SkillSwap</Text>
        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => router.push('/create-post')}
        >
          <IconSymbol name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      
      <FlatList
        data={dummyOffers}
        renderItem={renderOfferCard}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7fafc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e1e8ed',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#15803d',
  },
  addButton: {
    backgroundColor: '#22c55e',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#22c55e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 6,
  },
  listContainer: {
    padding: 16,
  },
  offerCard: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  offerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15803d',
    flex: 1,
    marginRight: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 4,
    fontSize: 14,
    color: '#4a5568',
    fontWeight: '600',
  },
  offerDescription: {
    fontSize: 14,
    color: '#4a5568',
    lineHeight: 22,
    marginBottom: 12,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#15803d',
  },
  category: {
    fontSize: 12,
    color: '#718096',
    marginTop: 2,
  },
  offerDetails: {
    alignItems: 'flex-end',
  },
  duration: {
    fontSize: 12,
    color: '#4a5568',
  },
  slots: {
    fontSize: 12,
    color: '#38a169',
    marginTop: 2,
    fontWeight: '600',
  },
  bookButton: {
    backgroundColor: '#22c55e',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#22c55e',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  bookButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
  },
});