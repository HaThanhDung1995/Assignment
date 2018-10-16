import * as types from '../Constants/ActionType';
import * as messages from '../Constants/Message';
var initialState = messages.MSG_WELCOME;
const Message = (state=initialState,action)=>{
   
    switch(action.type){
       case types.CHANGE_MESSAGE:
            return action.message;
        default: return state;
    }
}




export default Message;