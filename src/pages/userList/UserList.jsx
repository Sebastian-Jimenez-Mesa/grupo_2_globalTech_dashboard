import './userList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";

class UserList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeU: [],
    };
  }

  componentDidMount() {
    fetch("https://globaltech-grupo2.herokuapp.com/apiUsers")
      .then((response) => response.json())
      .then(({data}) => {
        this.setState({ arrayDeU: data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="productList container-sm">
        <h1>Listado de usuarios</h1>
        <table className='table table-striped'>
          <thead className= 'table-dark'>
            <tr>
              <th>ID</th>
              <th>Email</th>
              <th>Nombre</th>
              <th>Nombre de usuario</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayDeU.map((users) => (
              <tr key={users.id}>
                <td>{users.id}</td>
                <td>{users.email}</td>
                <td>{users.name}</td>
                <td>{users.user}</td>
                <td><img src={`https://globaltech-grupo2.herokuapp.com/images/images_user/${users.imagen}`} alt="" width={150}/></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  }
}
export default UserList;
