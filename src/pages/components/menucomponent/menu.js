import './menu.scss'
import logo from '../../../assets/logo.png'
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LateralMenu() {

    return (
        <div className='MainMenu'>
            <div className='content'>

                <div className='imgEx'>
                    <img src={logo} />
                    <h3>Elite<span>Wheels</span></h3>
                </div>

                    <div className='options' >
                <Link to='/'>
                        <div id='selected' >
                        <i class="fa-solid fa-house"></i>
                            <a>Home</a>
                        </div>
                </Link>

                <Link to='/clientsControl'>
                    <div id='selected'>
                        <i class="fa-solid fa-user"></i>
                        <a>Clientes</a>
                    </div>
                </Link>
                <Link to='/carcontrol'>
                <div id='selected'>
                    <i class="fa-solid fa-car-rear"></i>
                    <a>Veiculos</a>
                </div>
                </Link>
                <Link to='/location'>

                <div id='selected'>
                    <i class="fa-solid fa-key"></i>
                    <a>Locação</a>
                </div>
                </Link>

            </div>
        </div>  
        </div >)
}