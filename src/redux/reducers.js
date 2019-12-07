import {MOCK_DATA} from '../MOCK_DATA';

const initialState = {
    inputRef: '',
    mockData: MOCK_DATA,
    searchData: {
        'branded': [],
        'common': []
    },
    currentSearchValue: '',
    searchBarActive: false,
    selectedItemActive: false,
    selectedItem: {},
    currentDateIndex: 0
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'SET_SEARCHBAR_ACTIVE':
            return {...state, searchBarActive: action.payload};
        case 'SET_SEARCHBAR_NOT_ACTIVE':
            return {...state, searchData:{
                'branded': [],
                'common': []
            }, selectedItem: {}}
        case 'SET_SELECTED_ITEM_ACTIVE':
            return {...state, selectedItemActive: action.payload};
        case 'SELECT_DAY_INDEX':
            return {...state, currentDateIndex: action.payload};
        case 'SET_SEARCH_DATA':
            return {...state, searchData: action.payload.data, currentSearchValue: action.payload.value};
        case 'SEkT_ITEM_DETAIL':
            return {...state, selectedItem: action.payload};
        case 'SET_INPUT_REF':
            return {...state, inputRef: action.payload}
        case 'ADD_ITEM':
            return {
                ...state,
                selectedItemActive: false,
                currentSearchValue: '',
                searchData:{
                    'branded': [],
                    'common': []
                },
                mockData: {
                    ...state.mockData,
                    data_points: state.mockData.data_points.map((data, index) => {
                        if(index === 0){
                            data.intake_list.push(action.payload)
                        }
                        return data;
                    })
                }
                }
        default: 
            return state;
    }

}