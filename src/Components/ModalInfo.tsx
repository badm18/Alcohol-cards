import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { CardInfo } from '../Interfaces/Interfaces';
import '../ComponentsCss/ModalInfo.css'

type IcardInfo = {
    cardInfo: CardInfo
}


export const DetailedInfo: React.FC<IcardInfo> = ({ cardInfo }) => {



    const [show, setShow] = useState(false);





    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (
        <>
            <Button variant="primary" onClick={handleShow}>Более подробно</Button>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Алкогольная карточка</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div className="top">
                        <div className="alcoImg">
                            <img src={cardInfo.url} alt="" id="acloImg" />
                            <h4>{`Оценка: ${cardInfo.stars}`}</h4>
                        </div>
                        <div className="topInfo">
                            <h1>{cardInfo.type} {cardInfo.name}</h1>
                            <h2>{`Стоимость ${cardInfo.cost} руб`}</h2>
                            <div className="discription">
                                <p>{cardInfo.discription}</p>
                            </div>
                        </div>
                    </div>


                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}