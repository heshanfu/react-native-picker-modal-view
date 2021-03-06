"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
exports.SearchStyle = react_native_1.StyleSheet.create({
    closeButton: {
        width: 13,
        height: 13,
    },
    backButton: {
        width: 15,
        height: 15,
    },
    searchArea: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    textInput: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
    },
    nonCloseButton: {
        marginRight: 20,
    },
    leftBtn: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
    rightBtn: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },
});
//# sourceMappingURL=SearchStyle.js.map