import './App.css';

import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'

import logoSVG from './assets/icono_mobility_blanco.svg'
import mySvg2 from './assets/IND_MOV_BASICO_30MIN.svg'
import mySvg3 from './assets/icono_mobility_color.svg'
import mySvg4 from './assets/IND_ACTIV_BASICO_30MIN_1_ESPACIO_JUEGOS.svg'
import mapSvg from './assets/mapa_a1_espaciopremium.svg'
import mapb2SVG from './assets/mapa_b2_espaciodejuegos.svg'



function App() {

  const navigate = useNavigate()
  const [expodata, setExpodata] = useState([]);
  const [gamesData, setGamesData] = useState([]);
  const [futureData, setFutureData] = useState([]);
  const [moviRetoData, setMoviRetoData] = useState([]);
  const [mueveteData, setMueveteData] = useState([]);
  const [expoActualData, setExpoActualData] = useState([])
  const [espacioPremium, setEspacioPremium] = useState([])
  const [nuevaMovilidad, setNuevaMovilidad] = useState([])
  const [polivalenteData, setPolivalenteData] = useState([])
  const [mundoMovilidadData, setMundoMovilidadData] = useState([])
  const [infoSpotData, setInfoSpotData] = useState([])
  const [showroomData, setShowroomData] = useState([])

  useEffect(() => {
    fetch('https://wordpress.nexus.com/wp-json/wp/v2/posts/?per_page=100')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        console.log(data[0].content.rendered.split('\n'));
        console.log(data[0].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[1].content.rendered.split('\n'));
        console.log(data[1].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[2].content.rendered.split('\n'));
        console.log(data[2].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[3].content.rendered.split('\n'));
        console.log(data[3].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[4].content.rendered.split('\n'));
        console.log(data[4].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[5].content.rendered.split('\n'));
        console.log(data[5].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[6].content.rendered.split('\n'));
        console.log(data[6].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[7].content.rendered.split('\n'));
        console.log(data[7].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[8].content.rendered.split('\n'));
        console.log(data[8].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[9].content.rendered.split('\n'));
        console.log(data[9].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[10].content.rendered.split('\n'));
        console.log(data[10].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));
        console.log(data[11].content.rendered.split('\n'));
        console.log(data[11].content.rendered.split('\n')[1].replace(/(<([^>]+)>)/ig, ""));

        setShowroomData(data[0].content.rendered.split('\n'));
        setInfoSpotData(data[1].content.rendered.split('\n'))
        setMundoMovilidadData(data[2].content.rendered.split('\n'))
        setPolivalenteData(data[3].content.rendered.split('\n'))
        setNuevaMovilidad(data[4].content.rendered.split('\n'))
        setEspacioPremium(data[5].content.rendered.split('\n'))
        setExpoActualData(data[6].content.rendered.split('\n'))
        setMueveteData(data[7].content.rendered.split('\n'))
        setMoviRetoData(data[8].content.rendered.split('\n'));
        setFutureData(data[9].content.rendered.split('\n'));
        setGamesData(data[10].content.rendered.split('\n'));
        setExpodata(data[11].content.rendered.split('\n'));
      })
      .catch(error => {
        console.error(error)
      });
  }, []);

  function Home() {

    const [isVisible, setIsVisible] = useState(false)

    const handleClick = () => {
      setIsVisible(true)
    }
    return (
      <div className="home-view">
        <h2 className="welcome-subtitle">WELCOME</h2>
        <h1 className="welcome-title">
          BIENVENIDOS
        </h1>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="vertical-center" onClick={handleClick}>
          <img src={logoSVG} alt="My SVG" className="img-fluid MainLogo p-1" />
          {isVisible && (
            <div className="toggle-menu">
              <div className="row">
                <Link to="/visit">
                  <button type="button" className="btn homeButton mt-5 p-1 mx-auto">Visita guiada</button>
                </Link>
              </div>
              <div className="row">
                <Link to="/exposition">
                  <button type="button" className="btn homeButton mt-5 p-1 mx-auto">Exposiciones</button>
                </Link>
              </div>
              <div className="row">
                <Link to="/programacion">
                  <button type="button" className="btn homeButton mt-5 p-1 mx-auto">Agenda</button>
                </Link>
              </div>
              <div className="row">
                <Link to="/mapa">
                  <button type="button" className="btn homeButton mt-5 p-1 mx-auto">Mapa</button>
                </Link>
              </div>
              <Icons />
            </div>
          )}
        </div>
      </div>
    )
  }

  function Visit() {
    const [currentGroup, setCurrentGroup] = useState('group1');
    const [selectedOption, setSelectedOption] = useState([])


    const handleClick = (currentGroup, option) => {
      setCurrentGroup(currentGroup);
      setSelectedOption([...selectedOption, option])
      console.log("selectedOptions", selectedOption)
    }



    return (
      <div className="visit-view">
        <div className="visit-header">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <img src={logoSVG} alt="My SVG" className="img-fluid p-1" />
          <h1 className='visit-title'>VISITA GUIADA</h1>
          <p className="visit-text1">
            Seleccione las necesidades que más se adecúen a tus necesidades para poder personalizar tu visita
          </p>
        </div>
        <div className='toggle-menu-btn-group'>
          {currentGroup === 'group1' && (
            <div className="">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="visit-head-text1">TIPO DE VISITA</h2>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick("group2", "VISITA INDIVIDUAL")}>Individual</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick("group2", "FAMILIA CON NIÑOS")}>Familia con niños</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick("group2", "VISITA EN GRUPO")}>Grupo</button>
                </div>
              </div>
            </div>
          )}
          {currentGroup === 'group2' && (
            <div className="">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="visit-head-text1">INTERESES</h2>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick('group3', "INTERES EN MOVILIDAD")}>Movilidad</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleClick("group3", "INTERES EN EXPOSICIONES")}>EXPOSICIONES</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleClick("group3", "INTERES EN ACTIVIDADES")}>JUEGOS Y ACTIVIDADES</button>
                </div>
              </div>
            </div>
          )}
          {currentGroup === 'group3' && (
            <div className="">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="visit-head-text1">NIVEL</h2>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick('group4', "NIVEL BÁSICO")}>BÁSICO</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleClick('group4', "NIVEL AVANZADO")}>AVANZADO</button>
                </div>
              </div>
            </div>
          )}
          {currentGroup === 'group4' && (
            <div className="">
              <div className="container-fluid">
                <div className="row">
                  <h2 className="visit-head-text1">TIEMPO DISPONIBLE</h2>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleClick("group5", "EN 30 MIN")}>30 MIN</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleClick("group5", "EN 60 MIN")}>60 MIN</button>
                </div>
                <div className="row">
                  <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleClick("group5", "MÁS de 60 MIN")}>MÁS de 60 MIN</button>
                </div>
              </div>
            </div>
          )}
          {currentGroup === 'group5' && (
            navigate("/guidedvisit", { state: { selectedOption } })
          )}
        </div>
        <Icons />
      </div>
    )
  }

  function Guidedvisit() {

    const location = useLocation()
    const selectedOption = location.state.selectedOption
    console.log("selectedOptions guided", selectedOption)

    return (
      <div className='guided-visit-body'>
        <div className='guided-vist-header'>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <img src={logoSVG} alt="My SVG" className="img-fluid p-1 guided-visit-logo" />
          <h1 className='visit-title1'>VISITA GUIADA</h1>
        </div>
        <div className='guided-visit-content'>
          <p className="guided-visit-head-text">{selectedOption[0]}<br></br>{selectedOption[1]}<br></br> {selectedOption[2]} <br></br> {selectedOption[3]}</p>
          <div className="guided-visit-map-container">
            <img src={mySvg2} alt="My SVG" className="img-fluid" />
            <div className='guided-visit-btn-group'>
              <div className="row">
                <Link to="/plantone">
                  <button type="button" className="guided-visit-btn">Empezar</button>
                </Link>
              </div>
              <div className="row">
                <Link to="/">
                  <button type="button" className="guided-visit-btn"> VOLVER </button>
                </Link>
              </div>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function Exposition() {



    const handleExposition = () => {
      navigate("/expo-actual")
    }

    return (
      <div>
        <div className='exposition-header'>
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <div className="exposition-title">
            <img src={logoSVG} alt="logo" className="exposition-logo" />
            <h1>EXPOSICIONES</h1>
          </div>
        </div>
        <div className='exposition-content'>
          <div className='exposition-content-scroll'>
            <h2>ACTUAL</h2>
            <div className='exposition-actual'>
              <img src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg" alt="imagen" />
              <button className='exposition-actual-button' onClick={() => handleExposition()}>
                <p>SMART MOBILITY &gt;</p>
                <p>14 enero - 29 enero</p>
              </button>
            </div>
            <h3>ANTERIORES</h3>
            <Container fluid={true}>
              <Row>
                <Col md={{ span: 1, offset: 1 }}>
                  <div className='exposition-button-container'>
                    <img className='prev-img' src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg" alt="imagen" />
                    <button className='exposition-prev-button' onClick={() => handleExposition()}>
                      <p>LA CIUDAD &gt;</p>
                      <p>DEL FUTURO</p>
                    </button>
                  </div>
                </Col>
                <Col md={{ span: 1, offset: 5 }}>
                  <div className='exposition-button-container'>
                    <img className='prev-img' src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg" alt="imagen" />
                    <button className='exposition-prev-button-2' onClick={() => handleExposition()}>
                      <p>LA CIUDAD &gt;</p>
                      <p>DEL FUTURO</p>
                    </button>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={{ span: 1, offset: 1 }}>
                  <div className='exposition-button-container'>
                    <img className='prev-img' src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg" alt="imagen" />
                    <button className='exposition-prev-button-3' onClick={() => handleExposition()}>
                      <p>LA CIUDAD &gt;</p>
                      <p>DEL FUTURO</p>
                    </button>
                  </div>
                </Col>
                <Col md={{ span: 1, offset: 5 }}>
                  <div className='exposition-button-container'>
                    <img className='prev-img' src="https://static1.diariovasco.com/www/multimedia/202010/27/media/cortadas/ateca-kJtF-U120582291838eyG-624x385@RC.jpg" alt="imagen" />
                    <button className='exposition-prev-button-4' onClick={() => handleExposition()}>
                      <p>LA CIUDAD &gt;</p>
                      <p>DEL FUTURO</p>
                    </button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function ExpoActual() {
    const handleActualExpo = () => {
      navigate(-1)
    }
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{expoActualData[1].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{expoActualData[5].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {expoActualData[5].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {expoActualData[9].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {expoActualData[13].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto' onClick={handleActualExpo}> &lt; Volver </Button>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function Mapa(props) {
    const imageRef = useRef(null);

    useEffect(() => {
      console.log("Map working");
      console.log(imageRef);
    }, [])

    useEffect(() => {
      const image = imageRef.current;
      let isDragging = false;
      let initialX;
      let initialY;
      let currentX;
      let currentY;

      const handleMouseDown = (event) => {
        initialX = event.clientX - image.offsetLeft;
        initialY = event.clientY - image.offsetTop;
        isDragging = true;
      };

      const handleMouseUp = (event) => {
        isDragging = false;
      };

      const handleMouseMove = (event) => {
        if (isDragging) {
          event.preventDefault();
          currentX = event.clientX - initialX;
          currentY = event.clientY - initialY;

          image.style.top = `${currentY}px`;
          image.style.left = `${currentX}px`;
        }
      };

      image.addEventListener('mousedown', handleMouseDown);
      image.addEventListener('mouseup', handleMouseUp);
      image.addEventListener('mousemove', handleMouseMove);

      return () => {
        image.removeEventListener('mousedown', handleMouseDown);
        image.removeEventListener('mouseup', handleMouseUp);
        image.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    return (
      <div className="guidedVisit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <img src={mySvg3} alt="My SVG" className="img-fluid VisitLogo p-1" />
        <h1 className="guidedVisit-title">
          MAPA MOBILITY
        </h1>
        <div className="navigable-map">
          <img src={mySvg4} alt="My svg2 is not showing" className="img-fluid games-map w-100 " ref={imageRef} />
        </div>
        <div className="map-text">
          <p>Selecciona el espacio que quieras visitar para acceder a su información.</p>
          <br></br>
          <ul>
            <li>Planta 0</li>
            <li>Planta 1</li>
          </ul>
        </div>
        <div className="container-fluid guidedVisit-container m-5">
          <nav className="navbar fixed-bottom m-5 guided-navbar">
            <div className="row">
              <img src={mapSvg} alt="My SVG" className="img-fluid mini-game p-1" />
            </div>
          </nav>
        </div>
        <Icons />
      </div>
    )
  }

  function Programacion() {
    const [currentGroup, setCurrentGroup] = useState('group1');
    const [selectedOption, setSelectedOption] = useState([])

    const handleProgramacion = (currentGroup, option) => {
      setCurrentGroup(currentGroup);
      setSelectedOption([...selectedOption, option])
      console.log("selectedOptions", selectedOption)
    }



    const buttons = [1, 2, 3, 4, 5, 6, 7];
    return (
      <div className="visit-view">
        <div className="visit-header">
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"></link>
          <div >

          </div>
          <img src={logoSVG} alt="My SVG" className="img-fluid p-1" />
          <h1 className='visit-title'>PROGRAMACIÓN</h1>
          <div id="centerprogbut">
            {buttons.map((button) => (

              <button className="prog-button" key={button} onClick={() => handleProgramacion(button)}>
                D {button}
              </button>
            ))}
          </div>
          {<div className='toggle-menu-btn-group' id="programacion-group">
            {/*CÓDIGO COMENTADO NECESARIO PARA TRANSICIÓN CUANDO HAYA CONTENIDO */}
            {/* {currentGroup === 'group1' && (
                    <div className="">
                        <div className="container-fluid">
                            <div id="prog-buttons-box">

                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion("group2", "VISITA INDIVIDUAL")}>Individual</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion("group2", "FAMILIA CON NIÑOS")}>Familia con niños</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion("group2", "VISITA EN GRUPO")}>Grupo</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentGroup === 'group2' && (
                    <div className="">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="visit-head-text1">INTERESES</h2>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion('group3', "INTERES EN MOVILIDAD")}>Movilidad</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleProgramacion("group3", "INTERES EN EXPOSICIONES")}>EXPOSICIONES</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleProgramacion("group3", "INTERES EN ACTIVIDADES")}>JUEGOS Y ACTIVIDADES</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentGroup === 'group3' && (
                    <div className="">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="visit-head-text1">NIVEL</h2>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion('group4', "NIVEL BÁSICO")}>BÁSICO</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleProgramacion('group4', "NIVEL AVANZADO")}>AVANZADO</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentGroup === 'group4' && (
                    <div className="">
                        <div className="container-fluid">
                            <div className="row">
                                <h2 className="visit-head-text1">TIEMPO DISPONIBLE</h2>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5 p-1 mx-auto visit-btn" onClick={() => handleProgramacion("group5", "EN 30 MIN")}>30 MIN</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleProgramacion("group5", "EN 60 MIN")}>60 MIN</button>
                            </div>
                            <div className="row">
                                <button type="button" className="btn mt-5  mx-auto visit-btn" onClick={() => handleProgramacion("group5", "MÁS de 60 MIN")}>MÁS de 60 MIN</button>
                            </div>
                        </div>
                    </div>
                )}
                {currentGroup === 'group5' && (
                    navigate("/guidedvisit", { state: { selectedOption } })
                )} */}
          </div>}
          <Icons />
        </div>
      </div>
    )
  }
  //Espacios

  function EspacioJuegos() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{gamesData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{gamesData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {gamesData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {gamesData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {gamesData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/plantone-b">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function MovilidadDelFuturo() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{futureData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{futureData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {futureData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {futureData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {futureData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/plantone-c">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function RetosMovilidad() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{moviRetoData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{moviRetoData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {moviRetoData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {moviRetoData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {moviRetoData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/plant0">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function Muevete() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{mueveteData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{mueveteData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {mueveteData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {mueveteData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {mueveteData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function EspacioPremium() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{espacioPremium[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{espacioPremium[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {espacioPremium[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {espacioPremium[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {espacioPremium[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function NuevaMovilidad() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{nuevaMovilidad[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{nuevaMovilidad[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {nuevaMovilidad[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {nuevaMovilidad[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {nuevaMovilidad[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function SalaPolivalente() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{polivalenteData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{polivalenteData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {polivalenteData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {polivalenteData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {polivalenteData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function MundoMovilidad() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{mundoMovilidadData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{mundoMovilidadData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {mundoMovilidadData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {mundoMovilidadData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {mundoMovilidadData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function Showroom() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{showroomData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{showroomData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {showroomData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {showroomData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {showroomData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }

  function InfoSpot() {
    return (
      <div className="actual-expo">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="img-container" >
          <img src='https://www.qonecta.com/documents/80345/93398/los-coches-del-futuro-segun-el-ces-las-vegas.jpg' className='expo-title-img' alt="not working" />
          <div className="expo-subtitle">
            <p>{infoSpotData[5].replace(/(<([^>]+)>)/ig, "")}</p>
            <p>{infoSpotData[9].replace(/(<([^>]+)>)/ig, "")}</p>
          </div>
        </div>
        <h1 className='expo-title'> {infoSpotData[9].replace(/(<([^>]+)>)/ig, "")}</h1>
        <img src={logoSVG} className='expo-logo' alt="the logo" />
        <div>
          <div className='expo-content'>
            <div className='expo-subheader'>
              <p><i className
                ="material-icons reloj">schedule</i>  {infoSpotData[13].replace(/(<([^>]+)>)/ig, "")}</p>
            </div>
            <div className='expo-description'>
              <p>
                {infoSpotData[17].replace(/(<([^>]+)>)/ig, "")}
              </p>
              <Link to="/ending">
                <Button className='btn btn-primary homeButton mt-5 p-1 mx-auto'> SIGUIENTE &gt; </Button>
              </Link>
            </div>
          </div>
          <Icons />
        </div>
      </div>
    )
  }
  // Plantas

  function PlantOne() {

    return (
      <div className="guidedVisit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <img src={mySvg3} alt="My SVG" className="img-fluid VisitLogo p-1" />
        <h1 className="guidedVisit-title">
          VISITA GUIADA
        </h1>
        <p className="guidedVisit-head-text">PLANTA 1<br></br> MOVILIDAD DEL FUTURO<br></br><span className="subtitle">Movilidad · Juegos y Actividades</span></p>
        <Link to="/espacio-juegos">
          <img src={mySvg4} alt="My" className="img-fluid games-map w-100" />
        </Link>
        <p className="plantOne-text">
          Simulador de conducción y mesas interactivas
        </p>
        <div className="vertical-center">
          <div className="container-fluid guidedVisit-container m-5">
            <nav className="navbar fixed-bottom m-5 guided-navbar">
              <div className="row">
                <img src={mapb2SVG} alt="My SVG" className="img-fluid mini-game p-1" />
              </div>
            </nav>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function PlantOneB() {
    return (
      <div className="guidedVisit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <img src={mySvg3} alt="My SVG" className="img-fluid VisitLogo p-1" />
        <h1 className="guidedVisit-title">
          VISITA GUIADA
        </h1>
        <p className="guidedVisit-head-text">PLANTA 1<br></br> MOVILIDAD DEL FUTURO<br></br><span className="subtitle">Movilidad · Juegos y Actividades</span></p>
        <Link to="/movilidad-futura">
          <img src={mySvg4} alt="My" className="img-fluid games-map w-100" />
        </Link>
        <p className="plantOne-text">
          Recorrido en Realidad Virtual
        </p>
        <div className="vertical-center">
          <div className="container-fluid guidedVisit-container m-5">
            <nav className="navbar fixed-bottom m-5 guided-navbar">
              <div className="row">
                <img src={mapb2SVG} alt="My SVG" className="img-fluid mini-game p-1" />
              </div>
            </nav>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function PlantOneC() {
    return (
      <div className="guidedVisit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <img src={mySvg3} alt="My SVG" className="img-fluid VisitLogo p-1" />
        <h1 className="guidedVisit-title">
          VISITA GUIADA
        </h1>
        <p className="guidedVisit-head-text">PLANTA 1<br></br>LOS RETOS DE LA MOVILIDAD<br></br><span className="subtitle">Movilidad · Juegos y Actividades</span></p>
        <Link to="/retos-movilidad">
          <img src={mySvg4} alt="My" className="img-fluid games-map w-100" />
        </Link>
        <p className="plantOne-text">
          Retos "(app)". Escape room de movilidad y Realidad Aumentada
        </p>
        <div className="vertical-center">
          <div className="container-fluid guidedVisit-container m-5">
            <nav className="navbar fixed-bottom m-5 guided-navbar">
              <div className="row">
                <img src={mapb2SVG} alt="My SVG" className="img-fluid mini-game p-1" />
              </div>
            </nav>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function Ending() {

    return (
      <div className="visit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <div className="vertical-center">
          <img src={logoSVG} alt="My SVG" className="img-fluid MainLogo p-1" />
          <div>
            <div className='toggle-menu-endig'>
              <h1 className="ending-title">
                ¡HAS TERMINADO TU VISITA GUIADA!
              </h1>
              <p className="ending-text">
                Gracias por visitarnos. <br></br> ¡Esperemos que te haya gustado y vuelvas pronto!
              </p>
              <Link to="/">
                <button type="button" className="ending-btn">&lt; VOLVER </button>
              </Link>
            </div>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function Plant0() {
    return (
      <div className="guidedVisit-view">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"></link>
        <img src={mySvg3} alt="My SVG" className="img-fluid VisitLogo p-1" />
        <h1 className="guidedVisit-title">
          VISITA GUIADA
        </h1>
        <p className="guidedVisit-head-text">PLANTA 0<br></br>MUÉVETE<br></br><span className="subtitle">Movilidad · Juegos y Actividades</span></p>
        <Link to="/muevete">
          <img src={mySvg4} alt="My" className="img-fluid games-map w-100" />
        </Link>
        <p className="plantOne-text">
          Contenido interactivo
        </p>
        <div className="vertical-center">
          <div className="container-fluid guidedVisit-container m-5">
            <nav className="navbar fixed-bottom m-5 guided-navbar">
              <div className="row">
                <img src={mapb2SVG} alt="My SVG" className="img-fluid mini-game p-1" />
              </div>
            </nav>
          </div>
        </div>
        <Icons />
      </div>
    )
  }

  function Icons() {
    const styles = {
      backgroundColor: 'transparent',
    };

    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
    const [buttonVisible, setButtonVisible] = useState(false);

    const toggleButtonVisibility = () => {
      setButtonVisible(!buttonVisible);
    }
    return (
      <div style={{ styles }}>
        <div className="container">
          <div className="row">
            <Link to="/">
              <i
                className={buttonVisible ? 'material-icons col-1 home-icon2' : 'material-icons col-1 home-icon'}
              >
                home
              </i>
            </Link>
            <i onClick={toggleButtonVisibility}
              className={buttonVisible ? 'material-icons col-1 home-dots-icon2' : 'material-icons col-1 home-dots-icon'}
            >
              more_vert
            </i>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visit" element={<Visit />} />
      <Route path="/guidedvisit" element={<Guidedvisit />} />
      <Route path="/exposition" element={<Exposition />} />
      <Route path="/expo-actual" element={<ExpoActual />} />
      <Route path="/programacion" element={<Programacion />} />
      <Route path="/mapa" element={<Mapa />} />
      {/* Espacion */}
      <Route path="/espacio-juegos" element={<EspacioJuegos />} />
      <Route path="/movilidad-futura" element={<MovilidadDelFuturo />} />
      <Route path="/retos-movilidad" element={<RetosMovilidad />} />
      <Route path="/muevete" element={<Muevete />} />
      <Route path="/espacio-premium" element={<EspacioPremium />} />
      <Route path="nueva-movilidad" element={<NuevaMovilidad />} />
      <Route path="/sala-polivalente" element={<SalaPolivalente />} />
      <Route path="/mundo-movilidad" element={<MundoMovilidad />} />
      <Route path="/showroom" element={<Showroom />} />
      <Route path="/info" element={<InfoSpot />} />
      {/* transicion */}
      <Route path="/plantone" element={<PlantOne />} />
      <Route path="/plantone-b" element={<PlantOneB />} />
      <Route path="/plantone-c" element={<PlantOneC />} />
      <Route path="/plant0" element={<Plant0 />} />
      <Route path="/ending" element={<Ending />} />

    </Routes >
  );
}

export default App;