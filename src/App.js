
import React, { useState } from 'react';
import './App.css';

function App() {
  const [customers, setCustomers] = useState([]);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addCustomer = () => {
    setCustomers([...customers, { id, name, surname }]);
    setId('');
    setName('');
    setSurname('');
    
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  const updateCustomer = (id) => {
    const index = customers.findIndex((customer) => customer.id === id);
    const updatedCustomers = [...customers];
    updatedCustomers[index] = { id, name, surname };
    setCustomers(updatedCustomers);
    setId('');
    setName('');
    setSurname('');
  };

  const showCustomer = (id) => {
    const customer = customers.find((customer) => customer.id === id);
    if (customer) {
      setId(customer.id);
      setName(customer.name);
      setSurname(customer.surname);
    }
  };

  return (
    <div className='App'>
      <h1>Müşteri Takip Sistemi</h1>
      <div>
        <label>İsim:</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Soyisim:</label>
        <input type='text' value={surname} onChange={(e) => setSurname(e.target.value)} />
      </div>
      <div>
        <label>Id:</label>
        <input type='text' value={id} onChange={(e) => setId(e.target.value)} />
      </div>
      <div>
        <button onClick={addCustomer}>Müşteri Ekle</button>
        <button onClick={() => deleteCustomer(id)}>Müşteri Sil</button>
        <button onClick={() => updateCustomer(id)}>Müşteri Güncelle</button>
      </div>
      <div>
        <button onClick={() => setCustomers([])}>Tüm Müşterileri Sil</button>
      </div>
      <div>
        <button onClick={() => setCustomers([{ id: '1', name: 'John', surname: 'Doe' }])}>Örnek Müşteri Ekle</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>İsim</th>
            <th>Soyisim</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} onClick={() => showCustomer(customer.id)}>
              <td>{customer.name}</td>
              <td>{customer.surname}</td>
              <td>{customer.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    );


}

export default App;



