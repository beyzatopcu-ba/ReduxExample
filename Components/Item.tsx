import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles/ItemStyles';
import { ACTION_CREATORS, ACTION_TYPES, SELECTORS } from "../Redux/FavoriteRedux";
import { favoriteSelectors, favoriteSlice } from "../Redux/FavoriteReduxToolkit";

const Item = (props: { item: { id: number, name: string } }) => {

    const isFavorite = useSelector(favoriteSelectors.isItemFavorite(props.item.id));
    const dispatch = useDispatch();


    const _onPress = () => {
        if (!isFavorite) {
            /*
            Eski yöntem
            dispatch(ACTION_CREATORS.addToFavoriteList(props.item.id));
            */
           dispatch(favoriteSlice.actions.addToFavoriteList(props.item.id));
        }
        else {
            /*
            Eski yöntem
            dispatch({
                type: ACTION_TYPES.removeFromFavoriteList,
                payload: props.item.id,
            });
            */
           dispatch(favoriteSlice.actions.removeFromFavoriteList(props.item.id));
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
