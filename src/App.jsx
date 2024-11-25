import "./App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import { FormEstudiante } from "./components/FormEstudiante";
import { TablaEstudiante} from "./components/TablaEstudiante";

function App() {

  const [estudiantes, setEstudiantes] = useState([]);

  const agregarEstudiante = (nuevoEst) => {
    setEstudiantes( (prevEst) => 
      [...prevEst, nuevoEst]    
    )
  }

  useEffect(() => {
    axios
    .get("http://localhost:3000/estudiantes")
    .then((response) => {
      setEstudiantes(response.data);
    })
    .catch((err) => {
      console.error("error al conectar con la base de datos")
      alert("error al conectar con la base de datos")
    });
  }, []);


  return (
    <div>
      <Box 
        sx={{
          width: '80%',
          margin: "auto",
          p: 2,
          border: "1px solid #ccc",
          borderRadius: 20,
          boxShadow: `
          5px 5px 10px rgba(255, 255, 255, 0.5),   /* Sombra negra */
          -5px -5px 15px rgba(255, 255, 255, 0.3) /* Sombra roja */
        `,
          backgroundColor: "#fff",
          color: '#000'
        }}
      >
        <FormEstudiante onAgregarEst={agregarEstudiante}/>
        <TablaEstudiante estudiantes={estudiantes}/>

      </Box>
    </div>
  );
}

export default App;
