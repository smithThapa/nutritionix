import {getInstantSearchResults,getCommonFoodDetails,getBrandedFoodDetails} from '../utils/api';

export const setSearchBarActive = payload => ({
    type:'SET_SEARCHBAR_ACTIVE',
    payload
})

export const setSearchBarNotActive = () => ({
    type:'SET_SEARCHBAR_NOT_ACTIVE'
})

export const setSelectedItemActive = payload => ({
    type: 'SET_SELECTED_ITEM_ACTIVE',
    payload
})

export const setDayIndex = payload => ({
    type: 'SELECT_DAY_INDEX',
    payload
})


export const setSearchData = value => dispatch => {
    const type = 'SET_SEARCH_DATA';
    getInstantSearchResults(value, dispatch, type);


}

export const setItemDetail = (branded,value) => dispatch => {
    const type = 'SET_ITEM_DETAIL';
    if(branded){
        getBrandedFoodDetails(value,dispatch,type);
    } else{
        getCommonFoodDetails(value,dispatch,type);
    }
    
}

export const addItem = payload => ({
    type: 'ADD_ITEM',
    payload
})

