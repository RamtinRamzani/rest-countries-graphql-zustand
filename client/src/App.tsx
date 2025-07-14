import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import { ApolloProvider } from "@apollo/client";
import { client } from "./apollo/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;
