import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import Modal, { ModalTitle, ModalContent, ModalFooter, ModalButton, SlideAnimation, ScaleAnimation } from 'react-native-modals';

export default class TopTabSecond extends Component {
    static navigationOptions = {
        tabBarLabel: 'RN Modal',
    };

    state = {
        defaultAnimationModal: false,
        swipeableModal: false,
        scaleAnimationModal: false,
        slideAnimationModal: false,
        customBackgroundModal: false,
        bottomModalAndTitle: false,
        bottomModal: false
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Show Modal Default"
                    onPress={() => {
                        this.setState({ defaultAnimationModal: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Modal Swipeable"
                    onPress={() => {
                        this.setState({ swipeableModal: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Modal Scale"
                    onPress={() => {
                        this.setState({ scaleAnimationModal: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Modal Slide"
                    onPress={() => {
                        this.setState({ slideAnimationModal: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Custom Background"
                    onPress={() => {
                        this.setState({ customBackgroundModal: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Bottom ModalAndTitle"
                    onPress={() => {
                        this.setState({ bottomModalAndTitle: true });
                    }}
                />
                <View style={styles.divider} />
                <Button
                    title="Show Bottom Modal"
                    onPress={() => {
                        this.setState({ bottomModal: true });
                    }}
                />
                <Modal
                    visible={this.state.defaultAnimationModal}
                    onTouchOutside={() => {
                        this.setState({ defaultAnimationModal: false });
                    }}
                    width={0.8}
                    rounded
                    actionsBordered
                    modalTitle={<ModalTitle title="Default Animation" align="left" />}
                    footer={
                        <ModalFooter>
                            <ModalButton 
                                text="CANCEL"
                                bordered
                                onPress={() => {
                                    this.setState({ defaultAnimationModal: false });
                                }}
                                key="button-1"
                            />
                            <ModalButton 
                                text="OK"
                                bordered
                                onPress={() => {
                                    this.setState({ defaultAnimationModal: false });
                                }}
                                key="button-2"
                            />
                        </ModalFooter>
                    }
                >
                    <ModalContent style={styles.content}>
                        <Text>Default Animation</Text>
                        <Text>No onTouchOutside handler. will not dismiss when touch overlay.</Text>
                    </ModalContent>
                </Modal>
                <Modal
                    onDismiss={() => {
                        this.setState({ swipeableModal: false });
                    }}
                    width={0.9}
                    overlayOpacity={0.6}
                    visible={this.state.swipeableModal}
                    rounded
                    actionsBordered
                    onSwipeOut={() => {
                        this.setState({ swipeableModal: false });
                    }}
                    onTouchOutside={() => {
                        this.setState({ swipeableModal: false });
                    }}
                    swipeDirection={['down', 'up']}
                    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                    modalTitle={
                        <ModalTitle
                            title="Swipeable Modal"
                        />
                    }
                    footer={
                        <ModalFooter>
                            <ModalButton
                                text="CANCEL"
                                bordered
                                onPress={() => {
                                this.setState({ swipeableModal: false });
                                }}
                                key="button-1"
                            />
                            <ModalButton
                                text="OK"
                                bordered
                                onPress={() => {
                                this.setState({ swipeableModal: false });
                                }}
                                key="button-2"
                            />
                        </ModalFooter>
                    }
                    >
                    <ModalContent
                        style={{ backgroundColor: '#fff', paddingTop: 24 }}
                    >
                        <Text>Swipeable</Text>
                        <Text>Swipe Up/Down</Text>
                    </ModalContent>
                </Modal>
                <Modal
                    onTouchOutside={() => {
                        this.setState({ scaleAnimationModal: false });
                    }}
                    width={0.9}
                    visible={this.state.scaleAnimationModal}
                    onSwipeOut={() => this.setState({ scaleAnimationModal: false })}
                    modalAnimation={new ScaleAnimation()}
                    onHardwareBackPress={() => {
                        this.setState({ scaleAnimationModal: false });
                        return true;
                    }}
                    modalTitle={
                        <ModalTitle
                            title="Modal - Scale Animation"
                            hasTitleBar={false}
                        />
                    }
                    actions={[
                        <ModalButton
                            text="DISMISS"
                            onPress={() => {
                                this.setState({ scaleAnimationModal: false });
                            }}
                            key="button-1"
                        />
                    ]}
                    >
                    <ModalContent>
                        <Button
                            title="Show Modal - Default Animation"
                            onPress={() => {
                                this.setState({ defaultAnimationModal: true });
                            }}
                        />
                    </ModalContent>
                </Modal>
                <Modal
                    onDismiss={() => {
                        this.setState({ slideAnimationModal: false });
                    }}
                    onTouchOutside={() => {
                        this.setState({ slideAnimationModal: false });
                    }}
                    swipeDirection="down"
                    onSwipeOut={() => this.setState({ slideAnimationModal: false })}
                    visible={this.state.slideAnimationModal}
                    modalTitle={
                        <ModalTitle
                            title="Modal - Slide Animation"
                            hasTitleBar={false}
                        />
                    }
                    modalAnimation={new SlideAnimation({ slideFrom: 'bottom' })}
                >
                    <ModalContent>
                        <Text>Slide Animation</Text>
                    </ModalContent>
                </Modal>
                <Modal
                    onDismiss={() => {
                        this.setState({ customBackgroundModal: false });
                    }}
                    onTouchOutside={() => {
                        this.setState({ customBackgroundModal: false });
                    }}
                    zIndex={1000}
                    backgroundStyle={styles.customBackgroundModal}
                    modalStyle={{
                        backgroundColor: 'rgba(0,0,0,0.5)',
                    }}
                    modalTitle={
                        <ModalTitle
                            title="Modal - Custom Background Style"
                            hasTitleBar={false}
                            textStyle={{ color: '#fff' }}
                        />
                    }
                    visible={this.state.customBackgroundModal}
                >
                    <View style={styles.dialogContentView}>
                        <Text style={{ color: '#fff' }}>Custom backgroundStyle</Text>
                    </View>
                </Modal>
                <Modal.BottomModal
                    visible={this.state.bottomModalAndTitle}
                    onTouchOutside={() => this.setState({ bottomModalAndTitle: false })}
                    height={0.5}
                    width={1}
                    onSwipeOut={() => this.setState({ bottomModalAndTitle: false })}
                    modalTitle={
                        <ModalTitle
                            title="Bottom Modal"
                            hasTitleBar
                        />
                    }
                >
                    <ModalContent style={{ flex: 1, backgroundColor: 'fff' }}>
                        <Text>
                            Bottom Modal with Title
                        </Text>
                    </ModalContent>
                </Modal.BottomModal>
                <Modal.BottomModal
                    visible={this.state.bottomModal}
                    onTouchOutside={() => this.setState({ bottomModal: false })}
                    // modalStyle={{  }}
                >
                    <ModalContent
                        style={{
                        backgroundColor: 'fff',
                        // height: '40%',
                        }}
                    >
                        <Text>
                            Bottom Modal without Title
                        </Text>
                    </ModalContent>
                </Modal.BottomModal>
            </View>
        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        backgroundColor: 'white',
    },
    divider: {
        height: 10
    }
};