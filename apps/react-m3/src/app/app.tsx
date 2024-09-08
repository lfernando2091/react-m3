import styled from '@emotion/styled';
import { HomePage } from './pages/home/HomePage';

const StyledApp = styled.div`
  // Your style here
    margin: 3rem;
`;

export function App() {
  return (
    <StyledApp>
      <HomePage/>
    </StyledApp>
  );
}

export default App;
