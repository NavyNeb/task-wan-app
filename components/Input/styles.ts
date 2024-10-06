import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "~/constants/styles";

export default StyleSheet.create({
    inputWrapper: (focus: boolean,error: any) => ({
        borderWidth: 2,
        borderColor: focus ? COLORS.primary : `#232533`,
        borderRadius: 8,
        height: 58,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        overflow: 'hidden',
        backgroundColor: COLORS.tertiary
    }),

    input: {
        flex: 1,
        height: '100%',
        textAlignVertical: 'center',
        color: COLORS.white,
        fontFamily: FONT.regular,
        fontSize: SIZES.md,
        marginHorizontal: 10,
        backgroundColor: COLORS.tertiary
    },

    placeholderStyle: {
        color: '#232533',
        fontFamily: FONT.semiBold,
        fontSize: SIZES.md,
    },

    label: {
        color: COLORS.lightGrey,
        fontFamily: FONT.medium,
        fontSize: SIZES.md,
        marginBottom: 12
    },

    errorTxt: {
        fontSize: 14,
        color: '#e03901',
        marginLeft: 8
    },

    errorContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})