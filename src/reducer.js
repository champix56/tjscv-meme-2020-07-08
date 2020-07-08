import {createStore} from 'redux';
var initialState={selectedImg:{url:'trololo.jpg',id:0},texts:[],temporaryText:{x:50,y:30,value:'react is so COOL',fontSize:'12'},i:0};
export function memeReducer(state=initialState,action){
    switch(action.type){
        case 'ADD_TEMPORARY_TEXT':return {...state,texts:[...state.texts,action.value]};
        case 'ADD_TEXT':return {...state,texts:[...state.texts,action.value]};
        case 'SELECT_IMG':return {...state,selectedImg:action.value};
        case 'INCREM_I':return {...state,i:state.i+=1};
        default:return state;
    }
};

let store=createStore(memeReducer);
export default store;
// console.log(store.getState());
// store.subscribe(()=>{console.log(store.getState())})
// store.dispatch({type:'SELECT_IMG',value:{id:0,url:'dog1.jpg'}});
// store.dispatch({type:'ADD_TEXT',value:{x:0,y:0,value:'un texte'}});
// store.dispatch({type:'ADD_TEXT',value:{x:0,y:0,value:'un autre texte'}});
// store.dispatch({type:'ADD_TEXT',value:{x:0,y:0,value:'encore un autre texte'}});
// store.dispatch({type:'INCREM_I'});

// var retourReducer=memeReducer(initialState,{type:'ADD_TEXT',value:{x:0,y:0,value:'Mon nouveau Texte'}})
// console.log(retourReducer)

// retourReducer=memeReducer(retourReducer,{type:'ADD_TEXT',value:{x:0,y:0,value:'2eme texte'}})
// console.log(retourReducer)