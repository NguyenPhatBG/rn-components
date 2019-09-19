import React from 'react';
import { Text, TouchableOpacity, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const nameIcon = Platform.select({
    ios: 'ios-arrow-round-forward',
    android: 'md-arrow-round-forward'
});

export default function MenuItem({ title, active, onPress, ...rest }) {
  return (
    <TouchableOpacity
      style={[styles.container, active && styles.active]}
      onPress={onPress}
      {...rest}
    >
      <Text style={[styles.title, active && styles.activeTitle]}>
        {title}
      </Text>
      <Icon 
        name={nameIcon}
        color={active ? '#0084ff' : '#000000'}
        size={20} 
       />
    </TouchableOpacity>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
}

MenuItem.defaultProps = {
  active: false,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 5,
  },
  active: {
    backgroundColor: '#e8e8e8',
  },
  title: {
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 20,
  },
  activeTitle: {
    color: '#0084ff',
  },
});