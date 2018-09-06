import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

const Container = (props) => {
    return (
        <View style={styles.labelContainer}>
            { props.children }
        </View>
    );
}

const styles = StyleSheet.create({
    labelContainer: {
        marginBottom: 20,
        marginTop: 10
    }
});

export default Container;

/* Made so that we don't have to apply the same styles to View multiple times.
It also lets you reuse the component every time you need to add a bottom margin
to something. */
