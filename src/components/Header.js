import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IMAGES from '../assets/images';
import { ImageAssets } from './ImageAssets';
import { colors } from '../style/globalStyles';

const Header = ({ 
  appName = "WingsFly", 
  onSearchPress, 
  onCalendarPress, 
  onMenuPress 
}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
      <Image 
          source={IMAGES.LOGO}
          style={styles.logoImage}
          resizeMode="contain"
        />
       
      </View>
      <View style={styles.headerRight}>
        <TouchableOpacity onPress={onSearchPress}>
          <Icon name="search" size={24} color="#666" style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onCalendarPress}>
          <Icon name="calendar-today" size={24} color="#666" style={styles.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={onMenuPress}>
          <Icon name="more-vert" size={24} color="#666" style={styles.headerIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop:18,
   
    backgroundColor: colors.white,
  },
  headerLeft: {
   
    flexDirection: 'row',
    flex:.4,
   
    
  },
  logoImage: {
    width: 120,
    height: 32,
    
  },
  headerRight: {
    flexDirection: 'row',
   flex:.4,
 
  },
  headerIcon: {
    marginLeft: 15,
  },
});

export default Header;