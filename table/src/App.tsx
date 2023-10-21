import React, { useState } from 'react';

interface Row {
  id: string;
  name: string;
  email: string;
}

const DynamicTable = () => {
  const [data, setData] = useState<Row[]>([
    { id: '1', name: 'Ahsan', email: 'Ahsan@gmail.com' },
    { id: '2', name: 'Ali', email: 'Ali@gmail.com' },
    { id: '3', name: 'Akbar', email: 'Akbar@gmail.com' },
  ]);

  const [newRow, setNewRow] = useState<Row>({ id: '', name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e: any, fieldName: string) => {
    setNewRow({ ...newRow, [fieldName]: e.target.value });
  };

  const addRow = () => {
    setData([...data, { ...newRow, id: (data.length + 1).toString() }]);
    setNewRow({ id: '', name: '', email: '' });
  };

  const saveEdit = () => {
    setData(data.map((row) => (row.id === newRow.id ? newRow : row)));
    setNewRow({ id: '', name: '', email: '' });
    setIsEditing(false);
  };

  const startEdit = (id: string, name: string, email: string) => {
    setIsEditing(true);
    setNewRow({ id, name, email });
  };

  const deleteRow = (id: string) => {
    setData(data.filter((row) => row.id !== id));
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>
                <button onClick={() => startEdit(row.id, row.name, row.email)}>Edit</button>
                <button onClick={() => deleteRow(row.id)}>Delete</button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                placeholder="ID"
                value={newRow.id}
                onChange={(e) => handleInputChange(e, 'id')}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Name"
                value={newRow.name}
                onChange={(e) => handleInputChange(e, 'name')}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Email"
                value={newRow.email}
                onChange={(e) => handleInputChange(e, 'email')}
              />
            </td>
            <td>
              {isEditing ? (
                <button onClick={saveEdit}>Save</button>
              ) : (
                <button onClick={addRow}>Add</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DynamicTable;




