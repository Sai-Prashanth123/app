import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Card from '@/components/common/Card';
import Colors from '@/constants/Colors';
import Theme from '@/constants/Theme';
import { Check, X } from 'lucide-react-native';

interface Option {
  id: string;
  text: string;
}

interface QuizQuestionProps {
  question: string;
  options: Option[];
  selectedOption?: string;
  correctOption?: string;
  onSelect: (optionId: string) => void;
  showAnswer?: boolean;
}

export default function QuizQuestion({
  question,
  options,
  selectedOption,
  correctOption,
  onSelect,
  showAnswer = false,
}: QuizQuestionProps) {
  const renderOption = (option: Option) => {
    const isSelected = selectedOption === option.id;
    const isCorrect = correctOption === option.id;
    
    const getOptionStyles = () => {
      if (!showAnswer) {
        return isSelected ? styles.selectedOption : styles.option;
      }
      
      if (isCorrect) {
        return styles.correctOption;
      }
      
      if (isSelected && !isCorrect) {
        return styles.incorrectOption;
      }
      
      return styles.option;
    };
    
    const getTextStyles = () => {
      if (!showAnswer) {
        return isSelected ? styles.selectedOptionText : styles.optionText;
      }
      
      if (isCorrect) {
        return styles.correctOptionText;
      }
      
      if (isSelected && !isCorrect) {
        return styles.incorrectOptionText;
      }
      
      return styles.optionText;
    };
    
    return (
      <TouchableOpacity
        key={option.id}
        style={getOptionStyles()}
        onPress={() => !showAnswer && onSelect(option.id)}
        disabled={showAnswer}
        activeOpacity={0.8}
      >
        <Text style={getTextStyles()}>{option.text}</Text>
        
        {showAnswer && isCorrect && (
          <View style={styles.iconContainer}>
            <Check size={18} color={Colors.white} />
          </View>
        )}
        
        {showAnswer && isSelected && !isCorrect && (
          <View style={styles.iconContainer}>
            <X size={18} color={Colors.white} />
          </View>
        )}
      </TouchableOpacity>
    );
  };
  
  return (
    <Card style={styles.card}>
      <Text style={styles.question}>{question}</Text>
      <View style={styles.optionsContainer}>
        {options.map(renderOption)}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: Theme.spacing.lg,
  },
  question: {
    fontFamily: Theme.typography.fontFamily.semiBold,
    fontSize: Theme.typography.fontSize.lg,
    color: Colors.neutral[900],
    marginBottom: Theme.spacing.lg,
  },
  optionsContainer: {
    gap: Theme.spacing.md,
  },
  option: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.neutral[300],
    backgroundColor: Colors.white,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  selectedOption: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.primary[500],
    backgroundColor: Colors.primary[50],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  correctOption: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.success[500],
    backgroundColor: Colors.success[50],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  incorrectOption: {
    padding: Theme.spacing.md,
    borderRadius: Theme.borderRadius.md,
    borderWidth: 1,
    borderColor: Colors.error[500],
    backgroundColor: Colors.error[50],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionText: {
    fontFamily: Theme.typography.fontFamily.regular,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.neutral[800],
  },
  selectedOptionText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.primary[700],
  },
  correctOptionText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.success[700],
  },
  incorrectOptionText: {
    fontFamily: Theme.typography.fontFamily.medium,
    fontSize: Theme.typography.fontSize.md,
    color: Colors.error[700],
  },
  iconContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.success[500],
    justifyContent: 'center',
    alignItems: 'center',
  },
});