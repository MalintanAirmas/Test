
import RNDeviceInfo from 'react-native-device-info';
import React, { useState } from 'react'
import { Platform } from 'react-native';


//  GET BUNDLE INFORMATION
export const getBundleId = () => {
    let response = RNDeviceInfo.getBundleId();
    return response;
}
// GET BRAND MOBILE 
export const getBrand = () => {
    let response = RNDeviceInfo.getBrand();
    return response;
}
// GET OS VERSION
export const getOSVersion = () => {
    let platforms = ''
    switch (Platform.OS) {
        case 'ios':
            platforms = 'IOS'
            break;
        case 'android':
            platforms = 'ANDROID'
            break;

        default:
            platforms = 'Not Found'
            break;
    }
    let response = ` ${platforms} ${RNDeviceInfo.getSystemVersion()}`
    return response;
}
// GET FREE DISK STORAGE
export const getStorageUsed = () => {
    const [totalStorage, setTotalStorage] = useState(0);
    const [freeStorage, setFreeStorage] = useState(0);
    RNDeviceInfo.getTotalDiskCapacity().then((res) => {
        setTotalStorage(res);
    });
    RNDeviceInfo.getFreeDiskStorage().then((res) => {
        setFreeStorage(res);
    });
    let currentStorage = Math.round((totalStorage - freeStorage) / totalStorage * 100);
    let response = currentStorage + '% used';
    return response;
}
// GET DEVICE NAME
export const getDeviceName = () => {
    const [deviceName, setDeviceName] = useState('');
    RNDeviceInfo.getDeviceName().then((name) => {
        setDeviceName(name);
    });
    let response = deviceName;
    return response;
}

