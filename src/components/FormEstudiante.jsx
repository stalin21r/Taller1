import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  FormControl,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

export function FormEstudiante({ onAgregarEst }) {

  const [nuevoEst, setNuevoEst] = useState({nombre:"", nota1:"", nota2:""});
  const [confirmation, setConfirmation] = useState("");
  const handleChangeEst = (e) => {
    e.preventDefault();
    console.log(e.target);
    const { name, value } = e.target;
    setNuevoEst({
      ...nuevoEst,
      [name]: value,
    })

  }

  const handleAgregarEst = async (e) => {
    e.preventDefault();

    try{
      const response = await axios.get("http://localhost:3000/estudiantes");
      const estudiantes = response.data;
      
      const antId = estudiantes.length > 0 ? estudiantes[estudiantes.length -1].id: 0;
      
      const nuevoId = parseInt(antId) + 1;
      const nuevoEstConId = {id: nuevoId, ...nuevoEst, suma: parseInt(nuevoEst.nota1) + parseInt(nuevoEst.nota2)};
      

      const postResponse = await axios.post("http://localhost:3000/estudiantes", nuevoEstConId);
      await onAgregarEst(nuevoEstConId);
      setConfirmation("Estudiante agregado");
      setNuevoEst({nombre:"", nota1:"", nota2:""});
    } catch (err){
      setConfirmation("no se pudo agregar");
    }
  
  };

  return (
    <Box
      sx={{
        width: "70%",
        margin: "30px auto",
        p: 4,
        border: "1px solid #ccc",
        borderRadius: 6,
        boxShadow: 3,
        backgroundColor: "#DAE5D4",
        color: "#000",
      }}
    >
      <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
        Ingreso de calificaciones
      </Typography>
      <Divider sx={{ m: 2, borderBottomWidth: 2 }}></Divider>
      <form onSubmit={handleAgregarEst}>
        <FormControl fullWidth sx={{ m: 1, borderRadius: '50px' }}>
          <TextField
            label="Nombre"
            fullWidth
            margin="normal"
            name="nombre"
            id="nombre"
            value={nuevoEst.nombre}
            onChange={handleChangeEst}
            required
            sx={{background: '#fff'}}
            variant="outlined"
          />
        </FormControl>
        <FormControl fullWidth sx={{m:1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextField
            label="Nota 1"
            fullWidth
            margin="normal"
            name="nota1"
            id="nota1"
            value={nuevoEst.nota1}
            onChange={handleChangeEst}
            required
            sx={{background: '#fff', width: '45%'}}
            variant="outlined"
          />
          <TextField
            label="Nota 2"
            fullWidth
            margin="normal"
            name="nota2"
            id="nota2"
            value={nuevoEst.nota2}
            onChange={handleChangeEst}
            required
            sx={{background: '#fff', width: '45%'}}
            variant="outlined"
          />
        </FormControl>
        <Typography sx={{height: '2vh', marginBottom:3}} variant="h6" color="blue" align="center" gutterBottom >
          {confirmation}
        </Typography>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <Button type="submit" variant="contained" color="primary">
            Agregar
          </Button>
        </section>
      </form>
    </Box>
  );
}
