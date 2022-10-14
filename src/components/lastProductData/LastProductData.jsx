import React from 'react'
import './lastProductData.css'

export default class lastProductData extends React.Component {
  
    state = {
        lastProduct: {},
    }

    async componentDidMount () {
        const url2 = 'https://globaltech-grupo2.herokuapp.com/apiLastProduct';
        const response2 = await fetch(url2);
        const totals2 = await response2.json();
        this.setState({
            lastProduct: totals2,
    })                      
        
    }

    render() {
        if (this.state.loading) {
            return <div></div>
        }

        if (!this.state.lastProduct) {
            return <div></div>
        }

        return (
            <div className='lastProductDataMainContainer'>
                <div className='lastProductDataItemsTitle'>
                    <h1>Ultimo producto registrado en Base de Datos</h1>
                </div>
                <div className='lastProductDataSubContainer'>
                    <div className='lastProductDataItem'>
                        <div className='lastProductDataItemContainer'>
                            <span className='lastProductDataItemTitle'>ID:</span>
                            <span className='lastProductDataItemValue'>{this.state.lastProduct.id}</span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                            <span className='lastProductDataItemTitle'>Nombre de producto:</span>
                            <span className='lastProductDataItemValue'>{this.state.lastProduct.name} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Descripción:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.description} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Categoria:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.category} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Precio:</span>
                        <span className='lastProductDataItemValue'>{this.state.lastProduct.price} </span>
                        </div>
                        <div className='lastProductDataItemContainer'>
                        <span className='lastProductDataItemTitle'>Imagen:</span>
                        <span className='lastProductDataItemValue'><img src= {`https://globaltech-grupo2.herokuapp.com/images/Productos/${this.state.lastProduct.image}`} alt=""/></span>
                        </div>
                 </div>
                </div>
                </div>
        )
        
    }
}