import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/ItemStyles';
import { ACTION_CREATORS, ACTION_TYPES, SELECTORS } from "../Redux/FavoriteRedux";

const Item = (props: { item: { id: number, name: string } }) => {

    const isFavorite = useSelector(SELECTORS.isItemFavorite(props.item.id));
    const dispatch = useDispatch();


    console.log('isFavorite', isFavorite);

    const _onPress = () => {
        if (!isFavorite) {
            dispatch(ACTION_CREATORS.addToFavoriteList(props.item.id));
        }
        else {
            dispatch({
                type: ACTION_TYPES.removeFromFavoriteList,
                payload: props.item.id,
            });
        }
    }

    return (
        <TouchableOpacity
            onPress={_onPress}
            style={[
                styles.itemTouchable,
                isFavorite ? styles.itemTouchable_Favorite : null
            ]}>
            <Text>{props.item.name}</Text>
        </TouchableOpacity>
    )
};

export default Item;
