import { Row, Text, Pressable } from 'native-base';
import { Share } from 'react-native';

interface Props {
  code: string;
}

export function EmptyMyPoolList({ code }: Props) {
  async function handleCodeShare() {
    await Share.share({
      message: code
    })
  }

  return (
    <Row flexWrap="wrap" justifyContent="center" p={4}>
      <Text color="gray.200" fontSize="sm" textAlign="center">
        Você ainda não está participando de {'\n'} nenhum bolão, que tal
      </Text>

      <Pressable onPress={handleCodeShare}>
        <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
          buscar um por código
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" mx={1}>
        ou
      </Text>

      <Pressable onPress={() => { }}>
        <Text textDecorationLine="underline" color="yellow.500" textDecoration="underline">
          criar um novo
        </Text>
      </Pressable>

      <Text color="gray.200" fontSize="sm" textAlign="center" fontFamily="heading">
        {code}
      </Text>
    </Row>
  );
}