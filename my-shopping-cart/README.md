# My Shopping Cart

## Setup
1. npm create vite@latest
2. npm install
3. npm run dev

## Folder Structure
- App
    - Components
        - Main Container
          (This is the page where list of products is displayed.)

        - Cart
          (This sections displays items added to cart and other details.)  

    - Reducers
        - productReducer
          (This file contains reducer function 'productReducer' which takes state and action to fetch, add and remove products from cart as params. Returns updated state.)


## State Management
- 'useReducer' hook is responsible for managing product list and cart states across components using        'productReducer' reducer function.

## API
- Product list is fetched through APIs available on dummyjson.com, like "https://dummyjson.com/products".
- Fetch API is used.
- A helper function is created where data is fetched from API and stored in state.
- 'useEffect' calls the helper function on load.
   (Note: dispatch() inside useEffect throws an error since fetch returns a promise which needs to be awaited, but await cannot be added inside useEffect. So, the action to store products is dispatched in helper function itself.)
