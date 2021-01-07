import React from 'react';

import Summaryitem from '../../Components/Summaryitem/Summaryitem.component';
import './Historyitem.style.scss';
function Historyitem({data,add}) {
    return (
        <div className='hist'> 
        <div className="HistData">
        <div className="HistDataitem">
                <b>Order Amount: </b>₹{data.amount}
            </div>
            <div className="HistDataitem">
                <b>Order Placed On: </b>{data.time}
            </div>
            <div className="HistDataitem">
                <b>Address: </b>{add}
            </div>
        </div>
           
                {
                data.cart?.map((pgd)=>((
                    <Summaryitem key={pgd.id} data={pgd} />
                )))
                }
        </div>
    )
}
export default Historyitem;
