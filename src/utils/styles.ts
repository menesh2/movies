import {StyleSheet} from "react-native";

const commonStyles = StyleSheet.create({
    containerWithShadow: {
        shadowColor: 'rgb(0, 0, 0)',
        shadowOffset: {
            width: 3,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 2,
        backgroundColor: 'white'
    }
});

export default commonStyles
