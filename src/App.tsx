import { AppContextProvider } from './components/AppContext/AppContext';
import { Layout } from './Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { MainRoutes } from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';


function App() {

  !getAllLocalStorage && createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
