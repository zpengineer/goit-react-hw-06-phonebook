import Container from './Container';
import ContactsList from './ContactsList';
import Phonebook from './Phonebook';
import Filter from './Filter';

function App() {
  return (
    <Container>
      <h1>Phonebook</h1>

      <Phonebook />

      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Container>
  );
}

export default App;
