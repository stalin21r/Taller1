import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  FormControl,
} from "@mui/material";

export function TablaEstudiante({ estudiantes }) {
  return (
    <div className="table-estudent-container">
      <Typography variant="h5" fontWeight="bold" align="center" gutterBottom>
        Lsita de estudiantes
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 5 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell align="right">Nota 1</TableCell>
              <TableCell align="right">Nota 2</TableCell>
              <TableCell align="right">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {estudiantes.map((estudiante, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {estudiante.nombre}
                </TableCell>
                <TableCell align="right">{estudiante.nota1}</TableCell>
                <TableCell align="right">{estudiante.nota2}</TableCell>
                <TableCell align="right">{estudiante.suma}</TableCell>
              </TableRow>
            ))}
            {/*}
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.name}</TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
          {*/}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
