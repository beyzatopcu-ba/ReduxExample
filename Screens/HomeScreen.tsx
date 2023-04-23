import { FlatList, Text } from "react-native"
import Item from "../Components/Item";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animalSelectors, animalSlice } from "../Redux/AnimalRedux";

const HomeScreen = () => {

    const dispatch = useDispatch();
    const animalList = useSelector(animalSelectors.animalList);

    useEffect(() => {
        dispatch(animalSlice.actions.readAnimals_Start());
    }, []);

    const _renderItem = ({ item }: { item: { id: number, name: string } }) => {
        return (
            <Item
                item={item}
            />
        )
    }

    return (
        <FlatList
            data={animalList}
            keyExtractor={item => item.id.toString()}
            renderItem={_renderItem}
        />
    )
};

export default HomeScreen;
