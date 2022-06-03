export interface IDisplayItem {
    id: number,
    name: string,
    category: string,
    price: number
}

export const displayList: Array<IDisplayItem> = [
    {id: 1, name: "Lay’s", category: "Chips", price: 75},
    {id: 2, name: "Coca-Cola", category: "Drink", price: 180},
    {id: 3, name: "Light", category: "Rusks", price: 220},
    {id: 4, name: "Chaka", category: "Peanut", price: 600},
    {id: 5, name: "Water", category: "Drink", price: 40},
    {id: 6, name: "Fanta", category: "Cold drink", price: 400},
    {id: 7, name: "Nutella", category: "Chocolate paste", price: 550},
]