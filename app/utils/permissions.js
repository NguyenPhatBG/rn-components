import { PermissionsAndroid } from 'react-native';

const requestCameraPermission = async (callback) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "RN-Components Camera Permission",
                message: "RN-Components needs access to your camera",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If CAMERA Permission is granted
            // Calling the WRITE_EXTERNAL_STORAGE permission function
            callback(); 
        } else {
            alert('CAMERA permission denied');
        }
    } catch(error) {
       alert('Write permission err', error);
    } 
}

const requestExternalWritePermission = async (callback) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
                title: "RN-Components External Storage Write Permission",
                message: "RN-Components needs access to Storage data in your SD Card",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If WRITE_EXTERNAL_STORAGE Permission is granted
            // Calling the READ_EXTERNAL_STORAGE permission function
            callback();
        } else {
            alert('WRITE_EXTERNAL_STORAGE permission denied');
        }
    } catch(error) {
        alert('Write permission err', error);
    }
}

const requestExternalReadPermission = async (callback) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
                title: "RN-Components Read Storage Permission",
                message: "RN-Components needs access to your SD Card",
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // If READ_EXTERNAL_STORAGE Permission is granted
            // changing the state to re-render and open the camera
            // in place of activity indicator
            callback(true);
        }
    } catch(error) {
        alert('Read permission err', error);
    }
}

const requestLocationPermission = async (callback) => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
                'title': 'Location Access Required',
                'message': 'Rn-Components needs to Access your location'
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            // To check, If Permission is granted
            callback();
        } else {
            alert('Permission Denied');
        }
    } catch(error) {
        alert('Request Location Error', error);
    }
}

export {
    requestCameraPermission,
    requestExternalReadPermission,
    requestExternalWritePermission,
    requestLocationPermission
};