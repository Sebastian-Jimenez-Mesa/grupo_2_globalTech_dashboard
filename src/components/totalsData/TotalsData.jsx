import React from 'react'
import './totalsData.css'

export default class totalsDataInfo extends React.Component {
  
    state = {
        loading: true,
        usersCount: 0,
        productsCount: 0,
        categoriesCount: 0
    
    }

    async componentDidMount () {
        const url1 = 'https://globaltech-grupo2.herokuapp.com/apiUsers';
        const response1 = await fetch(url1);
        const totals1 = await response1.json();
        this.setState({
            loading: false,
            usersCount: totals1
        })
        const url2 = 'https://globaltech-grupo2.herokuapp.com/apiProducts';
        const response2 = await fetch(url2);
        const totals2 = await response2.json();
        this.setState({
            loading: false,
            productsCount: totals2
        })
        const url3 = 'https://globaltech-grupo2.herokuapp.com/apiCategory';
        const response3 = await fetch(url3);
        const totals3 = await response3.json();
        this.setState({
            loading: false,
            categoriesCount: totals3
        })
        
    }

    render() {

        return (
            <div className='totalsDataMainContainer'>
                <div className='totalsDataItemsTitle'>
                    <h1>TOTAL DE DATOS</h1>
                </div>
                <div className='totalsDataSubContainer'>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total de Usuarios</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.usersCount.count}</span>
                        </div>
                    </div>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total de Productos</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.productsCount.count}</span>                          
                        </div>
                    </div>
                    <div className='totalsDataItem'>
                        <span className='totalsDataItemTitle'>Total de Categorías</span>
                        <div className='totalsDataItemContainer'>
                            <span className='totalsDataItemValue'>{this.state.categoriesCount.countCategories}</span>
                        </div> 
                    </div>
                </div>
            </div>
        )
        
    }
}
