import React from 'react';

import Summaryitem from '../../Components/Summaryitem/Summaryitem.component';

function Historyitem({data,add}) {
    return (
        <div className='hist'> 
            <div>
                <span><b>Order Amount: </b>₹{data.amount}</span>
            </div>
            <div>
                <span><b>Order Placed On: </b>{data.time}</span>
            </div>
            <div>
                <span><b>Address: </b>{add}</span>
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
