import React, { useState } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export default function Shopping({ index, title, image, overview }) {

    const [visible, setVisible] = useState(null);
    // const [selectedCard, setSelectedCard] = useState(null);

    const handleDialog = (index) => {
        setVisible(true);
        // setSelectedCard(index);
    };

    const handleCloseDialog = () => {
        setVisible(false);
        // setSelectedCard(null);
    };

    return (
        <section>
            <div className='container'>
                <div className='row'>
                    <div className='grid'>
                        <div className="lg:col-4 w-full px-5 pt-5">
                            <Card title={title} style={{ width: '100%', height: '100%', maxWidth: '300px', marginLeft: '10%' }} footer={<Button label="Save" icon="pi pi-check" onClick={() => handleDialog(index)}/>} header={<img src={image} alt="Poster" style={{ width: '100%', height: '50%' }} />}>
                                <div className="card-content" style={{ width: '100%' }}>
                                    {/* Your additional content */}
                                    <p style={{ width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxHeight: '3em' }}>
                                        {overview}
                                    </p>
                                </div>
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
