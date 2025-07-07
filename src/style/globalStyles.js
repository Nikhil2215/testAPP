import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  shadow: {
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryColor: '#4A90E2',
  secondaryColor: '#f8f9fa',
  textPrimary: '#333',
  textSecondary: '#666',
  textMuted: '#999',
});

export const colors = {
  white:'#fff',
  primary: '#151B73',
  secondary: '#2C3399',
  success: '#4CAF50',
  warning: '#FF9800',
  danger: '#F44336',
  info: '#2196F3',
  light: '#f8f9fa',
  dark: '#333',
  muted: '#999',
  darkGray:'#E9E9E9',
  lightGray:'#F4F4F4'
};
