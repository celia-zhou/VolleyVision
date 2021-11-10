import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'

const hs_years = [
    {
      value: 'Senior',
      label: 'Senior',
    },
    {
      value: 'Junior',
      label: 'Junior',
    },
    {
      value: 'Sophomore',
      label: 'Sophomore',
    },
    {
      value: 'Freshman',
      label: 'Freshman',
    },
  ];

export default function EditProfileInfo() {
    const [hs_year, setYear] = React.useState('Junior');

    const handleChange = (event) => {
      setYear(event.target.value);
    };

    return (
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 4, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="first_name"
            label="First Name"
            defaultValue="Katelyn"
            variant="standard"
            />
            <TextField
            id="last_name"
            label="Last Name"
            defaultValue="Itano"
            variant="standard"
            />
            <TextField
            id="team"
            label="Team"
            defaultValue="RPM Sand"
            variant="standard"
            />
            <TextField
            id="school"
            label="School"
            defaultValue="Chaparral High School"
            variant="standard"
            />
            <TextField
            id="age"
            label="Age"
            defaultValue="17"
            variant="standard"
            />
            <TextField
            id="gpa"
            label="GPA"
            defaultValue="4.0"
            variant="standard"
            />
            <TextField
            id="select-year"
            select
            label="Select"
            value={hs_year}
            onChange={handleChange}
            helperText="Please select your current high school classification"
            variant="standard"
            >
            {hs_years.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
            </TextField>
            <TextField
            id="jersey_num"
            label="Jersey Number"
            defaultValue="13"
            variant="standard"
            />
        </div>
        </Box>
    );
}