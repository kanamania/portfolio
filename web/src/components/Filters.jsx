import {useState} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Filters() {
    const [tech, setTech] = useState('');
    const [type, setType] = useState('');

    const handleTechChange = (event) => {
        setTech(event.target.value);
    };
    const handleTypeChange = (event) => {
        setType(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-disabled-label">Technology</InputLabel>
                <Select
                    labelId="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    value={tech}
                    label="Technology"
                    onChange={handleTechChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value='wp'>WordPress</MenuItem>
                    <MenuItem value='php'>PHP</MenuItem>
                    <MenuItem value='laravel'>Laravel</MenuItem>
                    <MenuItem value='yii'>Yii</MenuItem>
                    <MenuItem value='django'>Python Django</MenuItem>
                    <MenuItem value='js'>JavaScript</MenuItem>
                    <MenuItem value='node'>Node</MenuItem>
                    <MenuItem value='react'>React</MenuItem>
                    <MenuItem value='angular'>Angular</MenuItem>
                </Select>
                <FormHelperText>Technology</FormHelperText>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-error-label">Type</InputLabel>
                <Select
                    labelId="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={type}
                    label="Type"
                    onChange={handleTypeChange}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}>Website</MenuItem>
                    <MenuItem value={2}>Web App</MenuItem>
                    <MenuItem value={3}>Mobile App</MenuItem>
                </Select>
                <FormHelperText>Type</FormHelperText>
            </FormControl>
        </div>
    );
}