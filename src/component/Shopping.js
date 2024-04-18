import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Shopping({ index, title, image, overview }) {

    const [visible, setVisible] = useState(null);
    

    const handleDialog = (index) => {
        setVisible(true);
        
    };

    const handleCloseDialog = () => {
        setVisible(false);
    };

    const slicedTitle = title.length > 16 ? title.slice(0, 16) + '...' : title;

    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='grid'>
                        <div className="lg:col-4 w-full px-5 pt-5">
                            <Card title={slicedTitle} style={{ width: '100%', maxWidth: '300px', marginLeft: '10%' }} footer={<Button label="View" icon="pi pi-check" onClick={() => handleDialog(index)}/>} header={<img src={image} alt="Poster"  />}>
                                <Dialog header={title} visible={visible} onHide={handleCloseDialog} style={{ width: '35vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                                <div className='flex justify-content-center'><img alt="Card" src={image} style={{ height: '290px' }} /></div>
                                <p className="m-0">{overview}</p>
                                </Dialog>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
