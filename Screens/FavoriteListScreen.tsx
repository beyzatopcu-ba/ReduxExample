import { FlatList, Text } from "react-native"
import Item from "../Components/Item";
import { useSelector } from "react-redux";
import { SELECTORS } from "../Redux/FavoriteRedux";
import { useMemo } from "react";
import { dummyData } from "../DummyData";

const FavoriteListScreen = () => {

    const favoriteIdList = useSelector(SELECTORS.favoriteList);

    const favoriteList = useMemo(() => {
        const _favoriteList = [];
        for (let item of dummyData) {
            if (favoriteIdList.includes(item.id)) {
                _favoriteList.push(item);
            }
        }

        return _favoriteList;
    }, [favoriteIdList]);

    const _renderItem = ({ item }: { item: { id: number, name: string } }) => {
        return (
            <Item item={item} />
        )
    }

    return (
        <FlatList
            data={favoriteList}
            keyExtractor={item => item.id.toString()}
            renderItem={_renderItem}
        />
    )
};

export default FavoriteListScreen;
