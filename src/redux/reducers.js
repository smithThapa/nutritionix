import {MOCK_DATA} from '../MOCK_DATA';

const emptySearch = {
    'branded': [],
    'common': []
}

const initialState = {
    mockData: MOCK_DATA,
    searchData: emptySearch,
    searchBarActive: false,
    selectedItemActive: false,
    selectedItem: {},
    currentDateIndex: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_SEARCHBAR_ACTIVE':
            return {...state, searchBarActive: action.payload};
        case 'SET_SELECTED_ITEM_ACTIVE':
            return {...state, selectedItemActive: action.payload};
        case 'SELECT_DAY_INDEX':
            return {...state, currentDateIndex: action.payload};
        default: 
            return state;
    }

}