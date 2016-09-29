import React, { Component } from 'react';
import { ScrollView, Picker, View, StyleSheet } from 'react-native';
import Flag from 'react-native-flags';
import * as allFlags from 'react-native-flags/flags/flat/16';

const FlagExample = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {Object.keys(allFlags).map(code => {
          return <Flag code={code} key={code} />;
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});

export default FlagExample;
