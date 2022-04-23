import React from 'react';
import MainContainer from './components/Containers/MainContainer.jsx';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import './index.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <MainContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
