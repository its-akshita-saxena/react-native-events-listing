import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Camera, useCameraDevices } from 'react-native-vision-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../context/AppContext';
const ScannerScreen = () => {
    const [isScanning, setIsScanning] = useState(false);
    const [hasPermission, setHasPermission] = useState(false);

    const devices = useCameraDevices();
    const device = devices?.back;
    const { theme } = useContext(AppContext);

    // ✅ Permission function (FIXED)
    const requestCameraPermission = async () => {
        let status = await Camera.getCameraPermissionStatus();

        if (status !== 'authorized') {
            await Camera.requestCameraPermission();

            // ✅ RE-CHECK after user action
            status = await Camera.getCameraPermissionStatus();
        }

        if (status === 'authorized') {
            setHasPermission(true);
            setIsScanning(true);
        } else {
            Alert.alert("Permission Denied", "Camera permission is required");
        }
    };

    // ✅ Start scanning flow
    const startScanning = () => {
        setIsScanning(true);

        // simulate QR scan after 3 seconds
        setTimeout(() => {
            setIsScanning(false);

            const fakeQR = "EVENT_123"; // simulate scanned QR

            if (fakeQR === "EVENT_123") {
                Alert.alert("✅ Success", "Valid QR identified for event registration");
            } else {
                Alert.alert("❌ Rejected", "Invalid QR code");
            }
        }, 3000);
    };

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: theme.background, },]}>

            {/* ✅ Camera */}
            {isScanning && device && hasPermission && (
                <Camera
                    style={StyleSheet.absoluteFill}
                    device={device}
                    isActive={true}
                />
            )}

            {/* UI */}
            {!isScanning && (
                <>
                    <Icon name="qr-code-outline" size={90} color="#f5c542" />

                    <Text style={[styles.title, { color: theme.text, },]}>QR Scanner</Text>

                    <Text style={[styles.subtitle, { color: theme.subText, },]}>
                        Scan your event QR code{'\n'}to verify event access
                    </Text>

                    <TouchableOpacity
                        style={styles.scanButton}
                        onPress={requestCameraPermission}
                    >
                        <Text style={styles.buttonText}>Scan QR Code</Text>
                    </TouchableOpacity>
                </>
            )}

        </SafeAreaView>
    );
};

export default ScannerScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 20,
    },
    subtitle: {
        color: '#aaa',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 10,
        lineHeight: 24,
    },
    scanButton: {
        backgroundColor: '#f5c542',
        paddingVertical: 14,
        paddingHorizontal: 35,
        borderRadius: 15,
        marginTop: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});



// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import { Camera, useCameraDevices } from 'react-native-vision-camera';
// import { SafeAreaView } from 'react-native-safe-area-context';

// import Icon from 'react-native-vector-icons/Ionicons';

// const ScannerScreen = () => {

//     const [isScanning, setIsScanning] = useState(false);
//     const devices = useCameraDevices();
//     const device = devices?.back;
//     //adding cam permission request-- asking usear to allow camera access for scanning qr code


//     // const requestCameraPermission = async () => {
//     //     const permission = await Camera.getCameraPermissionStatus();

//     //     if (permission !== 'authorized') {
//     //         const newPermission = await Camera.requestCameraPermission();
//     //         if (newPermission === 'authorized') {
//     //             setIsScanning(true);
//     //         }
//     //     } else {
//     //         setIsScanning(true);
//     //     }
//     // };

//     return (
//         <SafeAreaView style={styles.container}>

//             {
//                 isScanning && device && (

//                     <Camera style={StyleSheet.absoluteFill} device={device} isActive={true} />
//                 )
//             }
//             {/* Scanner Icon */}
//             <Icon name="qr-code-outline" size={90} color="#f5c542" />

//             {/* Title */}
//             <Text style={styles.title}> QR Scanner </Text>

//             {/* Subtitle */}
//             <Text style={styles.subtitle}> Scan your event QR code{'\n'} to verify event access  </Text>

//             {/* Scan Button */}
//             <TouchableOpacity
//                 style={styles.scanButton}
//                 // onPress={() => setIsScanning(true)}
//                 onPress={async () => {
//                     await requestCameraPermission();
//                     setIsScanning(true);
//                 }}
//             >
//                 <Text style={styles.buttonText}>Scan QR Code </Text>

//             </TouchableOpacity>

//         </SafeAreaView>
//     );
// };

// // export default ScannerScreen;

// const styles = StyleSheet.create({

//     container: {
//         flex: 1,
//         backgroundColor: '#000',
//         justifyContent: 'center',
//         alignItems: 'center',
//         padding: 20,
//     },

//     title: {
//         color: '#fff',
//         fontSize: 28,
//         fontWeight: 'bold',
//         marginTop: 20,
//     },

//     subtitle: {
//         color: '#aaa',
//         fontSize: 16,
//         textAlign: 'center',
//         marginTop: 10,
//         lineHeight: 24,
//     },

//     scanButton: {
//         backgroundColor: '#f5c542',
//         paddingVertical: 14,
//         paddingHorizontal: 35,
//         borderRadius: 15,
//         marginTop: 40,
//     },

//     buttonText: {
//         fontSize: 16,
//         fontWeight: 'bold',
//         color: '#000',
//     },

// });
// export default ScannerScreen;


