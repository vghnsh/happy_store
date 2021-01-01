import React, {useEffect, useState } from 'react';

import {useStateValue} from '../../StateProvider';
import {db} from '../../firebase';
import Historyitem from '../../Components/Historyitem/Historyitem.component';
import './History.style.scss';

function History(){
    const [{user}]=useStateValue();
    const [history,setHistory]=useState();
    const [add, setAdd]= useState();

    useEffect(()=>{
        db.collection('users').doc(user?.uid).collection('orders')
        .onSnapshot((snapshot)=>
        setHistory(snapshot.docs.map((doc)=>(doc.data()))
        ));
       db.collection('users').doc(user?.uid).get().then(doc => setAdd(doc.data())); 
       
    },[user?.uid]);
    return (
        <div className='history'>
            <div className='product'>
            {
                 history?.map((pg)=>(
                    <Historyitem key={pg.id} add={add?.address} data={pg} />
                 ))
            }
            </div>
        </div>
    )
}

export default History;
