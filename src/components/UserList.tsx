import React, { useEffect, useState } from 'react';
import styles from './UserList.module.css';

interface User {
  id: number;
  name: string;
  email: string; // Adicionando a propriedade email
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    };

    fetchUsers();
  }, []);

  return (
    <div className={styles.userList}>
      {loading ? (
        <p className={styles.loading}>Carregando...</p>
      ) : (
        <ul className={styles.ul}>
          {users.map((user) => (
            <li key={user.id} className={styles.li}>
              <div>
                <strong>{user.name}</strong>
                <p>Email: {user.email}</p> {/* Exibindo o email */}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
