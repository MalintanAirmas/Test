import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'


//  GENERAL PAGE 

export default function GeneralPage({ headerColor, statusBarBackground, headerLeft, headerRight, headerContent, arroundHeaderStyles, bodyContent }) {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content" backgroundColor={statusBarBackground ?? 'gray'} />
            <View style={[stylesLocal.header, { backgroundColor: headerColor ?? 'gray' }]}>
                <View style={[stylesLocal.arroundHeader, stylesLocal.center, arroundHeaderStyles]}>
                    {headerRight}
                </View>
                <View style={[stylesLocal.centerHeader]}>
                    {headerContent}
                </View>
                <View style={[stylesLocal.arroundHeader, stylesLocal.center, arroundHeaderStyles]}>
                    {headerLeft}
                </View>
            </View>
            <View style={[stylesLocal.full]}>
                {bodyContent}
            </View>
        </SafeAreaView>
    )
}

const stylesLocal = StyleSheet.create({
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    full: {
        height: '90%',
        width: '100%'
    },
    centerHeader: {
        height: '100%',
        width: '70%',
        justifyContent: 'center'
    },
    arroundHeader: {
        height: '100%',
        width: '15%'
    },
    header: {
        height: '10%',
        minHeight: 80,
        width: '100%',
        flexDirection: 'row'
    }
})