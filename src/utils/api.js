import axios from 'axios';

const APP_ID = '93bad8ac';
const APP_KEY = 'b55223333d6056beeff3b79de13b3e6c';


export const getInstantSearchResults = (value, callback, type) => {
    if(value){
        axios({
            method: 'get',
            url: `https://trackapi.nutritionix.com/v2/search/instant?query=${value}`,
            headers: {
                'x-app-id': `${APP_ID}`,
                'x-app-key': `${APP_KEY}`
            }
        }).then(res => {callback({
            type:type,
            payload:{
                value: value,
                data: res.data
            }})});
    } else{
        callback({
            type: type,
            payload: {
                value: '',
                data: {
                    'branded': [],
                    'common': []
                }
            }
        })
    }

    
}

export const getCommonFoodDetails = (value, callback, type) => {
    axios({
        method: 'post',
        url: `https://trackapi.nutritionix.com/v2/natural/nutrients`,
        headers: {
            'x-app-id': `${APP_ID}`,
            'x-app-key': `${APP_KEY}`
        },
        data: {
            query: `${value}`
        }
    }).then(res => {
        callback({
        type: type,
        payload: res.data.foods[0]
    })}).catch(err => {
        console.log(err)
    })
}

export const getBrandedFoodDetails = (value, callback,type) => {
    axios({
        method: 'get',
        url: `https://trackapi.nutritionix.com/v2/search/item?nix_item_id=${value}`,
        headers: {
            'x-app-id': `${APP_ID}`,
            'x-app-key': `${APP_KEY}`
        }
    }).then(res => {callback({
        type: type,
        payload: res.data.foods[0]
    })})
}





