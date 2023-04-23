import { FlatList, Text } from "react-native"
import Item from "../Components/Item";
import { useSelector } from "react-redux";
import { SELECTORS } from "../Redux/FavoriteRedux";
import { useMemo } from "react";
import { favoriteSelectors } from "../Redux/FavoriteReduxToolkit";
import { animalSelectors } from "../Redux/AnimalRedux";
import { isArray } from "lodash";

const FavoriteListScreen = () => {

    const favoriteIdList = useSelector(favoriteSelectors.favoriteList);
    const animalList = useSelector(animalSelectors.animalList);

    const favoriteList = useMemo(() => {
        if (isArray(animalList)) {
            const _favoriteList = [];
            for (let item of animalList) {
                if (favoriteIdList.includes(item.id)) {
                    _favoriteList.push(item);
                }
            }
    
            return _favoriteList;
        }

        return [];
    }, [favoriteIdList, animalList]);

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
