import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import '../ComponentsCss/CreateCard.css'
import { add, selectCard } from '../Redux/Reducers/CardReducer'
import { useSelector, useDispatch } from 'react-redux';
import app from 'firebase/app'
import 'firebase/database'


export const ModalCard: React.FC = () => {

    const dispatch = useDispatch();


    const [show, setShow] = useState(false);
    const [url, setUrl] = useState('https://sun9-25.userapi.com/6V8SiT2jlInrAhZMB1mpC-vcHF_Y9-_hO71cQg/3WkpkZyoPQk.jpg')
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [type, SetType] = useState('Вино')
    const [discription, setDiscription] = useState('')


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const LoadPhoto = (e: any) => {
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0])

        reader.onload = function (e: any) {
            setUrl(e.target.result)

        }
        e.target.value = ''
    }


    const saveCard = () => {

        if (url === 'https://sun9-25.userapi.com/6V8SiT2jlInrAhZMB1mpC-vcHF_Y9-_hO71cQg/3WkpkZyoPQk.jpg') {
            return alert('Введите url картинки или загрузите файл')
        } else if (name === '') {
            return alert('Введите название')
        } else if (cost === '') {
            return alert('Введите стоимость')
        } else if (discription === '') {
            return alert('Введите описание продукта')
        }

        let link = app.database().ref('/cards').push().key;



        //загрузка сообщений на сервер
        app.database().ref('cards/' + link).update({
            url: url,
            name: name,
            cost: cost,
            type: type,
            discription: discription,
            stars: 0,
            id: link,
            dateOfCreation: new Date().toLocaleDateString(),
            favorites:false
        }).then(() => {
            //отправки сообщений в store
            dispatch(add({
                url: url,
                name: name,
                cost: cost,
                type: type,
                discription: discription,
                stars: 0,
                id: link,
                dateOfCreation: new Date().toLocaleDateString(),
                favorites:false
            }))
        })



        setShow(false)

    }

    // название 
    // цена 
    // описание 
    // тип алкоголя


    return (
        <div className="modalCard">


            <svg onClick={handleShow} id="plus-icon" fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px"><path fill-rule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path></svg>


            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Алкогольная карточка</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className="urlArea form-item">
                        <div className="uploadType">
                            <input type="file" accept="image/*" onChange={LoadPhoto} id="fileInput" />
                            <input type="text" placeholder='Введите url или загрузите файл' id="urlInput" onChange={(e) => setUrl(e.target.value)} />
                        </div>
                        <div className="imgArea">
                            <img src={url} alt="" className="photoPreview" />
                        </div>
                    </div>


                    <div className="name form-item">
                        <p>Введите название:</p>
                        <input type="text" className="input" onChange={(e) => setName(e.target.value)} />
                    </div>


                    <div className="type form-item">
                        <Form>
                            <Form.Group controlId="exampleForm.SelectCustom">
                                <Form.Label>Выберите тип алкоголя:</Form.Label>
                                <Form.Control as="select" custom onChange={e => SetType(e.target.value)}>
                                    <option>Вино</option>
                                    <option>Пиво</option>
                                    <option>Водка</option>
                                    <option>Коньяк</option>
                                    <option>Ром</option>
                                    <option>Текила</option>
                                    <option>Виски</option>
                                </Form.Control>
                            </Form.Group>
                        </Form>
                    </div>


                    <div className="cost form-item">
                        <p>Введите стоимость:</p>
                        <input type="text" className="input" value={cost} onChange={e => setCost(e.target.value.replace(/\D/, ''))} />
                    </div>


                    <div className="discription form-item">
                        <Form>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Описание напитка:</Form.Label>
                                <Form.Control as="textarea" rows={10} id="discriptionArea" onChange={e => setDiscription(e.target.value)} />
                            </Form.Group>
                        </Form>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={saveCard}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>

        </div>

    )
}