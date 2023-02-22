import { Image } from 'expo-image';
import { View } from 'react-native';

export default function App() {
    return (
        <View>
            <Image
                contentFit="contain"
                source={{
                    uri: 'https://placekitten.com/100/100',
                }}
                style={{
                    height: 100,
                    width: 100,
                }}
            />
        </View>
    );
}
