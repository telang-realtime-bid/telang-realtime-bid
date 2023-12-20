import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListAuction = () => {
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {

        const fetchUserProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/list`, {
                    headers: { Authorization: 'Bearer ' + localStorage.access_token },
                });
                setUserProducts(response.data);
            } catch (error) {
                console.error('Error fetching user products:', error);
            }
        };

        fetchUserProducts();
    }, []);

    function setDateFormat(value) {
        let date = new Date(value);
        let year = date.getFullYear();
        let month = `${date.getMonth() + 1}`.padStart(2, '0')
        let day = `${date.getDate()}`.padStart(2, '0')
        return `${year}-${month}-${day}`
    }

    function setCurrency(price) {
        return price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })
      }

    return (
        <>
            <section className='p-10'>
                <div className="mockup-window border bg-base-300 p-10 flex flex-col items-center">
                    <h2 className="font-bold mb-7 text-2xl text-primary-500">Add Your Auction</h2>
                </div>
                <div className="overflow-x-auto mt-8 mb-8">
                    <table className="table bg-base-300">
                        {/* <!-- head --> */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Current Bid</th>
                                <th>Time Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userProducts.map((product, index) => (
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{product.name}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <img src={product.imageUrl} alt={`Image ${index + 1}`} style={{ width: '200px' }} />
                                    </td>
                                    <td>{setCurrency(product.currentBid)}</td>
                                    <td>
                                        {setDateFormat(product.timeLimit)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    );
}

export default ListAuction;
