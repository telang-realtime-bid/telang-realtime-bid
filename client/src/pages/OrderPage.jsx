import React from "react";

const OrderPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="overflow-x-auto max-w-screen-md">
        <table className="table w-full lg:w-3/4 xl:w-4/5 2xl:w-3/4">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Amount Bid</th>
              <th>Status</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24 md:w-32 md:h-32">
                    <img
                      src="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_air_15_3_inci_m2_2023_starlight_1_4.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  (name.product)
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg">Rp.5.000.000,-</div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  Sold/Available
                </div>
              </td>
              <td>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-xs">Paid</button>
                  <button className="btn btn-ghost btn-xs">UnPaid</button>
                </div>
              </td>
            </tr>
             {/* row 2 */}
             <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24 md:w-32 md:h-32">
                    <img
                      src="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_air_15_3_inci_m2_2023_starlight_1_4.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  (name.product)
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg">Rp.5.000.000,-</div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  Sold/Available
                </div>
              </td>
              <td>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-xs">Paid</button>
                  <button className="btn btn-ghost btn-xs">UnPaid</button>
                </div>
              </td>
            </tr>
             {/* row 3 */}
             <tr>
              <td className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-24 h-24 md:w-32 md:h-32">
                    <img
                      src="https://cdn.eraspace.com/media/catalog/product/m/a/macbook_air_15_3_inci_m2_2023_starlight_1_4.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  (name.product)
                </div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg">Rp.5.000.000,-</div>
              </td>
              <td>
                <div className="font-bold text-m md:text-lg max-w-lg lg:max-w-md">
                  Sold/Available
                </div>
              </td>
              <td>
                <div className="flex gap-1">
                  <button className="btn btn-ghost btn-xs">Paid</button>
                  <button className="btn btn-ghost btn-xs">UnPaid</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
