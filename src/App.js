//material ui components
import { Container } from '@mui/material';
//custom components
import Appbar from './layout/Appbar';
import Products from './product/Products';

function App() {
  return (
    <div>
      <Appbar />
      <Container maxWidth='sm'>
        <Products />
      </Container>
    </div>
  );
}

export default App;
