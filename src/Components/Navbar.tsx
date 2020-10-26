import React, {  useEffect, useState } from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { NavLink,  useHistory } from 'react-router-dom'
import '../ComponentsCss/Navbar.css'
import CSS from 'csstype';
import app from 'firebase/app'

export const NavBar: React.FC = () => {


  const style: CSS.Properties = {
    visibility: 'hidden',

  }

  const history = useHistory();

  const [inputTip, setTip] = useState<any[]>([])
  const [cardsArr, setCardArr] = useState<any[]>([])
  const [tipStyle, setStyle] = useState(style)
  const [inputVal, setInput] = useState('')


  useEffect(() => {
    //загрузка всех названий алкоголя 

    app.database().ref('cards').once('value', ((snap) => {
      snap.forEach((childSnap: any) => {
        setCardArr(prev => [...prev, childSnap.val().name])
      })
    }))
  }, [])


  const toolTip = (word: any) => {
    setTip([]);


    cardsArr.map((i) => {
      if (i.substr(0, word.length).toLowerCase() === word.toLowerCase()) {
        setTip(prev => [...prev, i])
      }
    })


    if (word === '') {
      setTip([])
    }

  }




  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to='/' id='cardLink'>Карточки</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/favorites" id='cardLink'>Избранное</NavLink></Nav.Link>
          </Nav>
          <Form inline>
            <div className="smartInput">

              <FormControl value={inputVal} type="text" placeholder="Search" className="mr-sm-2"
                onChange={(e) => { toolTip(e.target.value); setInput(e.target.value) }}
                onBlur={() => setStyle({ visibility: 'hidden' })}
                onFocus={() => setStyle({ visibility: 'visible' })}
                onKeyDown={(e: React.KeyboardEvent) => {if(e.key==='Enter'){history.push(`/request/${inputVal}`)}}  }
              />



              <div className="tip" style={tipStyle}>

                {inputTip.map((i) =>
                  <div className="item" onMouseDown={() => setInput(i)}>
                    <p className="toolTipItem">{i}</p>
                  </div>
                )}
              </div>
            </div>


            <NavLink to={`/request/${inputVal}`} id='cardLink'><Button variant="outline-success">Search</Button></NavLink>
          </Form>
        </Navbar.Collapse>
      </Navbar>

    </>
  )
}
//#FCDDC9 - peach