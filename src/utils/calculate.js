export function calculateConsumedCalories(servingSize, servingQty, totalCalories){
    return Math.round((servingSize/servingQty)*totalCalories);
}

export function calculateConsumedGrams(servingSize, servingQty, totalGrams){
    return Math.round((servingSize/servingQty)*totalGrams);
}