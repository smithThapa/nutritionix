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
        case 'SEARCHBAR_ACTIVE':
            return {...state, searchBarActive: action.payload};
        default: 
            return state;
    }

}