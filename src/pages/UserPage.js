import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }

  const [user, setUser] = useState(initialUserState);

  useEffect(() => {
    const getUser = async () => {

      const { data } = await axios(`https://api.github.com/users/${props.match.params.id}`);
      setUser(data);
      console.log(data);
    }

    getUser();
  }, []);

  return user.loading ? (
    <div>Loading...</div>
  ) : (
      <div className="container">
        <h1>{props.match.params.id}</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Repos</th>
              <th>Type</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{user.name}</td>
              <td>{user.public_repos}</td>
              <td>{user.type}</td>
              <td>{user.followers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
}