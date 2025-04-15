import { useState } from 'react';
import AddClientForm from './components/AddClientForm';
import ClientList from './components/ClientList';
import IndustryFilter from './components/IndustryFilter';

// Main App component that manages the client dashboard.
function App() {
  // State to store the list of clients.
  const [clients, setClients] = useState([]);

  // State to store the selected industry filter.
  const [industry, setIndustry] = useState('All');

  // Function to add a new client to the list.
  const addClient = (client) => {
    setClients([...clients, client]); // Adds the new client to the existing list.
  };

  // Filters the clients based on the selected industry.
  const filteredClients = industry === 'All'
    ? clients // If "All" is selected, show all clients.
    : clients.filter(c => c.industry === industry); // Otherwise, filter by industry.

  return (
    <div>
      {/* Header for the client dashboard */}
      <h1>Client Dashboard</h1>

      {/* Form to add a new client */}
      <AddClientForm onAddClient={addClient} />

      {/* Dropdown to filter clients by industry */}
      <IndustryFilter setIndustry={setIndustry} />

      {/* List of clients, filtered by the selected industry */}
      <ClientList clients={filteredClients} />
    </div>
  );
}

export default App;
