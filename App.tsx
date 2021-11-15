import {Axios} from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
    const [layer, setLayer] = useState(false);

    const [request, setRequest] = useState(false);
    const handleOnPressModalButtonClick = () => {
        setLayer(true);
    };
    const RENDER_VIEW = (children: any) => <View>{children}</View>;
    const visibilityTRANSPARENT = true;

    useEffect(()=> {
        setRequest(true)
        Alert.alert('Modal has been closed.');
    },[layer, request])


    useEffect(()=> {
       console.log("FIRE REQUEST TO CAT API AND RENDER THEM AS LIST");
       axios.get('https://api.thecatapi.com/v1/images/search?limit=9&mime_types=&order=Random&size=small&page=2&sub_id=demo-d63282')
    })

    return (
        <View style={styles.centeredView}>
            <View style={styles.helloWorld}><Text style={styles.helloWorldText}>Hello World!</Text></View>
            <Modal
                animationType="slide"
                transparent={visibilityTRANSPARENT}
                visible={layer}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setLayer(!layer);
                }}
            >
                <View>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>Hello World!</Text>
                            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setLayer(!layer)}>
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

            <Pressable
                style={[styles.button, styles.buttonOpen]}
                /* @ts-ignore */
                onPress={(e: any) => handleOnPressModalButtonClick(e)}
            >
                {RENDER_VIEW(<Text style={styles.textStyle}>Show Modal</Text>)}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    helloWorld: {
        backgroundColor: 40
    },
    helloWorldText: {
        fontSize: 40
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
    modalTexts: {
        marginBottom: 15,
        textAlign: 'center',
    },
});
