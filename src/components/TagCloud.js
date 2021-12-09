import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TagMap from './TagMap';

export default function TagCloud({ handleToggle }) {
  return (
    <div className="flex-row">
      <TagMap handleToggle={handleToggle} />
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
  );
}
