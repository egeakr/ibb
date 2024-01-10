"use client"
import React, { useState, useEffect } from 'react';
import './styles.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Button } from "@nextui-org/react";

const Text = () => {


    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [selectedOption, setSelectedOption] = useState('BuyukBaslik');
    const [selected, setSelected] = useState('BuyukBaslik');
    const [image, setImage] = useState([]);

    const [textAreaContent, setTextAreaContent] = useState('At w3schools.com you will.');
    useEffect(() => {
        const titleText = document.querySelector('.title').textContent;
        // setSelectedOption(titleText);
    }, []);
    console.log(selectedOption);
    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setSelected(event.target.value)
    };

    const handleEkleButtonClick = () => {
        const newTitle = document.querySelector('.textarea').value;
        const image23 = document.querySelector('.input').value;



        if (selectedOption === 'BuyukBaslik') {
            const h1Elements = document.getElementsByClassName("title");
            const h1Element = h1Elements.length > 0 ? h1Elements[0] : null;
            if (h1Element.innerHTML.trim() === "") {
                h1Element.textContent = newTitle;
            } else {
                alert("H1 başlığı zaten dolu!");
            }
        }
        else if (selectedOption === 'KucukBaslik') {

            if (selectedOption === 'KucukBaslik') {

                const h2 = document.createElement('h2');
                h2.textContent = newTitle;
                document.querySelector('.container').appendChild(h2);
            }
        }
        else if (selectedOption === 'paragraf') {
            if (selectedOption === 'paragraf') {

                const p = document.createElement('p');
                p.textContent = newTitle;
                document.querySelector('.container').appendChild(p);
            }
        }
        else if (selectedOption === 'Resim') {

            const img = document.createElement('img');
            img.src = image23;
            document.querySelector('.container').appendChild(img);
        }

    };

    return (
        <div className='container'>
            <Box sx={{ Width: 120 }}>
                <FormControl fullWidth>
                    {/* <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        Seçenekler
                    </InputLabel> */}
                    <NativeSelect





                        onChange={handleOptionChange}
                        value={selectedOption}
                        inputProps={{
                            name: 'secenk',
                            id: 'uncontrolled-native',

                        }}
                    >
                        <option value="BuyukBaslik" defaultChecked>Büyük Başlık</option>
                        <option value="KucukBaslik">Küçük Başlık</option>
                        <option value="paragraf">Paragraf</option>
                        <option value="Resim">Resim</option>
                    </NativeSelect>
                </FormControl>
            </Box>
            <div style={{ display: selected != 'Resim' ? 'block' : 'none' }}>
                <textarea
                    className='textarea'
                    name="w3review"
                    rows="4"
                    cols="50"
                    style={{ resize: "auto" }}
                //defaultValue={textAreaContent}
                />
            </div>
            <div style={{ display: selected != 'BuyukBaslik' && selected != 'KucukBaslik' && selected != 'paragraf' ? 'block' : 'none' }}>
                <input className='input' type="file" onChange={(e) => {
                    // console.log(e.target.files[0]);

                    const reader = new FileReader();
                    reader.readAsDataURL(e.target.files[0]);
                    reader.onloadend = () =>{
                        setImage(reader.result);
                    }
                    console.log(reader);

                }} />
            </div>

            <div className='btn'>
                <Button
                    className='btn-1'
                    color="primary"
                    onClick={handleEkleButtonClick}
                >
                    Ekle
                </Button>
            </div>

            <h1 className='title'></h1>
            <h2 className='title2'></h2>
            <img className="img-fluid" src={image} alt="" width={100} height={100} />
        </div>
    );
}

export default Text;
