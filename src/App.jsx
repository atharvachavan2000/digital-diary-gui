import "./App.css";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";

function App() {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid size={4}>
        <Box display="flex" justifyContent="center" alignItems="center">
          Welcome to Digital Diary!
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
