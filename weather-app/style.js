import { StyleSheet, PixelRatio, Dimensions } from "react-native"

const isSmallScreen = Dimensions.get('screen').width < 600;
const { width, height } = Dimensions.get('window');
const scale = PixelRatio.get();

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#29B2DD',
    },
    header: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        paddingTop: 50,
    },
    buttons: {
        flexDirection: 'row',
        backgroundColor: '#10408430',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    buttonsIcons: {
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    card: {
        backgroundColor: '#10408430',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 20,
        paddingHorizontal: 5,
        paddingVertical: 10,
        maxWidth: '85%'
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        width: "100%"
    },
    text: {
        color: "#fff",
        fontSize: 7 * scale,
    },
    textCard: {
        color: "#fff",
        fontSize: 6 * scale
    },
    textHeaderCard: {
        color: "#fff",
        fontSize: 7 * scale,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start'
    },
    cardWeather: {
        padding: 12,
        alignItems: 'center',
        paddingBottom: 10
    },
    imageConf: {
        width: isSmallScreen ? 60 * scale : 60 * scale,
        height: isSmallScreen ? 60 * scale : 60 * scale,
        resizeMode: 'contain'
    },
    nextForecast:{
        flexDirection: 'row', 
        justifyContent: 'space-between',
        padding: 3, 
        paddingLeft: 25, 
        paddingRight: 10
    }
});


export { styles };
