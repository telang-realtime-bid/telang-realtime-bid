const ListAuction = () => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td><img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/18e036402fb6f9a6fd805fbabad24f39/helix/01-APPLE-8DVPHAPP0-APPMGDL3ID-A-PacificBlueRevSS.jpg" alt="Image 1" style={{ width: '50px' }} /></td>
                            <td>$100</td>
                        </tr>
                        {/* <!-- row 2 --> */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            <td><img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/46f3b2ddfd2ff4f56a858f4aed015692/helix/01-APPLE-8DVLPAPP0-APPMYDC2ID-A-SilverRevSS.jpg" alt="Image 2" style={{ width: '50px' }} /></td>
                            <td>$150</td>
                        </tr>
                        {/* <!-- row 3 --> */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            <td><img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/796a057befc678808bbaf7f419f7ccc6/helix/01-APPLE-846EAAPP0-APPMPNY3ID-A-White.jpg" alt="Image 3" style={{ width: '50px' }} /></td>
                            <td>$120</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default ListAuction;
