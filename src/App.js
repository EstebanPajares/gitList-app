import Layout from './components/layout';
import Profile from './components/profile';
import Filters from './components/filters'
import RepoList from './components/repo-list';
import Search from './components/search';

const repoList = [
  {
    name : 'Primer Proyecto con React',
    id : 123,
  },
  {
    name : 'Segundo Proyecto con React',
    id : 543,
  },
]

function App() {
  return (
    <Layout>
      <Profile/>
      <Filters/>
      <RepoList repoList = {repoList}/>
      <Search/>
    </Layout>
  );
}

export default App;
