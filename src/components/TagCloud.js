import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TagMap from './TagMap';
import Box from '@mui/material/Box';
export default function TagCloud({ handleToggle }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="flex-row">
        <TagMap />
        <div className="flex-col">
          <FormControlLabel
            control={<Switch defaultChecked value="africa" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="Africa"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="middle-east" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="Middle East"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="asia" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="Asia"
          />
        </div>
        <div className="flex-col">
          <FormControlLabel
            control={<Switch defaultChecked value="europe" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="Europe"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="north-america" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="North America"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="south-america" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="South America"
          />
        </div>
        <div className="flex-col">
          <FormControlLabel
            control={<Switch defaultChecked value="Al Jazeera English" onChange={(al_event) => handleToggle(al_event.target.value)} />}
            label="Al Jazeera"
            className="Al Jazeera"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="Associated Press" onChange={(ap_event) => handleToggle(ap_event.target.value)} />}
            label="Associated Press"
            className="Associated Press"
          />
          <FormControlLabel
            control={<Switch defaultChecked value="BBC News" onChange={(bbc_event) => handleToggle(bbc_event.target.value)} />}
            label="BBC News"
            className="BBC News"
          />
        </div>
      </div>
    </Box>
  );
}
