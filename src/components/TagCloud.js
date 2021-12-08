import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import TagMap from './TagMap';

export default function TagCloud({ handleToggle }) {
  return (
    <div className="flex-row">
      <TagMap />
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked id="africaSwitch" value="africa" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Africa"
        />
        <FormControlLabel
          control={<Switch defaultChecked id="middleEastSwitch" value="middle-east" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Middle East"
        />
        <FormControlLabel
          control={<Switch defaultChecked id="asiaSwitch" value="asia" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Asia"
        />
      </div>
      <div className="flex-col">
        <FormControlLabel
          control={<Switch defaultChecked id="europeSwitch" value="europe" onChange={(al_event) => handleToggle(al_event.target.value)} />}
          label="Europe"
        />
        <FormControlLabel
          control={
            <Switch defaultChecked id="northAmericaSwitch" value="north-america" onChange={(al_event) => handleToggle(al_event.target.value)} />
          }
          label="North America"
        />
        <FormControlLabel
          control={
            <Switch defaultChecked id="southAmericaSwitch" value="south-america" onChange={(al_event) => handleToggle(al_event.target.value)} />
          }
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
  );
}
