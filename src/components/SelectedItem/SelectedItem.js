import React from 'react'
import './SelectedItem.scss';
import { Divider, Button } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/styles';

import {setSelectedItemActive} from '../../redux/action';
import { connect } from 'react-redux';


const mockData = {
    name: 'Cheese',
    img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
}

class SelectedItem extends React.Component{

    constructor(props){
        super(props)
        this.state={
            counter: 10,
            meal:  "Breakfast"
        }
    }

    render(){
        const selectedItemContainer = (
            <div className="selected-item-container" style={!this.props.selectedItemActive ? {display: 'none'}: {}}>
                <div className="selected-item">

                    <div className="selected-item-img">
                        <div className="cancel-button">
                            <ClearIcon className="clear-icon" fontSize="large" onClick={() => { this.props.setSelectedItemActive(false) }} />
                        </div>
                        <img src={mockData.img} alt="Cheese"></img>
                    </div>
                    <div className="selected-item-name">Cheese</div>
                    <Divider />
                    <div className="selected-item-serving-infos">
                        <div className="selected-item-serving-container">
                            <TextField
                                id="filled-number"
                                label="Servings"
                                value={this.state.counter}
                                onChange={(e) => this.setState({ counter: e.target.value })}
                                type="number"
                                margin="normal"
                                variant="filled"
                                helperText={"calories"}
                                className="serving-text-field"

                            />
                        </div>
                        <div className="selected-item-grams value-box">
                            <p className="selected-item-value">28</p>
                            <p className="selected-item-desc">grams</p>
                        </div>
                        <div className="selected-items-calories value-box">
                            <p className="selected-item-value">113</p>
                            <p className="selected-item-desc">calories</p>
                        </div>
                    </div>

                    <Divider />
                    <p>ADD TO TODAY</p>
                    <FormControl className="form-control">
                        <Select
                            variant="filled"
                            value={this.state.meal}
                            onChange={(e) => {
                                this.setState({
                                    ...this.state.meal,
                                    meal: e.target.value
                                })
                            }}
                            className="form-control-select"
                        >
                            <MenuItem value={"Breakfast"}>Breakfast</MenuItem>
                            <MenuItem value={"Lunch"}>Lunch</MenuItem>
                            <MenuItem value={"Dinner"}>Dinner</MenuItem>
                            <MenuItem value={"Snack"}>Snack</MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        color='primary'
                        className="selected-item-add-button">ADD</Button>

                </div>
            </div>

        );

        return selectedItemContainer;
    }

}


const mapStateToProps = (state) => ({
    selectedItemActive: state.selectedItemActive
})

const mapDispatchToProps = dispatch => ({
    setSelectedItemActive: bool => dispatch(setSelectedItemActive(bool))
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);

