import { Center, Spinner } from "native-base";

export function Loading() {
  return (
    <Center flex={1} bg="">
      <Spinner color="yellow.500" />
    </Center >
  );
}