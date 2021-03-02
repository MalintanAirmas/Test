import React from 'react'
import { SafeAreaView, StyleSheet, View, Text } from 'react-native'
import GeneralPage from 'App/Components/GeneralPage';
import * as Helper from 'App/Helpers'

export default function DeviceInfo() {
    // SET UP INFORMATION VIEW
    const informationView = [
        {
            title: 'Internal Storage',
            fuctionName: 'getStorageUsed'
        },
        // TO MORE INFORMATION 
        // {
        //     title: 'Device Bundle',
        //     fuctionName: 'getBundleId'
        // },
    ]
    return (
        <GeneralPage
            statusBarBackground={'black'}
            headerContent={
                <View style={[stylesLocal.headerCotainer]}>
                    <Text style={[stylesLocal.headerText]}>My Device Info</Text>
                </View>
            }
            bodyContent={
                <View style={{ paddingVertical: 30 }}>
                    <View style={{ marginVertical: 10 }} >
                        <Text style={[stylesLocal.deviceInfoTitle]}>{Helper.DeviceInfo.getDeviceName()} </Text>
                        <Text style={[stylesLocal.deviceInfoValue]}>
                            {Helper.DeviceInfo.getOSVersion()}
                        </Text>
                    </View>
                    {/* VIEW DEVICE INFORMATION */}
                    {informationView.map((data, index) =>
                        <View style={{ marginVertical: 10 }} key={'list information ' + index}>
                            <Text style={[stylesLocal.deviceInfoTitle]}>{data.title} : </Text>
                            <Text style={[stylesLocal.deviceInfoValue]}>
                                {Helper.DeviceInfo[data.fuctionName]()}
                            </Text>
                        </View>
                    )}
                </View>
            }
        />
    )
}

const stylesLocal = StyleSheet.create({
    headerCotainer: {
        alignItems: 'center',
        width: '100%'
    },
    headerText: {
        color: 'white',
        fontSize: 15
    },
    deviceInfoTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10
    },
    deviceInfoValue: {
        fontSize: 14,
        textAlign: 'center',
    }
}) 