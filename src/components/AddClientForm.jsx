import { useState } from 'react';

// AddClientForm component allows the user to add a new client.
function AddClientForm({ onAddClient }) {
  // State variables to manage form inputs.
  const [name, setName] = useState(''); // Stores the client's name.
  const [email, setEmail] = useState(''); // Stores the client's email.
  const [industry, setIndustry] = useState(''); // Stores the client's industry.

  // Handles form submission.
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior.
    onAddClient({ name, email, industry }); // Passes the new client data to the parent component.
    setName(''); // Resets the name input field.
    setEmail(''); // Resets the email input field.
    setIndustry(''); // Resets the industry input field.
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input field for the client's name */}
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        placeholder="Client Name" 
        required 
      />
      
      {/* Input field for the client's email */}
      <input 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
        placeholder="Email" 
        type="email" 
        required 
      />
      
      {/* Input field for the client's industry */}
      <input 
        value={industry} 
        onChange={e => setIndustry(e.target.value)} 
        placeholder="Industry" 
        required 
      />
      
      {/* Submit button to add the client */}
      <button type="submit">Add Client</button>
    </form>
  );
}

export default AddClientForm;
