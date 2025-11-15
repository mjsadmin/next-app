import { Button } from '@mui/material';

export default function CustomButton() {
  return (
    <div>
        {/* Style */}
        <h2>Style</h2>
        <Button color="primary">
            primary
        </Button>
        <Button variant="outlined" color="primary">
            outlined
        </Button>
        <Button variant="contained" color="primary">
            contained
        </Button>
        <Button disabled variant="contained" color="primary">
            disabled
        </Button>

        {/* Color */}
        <h2>Color</h2>
        <Button variant="contained" color="primary">
            primary
        </Button>
        <Button variant="contained" color="secondary">
            secondary
        </Button>
        <Button variant="contained" color="error">
            error
        </Button>
        <Button variant="contained" color="warning">
            warning
        </Button>
    </div>
  )
}