import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel } from 'primereact/carousel';
import axios from 'axios';
import 'primeicons/primeicons.css';
import { Dialog } from 'primereact/dialog';

export default function Painting() {

    const [visible, setVisible] = useState(false);
    const [selectedTitle, setSelectedTitle] = useState('');
    const [selectedOverview, setSelectedOverview] = useState('');
    const [selectedImage, setSelectedImage] = useState('');


    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const [movie, setMovie] = useState([]);

    const imageurl = "https://image.tmdb.org/t/p/w500/";

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=17a4e3b2288c4c18cc589cd94934e551`)
            .then(response => {
                setMovie(response.data.results);
            })
            .catch(error => {
                console.log('Error message:', error);
            });
    }, []);


   

    const handleCloseDialog = () => {
        setVisible(false);
        // setSelectedCard(null);
    };

    // Function to handle when a movie is selected
    const handleMovieSelection = (item) => {
        setSelectedTitle(item.title);
        setSelectedOverview(item.overview);
        setSelectedImage(imageurl + item.poster_path);
        setVisible(true);
    };

    const productTemplate = (item) => {
        return (
            <div className="m-2 text-center py-5 px-3" style={{ position: 'relative' }}>
                <div className="mb-3" style={{ position: 'relative' }}>
                    <img src={imageurl + item.poster_path} alt={item.title} className="w-10 shadow-2" />
                    
                    {/* Title and release date positioned on the left side */}
                    <div style={{ position: 'absolute', top: 0, left: '5%', right: '10%', paddingLeft: '10px', margin: '10px', color: 'white' }}>
                        <h4 className="mb-1 tit-hea" style={{ marginBottom: '1rem', fontSize: 30 }}>{item.title}</h4>
                        <h6 className="mt-0 mb-3" style={{ marginTop: '1rem' }}>${item.release_date}</h6>
                    </div>

                    {/* Button positioned at the bottom center */}
                    <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', marginBottom: '10px' }}>
                        <Button
                            label="Play"
                            className="play-but pi pi-caret-right"
                            onClick={() => handleMovieSelection(item)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="card">
            <h2 className='pl-5'>Upcoming Movies</h2>
            <Carousel
                value={movie}
                numVisible={3}
                numScroll={1}
                responsiveOptions={responsiveOptions}
                itemTemplate={productTemplate}
                circular
            />
            {/* Dialog component */}
            {/* <Dialog
                header={selectedTitle}
                visible={visible}
                style={{ width: '35vw' }}
                onHide={() => setVisible(false)}
                
            >
                <p className="m-0">
                <img src={selectedImage} alt={selectedTitle} style={{ height: '290px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} /><br/>
                    {selectedOverview}
                </p>
            </Dialog> */}

                <Dialog 
                header={selectedTitle}
                visible={visible} 
                onHide={handleCloseDialog} 
                style={{ width: '35vw' }} 
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                                <div className='flex justify-content-center'><img alt="Card" src={selectedImage} style={{ height: '290px' }} /></div>
                                <p className="m-0">{selectedOverview}</p>
                                </Dialog>



        </div>
    );
}
