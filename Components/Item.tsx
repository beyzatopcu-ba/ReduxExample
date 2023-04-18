import { Text, TouchableOpacity } from "react-native"
import styles from './styles/ItemStyles';

const Item = (props: { item: { id: number, name: string } }) => {
    return (
        <TouchableOpacity style={styles.itemTouchable}>
            <Text>{props.item.name}</Text>
        </TouchableOpacity>
    )
};

export default Item;
