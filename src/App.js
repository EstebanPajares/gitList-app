import './App.css';
import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters'
import RepoList from './components/repo-list';
import Search from './components/search';

function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <Search/>
      <RepoList/>
    </Layout>
  );
}

export default App;
