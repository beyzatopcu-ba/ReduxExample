import { FlatList, Text } from "react-native"
import { dummyData } from "../DummyData";
import Item from "../Components/Item";

const HomeScreen = () => {

    const _renderItem = ({ item }: { item: { id: number, name: string } }) => {
        return (
            <Item
                item={item}
            />
        )
    }

    return (
        <FlatList
            data={dummyData}
            keyExtractor={item => item.id.toString()}
            renderItem={_renderItem}
        />
    )
};

export default HomeScreen;
