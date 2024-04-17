import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../Components/Navbar/Navbar'
import './FakestoreApi.css'

export default function Api() {
    const [produits, setProduits] = useState([])

    const getProduits = async () => {
        await axios.get('https://fakestoreapi.com/products').then(result => {
            console.log(result.data)
            setProduits(result.data)
        }).catch(error => console.log(error));

    }

    useEffect(() => {
        getProduits();
    }, [])
    return (

        <>
            <Navbar />
            <section className="products">

                {produits.map((produit, index) => {
                    return (

                        <div>
                            <h3>{index}.{produit.title}</h3>
                            <p><img src={produit.image} alt="" /></p>
                        </div>

                    )

                }


                )}
            </section>

        </>
    )
}
