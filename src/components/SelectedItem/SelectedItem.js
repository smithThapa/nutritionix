import React from 'react'
import './SelectedItem.scss';
import { Divider } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';


const mockData = {
    name: 'Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
}
export default function SelectedItem() {
    return (
        <div className="selected-item-container">
            <div className="selected-item">
                <div className="cancel-button">
                    <ClearIcon fontSize="large"/>
                </div>
                <div className="selected-item-img">
                    <img src={mockData.img} alt="Cheese"></img>
                </div>
                <div className="selected-item-name">Cheese</div>
                <div className="selected-item-serving-infos">
                    <div className= "selected-item-serving-container">
                        <p>Servings</p>
                        <p> 1.0</p>
                        <div className="slider"></div>
                        <p>slice</p>
                        <TextField
                            id="filled-number"
                            label="Servings"
                            value={1}
                            onChange={(e) => {}}
                            type="number"
                            InputLabelProps={{ shrink: true }}
                            margin="normal"
                            variant="filled"
                            helperText={"calories"}
                            className="hehe"
                            error={"error"}
                        />
                    </div>
                    <div className="selected-item-grams">
                        <p>28</p>
                        <p>grams</p>
                    </div>
                    <div className="selected-items-calories">
                        <p>113</p>
                        <p>calories</p>
                    </div>
                </div>
               
                <Divider/>
                <p>ADD TO TODAY</p>
                <FormControl className="form-control">
                    <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={10}
                    onChange={()=> {}}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>

            </div>
        </div>
    )
}
