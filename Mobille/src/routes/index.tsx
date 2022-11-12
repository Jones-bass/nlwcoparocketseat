import { Box } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './app.routes';

export function Routes() {

  return (
    <Box flex={1} bgColor="gray.900">
      <NavigationContainer>
        <AppRoutes /> 
      </NavigationContainer>
    </Box>
  );
}