import { useNavigation } from '@react-navigation/native';
import { Row, Text, Pressable } from 'native-base';

export function EmptyMyPoolList() {
  const { navigate } = useNavigation()

  return (
    <Row flexWrap="wrap" justifyContent="center" p={4}>
      <Text color="gray.200" fontSize="sm" textAlign="center">
        Você ainda não está participando de {'\n'} nenhum bolão, que tal
      </Text>

      <Pressable onPress={() => navigate('find')}>
        <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
          buscar um por código
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" mx={1}>
        ou 
      </Text>

      <Pressable onPress={() => navigate('new')}>
        <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
          criar um novo
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" textAlign="center" fontFamily="heading">
      </Text>
    </Row>
  );
}