import React from 'react'
import './Home.css'
import Product from '../Product/Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                 src='https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/June/M21/Hin/1500x600_Hero-Tall_JPN._CB664880312_.jpg'/>
            </div>
            <div className='home_row'>
                <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />
                <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />

            </div>
            <div className='home_row'>
            <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />
            <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />
            <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />


            </div>
            <div className='home_row'>
            <Product title='Me-O Cat Food' price={199} image='https://images-eu.ssl-images-amazon.com/images/I/51zB9hHx7IL._SX300_SY300_QL70_FMwebp_.jpg'
                rating={5} />
  

            </div>
            
        </div>
    )
}

export default Home
