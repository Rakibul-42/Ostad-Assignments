import Page from "./pages/Page";
import ApiProvider from "./provider/ApiProvider";
import NewsDataProvider from './provider/NewsDataProvider';

const App = () => {
  return (
    <>
      <ApiProvider>
        <NewsDataProvider>
          <Page />
        </NewsDataProvider>
      </ApiProvider>
    </>
  );
};

export default App;