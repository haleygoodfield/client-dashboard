import './ClientList.css';

// ClientList component displays a list of clients.
function ClientList({ clients }) {
    return (
      <ul>
        {/* Iterate over the clients array and render each client as a list item */}
        {clients.map(c => (
          <li key={c.email}>
            {/* Display the client's name, email, and industry */}
            <strong>{c.name}</strong> – {c.email} ({c.industry})
          </li>
        ))}
      </ul>
    );
}

export default ClientList;

