import Announcement from './Announcement';
import GuestBook from './GuestBook';
import SearchBar from './SearchBar';
import DocList from './DocList';

function Index() {
  return (
    <div>
      <SearchBar />
      <div>
        <Announcement />
        <GuestBook />
      </div>
      <DocList type="new" />
      <DocList type="hot" />
    </div>
  );
}

export default Index;
