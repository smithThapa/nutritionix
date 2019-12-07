import React from 'react'
import './SelectedItem.scss';
import { Divider, Button } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ClearIcon from '@material-ui/icons/Clear';
import TextField from '@material-ui/core/TextField';
import CircularProgress from '@material-ui/core/CircularProgress';
import Select from '@material-ui/core/Select';
import {calculateConsumedCalories,calculateConsumedGrams} from '../../utils/calculate';
import {setSelectedItemActive, addItem} from '../../redux/action';

import { connect } from 'react-redux';

function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

class SelectedItem extends React.Component{

    constructor(props){
        super(props)
        this.state={
            counter: 1,
            meal:  "Breakfast"
        }
    }

    addItemHandler = () => {
        const selectedItem = this.props.selectedItem;
        selectedItem.meal_type = this.state.meal;
        selectedItem.serving_size = this.state.counter;
        this.props.addItem(selectedItem);
    }

    render(){
        
        const {selectedItem, selectedItemActive} = this.props;
        console.log("selected item: ", selectedItem)
        let selectedItemContainer ='';
        if( selectedItemActive){
            selectedItemContainer = (
                <div className="selected-item-container" >
                    {!isEmpty(selectedItem) ?
                                        <div className="selected-item">
    
                                        <div className="selected-item-img">
                                            <div className="cancel-button">
                                                <ClearIcon className="clear-icon" fontSize="large" onClick={() => { this.props.setSelectedItemActive(false) }} />
                                            </div>
                                            <img src={selectedItem.photo.thumb} alt="Cheese"></img>
                                        </div>
                                        <div className="selected-item-name">{selectedItem.food_name}</div>
                                        {selectedItem.nix_brand_id && <div className="selected-item-brand-name">{selectedItem.brand_name}</div>}
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
                                                <p className="selected-item-value">{calculateConsumedGrams(this.state.counter, selectedItem.serving_qty, selectedItem.serving_weight_grams)}</p>
                                                <p className="selected-item-desc">grams</p>
                                            </div>
                                            <div className="selected-items-calories value-box">
                                                <p className="selected-item-value">{calculateConsumedCalories(this.state.counter, selectedItem.serving_qty, selectedItem.nf_calories)}</p>
                                                <p className="selected-item-desc">calories</p>
                                            </div>
                                        </div>
                    
                                        <Divider />
                                        <p className="add-to-today">ADD TO TODAY</p>
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
                                            className="selected-item-add-button"
                                            onClick={(e)=> {this.addItemHandler()}}>ADD</Button>
                    
                                    </div> :
                                    <div className="selected-item-circular">
                                        <CircularProgress variant="indeterminate" color="primary" />
                                    </div>
                                    
                                     }

                </div>
    
            );
        }

        return selectedItemContainer;
        
    }

}


const mapStateToProps = (state) => ({
    selectedItemActive: state.selectedItemActive,
    selectedItem: state.selectedItem
})

const mapDispatchToProps = dispatch => ({
    setSelectedItemActive: bool => dispatch(setSelectedItemActive(bool)),
    addItem: data => dispatch(addItem(data))

})

export default connect(mapStateToProps, mapDispatchToProps)(SelectedItem);

// const mockData = {
//     name: 'Cheese',
//     img: 'https://d2xdmhkmkbyw75.cloudfront.net/1034_thumb.jpg'
// }
