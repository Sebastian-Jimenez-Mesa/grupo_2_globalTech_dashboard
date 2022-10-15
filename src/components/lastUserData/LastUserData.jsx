import React from 'react'
import './lastUserData.css'

export default class lastUserData extends React.Component {
  
    state = {
        lastUser: {},

    }

    async componentDidMount () {
        const url = 'https://globaltech-grupo2.herokuapp.com/apiLastUser';
        const response = await fetch(url);
        const totals = await response.json();
        this.setState({
            lastUser: totals,
        })

    }

    render() {
        if (this.state.loading) {
            return <div></div>
        }
        if (!this.state.lastUser) {
            return <div></div>
        }
        
        return (
            <div className='lastUserDataMainContainer'>
                <div className='lastUserDataItemsTitle'>
                    <h1>Ultimo usuario registrado en Base de Datos</h1>
                </div>
                <div className='lastUserDataSubContainer'>
                        <div className='lastUserDataItemContainer'>
                            <span className='lastUserDataItemTitle'>Nombre:</span>
                            <span className='lastUserDataItemValue'>{this.state.lastUser.name}</span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                            <span className='lastUserDataItemTitle'>Apellido:</span>
                            <span className='lastUserDataItemValue'>{this.state.lastUser.lastName}</span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                        <span className='lastUserDataItemTitle'>Email:</span>
                        <span className='lastUserDataItemValue'>{this.state.lastUser.email} </span>
                        </div>
                        <div className='lastUserDataItemContainer'>
                        <span className='lastUserDataItemTitle'>Imagen:</span>
                        <span className='lastUserDataItemValue'><img src= {this.state.lastUser.url_image} alt=""/></span>
                        </div>                        
                    </div>
                </div>
        )
        
    }
}
