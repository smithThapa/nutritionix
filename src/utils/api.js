import axios from 'axios';

export const APP_ID = '93bad8ac';
export const APP_KEY = 'b55223333d6056beeff3b79de13b3e6c';

export const getCommonFoodDetails = (value, callback, type) => {
    callback({
        type: type,
        payload: {}
    })
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
    callback({
        type: type,
        payload: {}
    })
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





