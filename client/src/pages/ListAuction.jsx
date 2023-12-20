import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CountdownTimer from "../components/CountdownTimer";

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

    return (
        <>
            <div className="overflow-x-auto mt-8 mb-8">
                <table className="table">
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
                                    <img src={product.imageUrl} alt={`Image ${index + 1}`} style={{ width: '50px' }} />
                                </td>
                                <td>Rp {product.currentBid}</td>
                                <td>
                                    {setDateFormat(product.timeLimit)}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListAuction;
