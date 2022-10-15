import React, { Component } from "react";
import './categoriesTable.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class ProdXCat extends Component {
  constructor() {
    super();
    this.state = {
      arrayDeP: [],
    };
  }

  componentDidMount() {
    fetch("https://globaltech-grupo2.herokuapp.com/apiCategory")
      .then((response) => response.json())
      .then(({data}) => {
        this.setState({ arrayDeP: data });
      })
      .catch((error) => console.log(error));
  }
  render() {
    return (
        <div className="categoriesTable container-sm">
            <h1>Listado de categorias</h1>
            <table className="table table-striped">
                <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>Descripción</th>
                        <th>Total de productos por categoria</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.arrayDeP.map((categoria) => (
                        <tr key={categoria.id}>
                            <td>{categoria.id}</td>
                            <td>{categoria.category}</td>
                            <td>{categoria.totalProducts}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );

    }
}

export default ProdXCat;
