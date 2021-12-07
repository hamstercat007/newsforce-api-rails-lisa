import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export default function TagCloud() {
  return (
    <>
      <div className="flex-col">
        <FormControlLabel control={<Switch defaultChecked />} label="Africa" />
        <FormControlLabel control={<Switch defaultChecked />} label="Asia" />
        <FormControlLabel control={<Switch defaultChecked />} label="Europe" />
        <FormControlLabel control={<Switch defaultChecked />} label="North America" />
        <FormControlLabel control={<Switch defaultChecked />} label="South America" />
      </div>
      <div className="flex-col">
        <FormControlLabel control={<Switch defaultChecked />} label="Al Jazeera" />
        <FormControlLabel control={<Switch defaultChecked />} label="Associated Press" />
        <FormControlLabel control={<Switch defaultChecked />} label="BBC News" />
      </div>
    </>
  );
}
