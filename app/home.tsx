import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

// --- Icons ---
const Icons = {
  MessageCircle: () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </Svg>
  ),
  FaceGreat: () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"/>
      <Path d="M8 14s1.5 2 4 2 4-2 4-2"/>
      <Line x1="9" y1="9" x2="9.01" y2="9"/>
      <Line x1="15" y1="9" x2="15.01" y2="9"/>
    </Svg>
  ),
  FaceGood: () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"/>
      <Path d="M8 14s1.5 1 4 1 4-1 4-1"/>
      <Line x1="9" y1="9" x2="9.01" y2="9"/>
      <Line x1="15" y1="9" x2="15.01" y2="9"/>
    </Svg>
  ),
  FaceOkay: () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"/>
      <Line x1="8" y1="15" x2="16" y2="15"/>
      <Line x1="9" y1="9" x2="9.01" y2="9"/>
      <Line x1="15" y1="9" x2="15.01" y2="9"/>
    </Svg>
  ),
  FaceBad: () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"/>
      <Path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
      <Line x1="9" y1="9" x2="9.01" y2="9"/>
      <Line x1="15" y1="9" x2="15.01" y2="9"/>
    </Svg>
  ),
  FaceTerrible: () => (
    <Svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <Circle cx="12" cy="12" r="10"/>
      <Path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
      <Line x1="9" y1="9" x2="9.01" y2="9"/>
      <Line x1="15" y1="9" x2="15.01" y2="9"/>
    </Svg>
  )
};

// --- Mood Data & Characters ---
const moods = [
  { 
    id: 'great', 
    label: 'Great', 
    icon: Icons.FaceGreat, 
    color: '#10b981',
    bgColor: '#f0fdf4',
    character: "🤩", 
    cheer: "You're Glowing!", 
    message: "That's the spirit! Keep shining your light.",
  },
  { 
    id: 'good', 
    label: 'Good', 
    icon: Icons.FaceGood, 
    color: '#3b82f6',
    bgColor: '#eff6ff',
    character: "😎", 
    cheer: "Looking Good!", 
    message: "Solid vibes today. Keep that momentum going!",
  },
  { 
    id: 'okay', 
    label: 'Okay', 
    icon: Icons.FaceOkay, 
    color: '#eab308',
    bgColor: '#fefce8',
    character: "☕", 
    cheer: "Steady as she goes.", 
    message: "It's a calm day. A perfect time to just breathe.",
  },
  { 
    id: 'bad', 
    label: 'Bad', 
    icon: Icons.FaceBad, 
    color: '#f97316',
    bgColor: '#fff7ed',
    character: "🧸", 
    cheer: "Sending a Hug.", 
    message: "It's okay not to be okay. Be gentle with yourself.",
  },
  { 
    id: 'terrible', 
    label: 'Terrible', 
    icon: Icons.FaceTerrible, 
    color: '#ef4444',
    bgColor: '#fef2f2',
    character: "❤️‍🩹", 
    cheer: "We're here for you.", 
    message: "Deep breaths. This moment will pass. You are strong.",
  },
];

export default function HomePage() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [feelingText, setFeelingText] = useState("");

  const activeMoodData = moods.find(m => m.id === selectedMood);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Hey Buddy!</Text>
          <Text style={styles.subtitle}>Let&apos;s track your wellness today</Text>
        </View>

        {/* Mood Tracker Card */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>How are you feeling today?</Text>
          <Text style={styles.cardSubtitle}>Click a face to see your daily buddy!</Text>

          <View style={styles.moodGrid}>
            {moods.map((mood) => {
              const isSelected = selectedMood === mood.id;
              const Icon = mood.icon;
              
              return (
                <TouchableOpacity
                  key={mood.id}
                  onPress={() => setSelectedMood(mood.id)}
                  style={[
                    styles.moodButton,
                    isSelected && { backgroundColor: mood.bgColor, borderColor: mood.color, transform: [{ scale: 1.05 }] }
                  ]}
                >
                  <Icon />
                  <Text style={[styles.moodLabel, { color: mood.color }]}>{mood.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* Character Reaction */}
        {activeMoodData && (
          <View style={[styles.reactionCard, { backgroundColor: activeMoodData.bgColor }]}>
            <Text style={styles.character}>{activeMoodData.character}</Text>
            <Text style={[styles.cheer, { color: activeMoodData.color }]}>{activeMoodData.cheer}</Text>
            <Text style={styles.message}>&quot;{activeMoodData.message}&quot;</Text>
          </View>
        )}

        {/* Text Input Card */}
        <View style={styles.card}>
          <View style={styles.journalHeader}>
            <Icons.MessageCircle />
            <Text style={styles.cardTitle}>Journal your thoughts</Text>
          </View>
          <Text style={styles.cardSubtitle}>Share your thoughts and feelings with us</Text>

          <TextInput
            value={feelingText}
            onChangeText={setFeelingText}
            style={styles.textArea}
            placeholder="Type how you're feeling today... Be as open and honest as you'd like."
            placeholderTextColor="#9CA3AF"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
          />

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Share My Feelings</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  content: {
    padding: 20,
    maxWidth: 800,
    alignSelf: 'center',
    width: '100%',
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#111827',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  cardSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 20,
  },
  moodGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  moodButton: {
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E5E7EB',
    backgroundColor: 'white',
    width: 80,
  },
  moodLabel: {
    fontSize: 11,
    fontWeight: '500',
    marginTop: 8,
  },
  reactionCard: {
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  character: {
    fontSize: 64,
    marginBottom: 16,
  },
  cheer: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  message: {
    fontSize: 16,
    color: '#374151',
    textAlign: 'center',
    maxWidth: 400,
  },
  journalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  textArea: {
    backgroundColor: '#F9FAFB',
    borderWidth: 1,
    borderColor: '#F3F4F6',
    borderRadius: 12,
    padding: 16,
    height: 120,
    color: '#374151',
    fontSize: 14,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#3B82F6',
    borderRadius: 12,
    padding: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});