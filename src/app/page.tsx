import ClientComponent from "@/component/ClientComponent";
import Image from "next/image";
import {
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 5 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Material UI!
        </Typography>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Label"
          />
          <FormControlLabel required control={<Checkbox />} label="Required" />
          <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
        </FormGroup>
        <hr />
        <Stack direction="row" spacing={1}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            seccondary
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}
