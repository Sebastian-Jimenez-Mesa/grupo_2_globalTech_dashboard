import './productList.css'
import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("https://globaltech-grupo2.herokuapp.com/apiProducts")
      .then((response) => response.json())
      .then(({data}) => {
        this.setState({ arrayDeP: data });
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
      <div className="productList container-sm">
        <h1>Listado de productos</h1>
        <table className='table table-striped'>
          <thead className='table-dark'>
            <tr>
              <th>ID/Link</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Categoria</th>
              <th>Imagen</th>
            </tr>
          </thead>
          <tbody>
            {this.state.arrayDeP.map((products) => (
              <tr key={products.id}>
                <td><a href={`https://globaltech-grupo2.herokuapp.com/apiProducts/${products.id}` } target= "_blank" rel='noreferrer'>{products.id}</a></td> 
                <td>{products.name}</td>
                <td>{products.description}</td>
                <td>{products.category}</td>
                <td><img src={`https://globaltech-grupo2.herokuapp.com/images/Productos/${products.image}`} alt="" width={150}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );

  }
}
export default ProductList;
