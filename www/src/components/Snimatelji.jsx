import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
};

const rows = [
    createData('Pera Perić', 1234, 'Bulevar Oslobođenja 12', '14-16', 'Novinar Novinarčić'), /**ubaciti ovde regex za čhekirano */
    createData('Đura Đurić', 2345, '/','/','/'),
    createData('Jovan Jovanović', 3456, 'Trg Republike 1', '17-20', 'Mara Marić') 
];

function Snimatelji() {

    return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell> Snimatelj</TableCell>
              <TableCell align="right">Kamera</TableCell>
              <TableCell align="right">Lokacija</TableCell>
              <TableCell align="right">Vreme</TableCell>
              <TableCell align="right">Novinar</TableCell>
              <TableCell align="right">Odobreno</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}

export default Snimatelji;

