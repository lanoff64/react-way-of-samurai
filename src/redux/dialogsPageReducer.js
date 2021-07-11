const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {

    dialogsState: [
        {
            id: 1,
            name: 'Dimich',
            avatar: 'https://i.ytimg.com/vi/iJ4UGNGzJzY/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBnmgSojZdsUkxXfQLs7wK5dW0irw'
        },
        {
            id: 2,
            name: 'Maria',
            avatar: 'https://www.seas.harvard.edu/sites/default/files/styles/embedded_image_large/public/images/news/zlatkova_maria_web_square.jpg?itok=Z2IqHSei'
        },
        {
            id: 3,
            name: 'Hannah',
            avatar: 'https://cs50.harvard.edu/college/2019/fall/staff/media/Emma-Humphrey.png'
        },
        {id: 4, name: 'Rob', avatar: 'https://cra.org/wp-content/uploads/2018/05/Robert-Bowden.jpg'},
        {
            id: 5,
            name: 'David',
            avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/David_J._Malan.png/220px-David_J._Malan.png'
        },
        {
            id: 6,
            name: 'Victor',
            avatar: 'https://i.ytimg.com/an/TW0FUhT0m-Bqg2trTbSs0g/featured_channel.jpg?v=5fc22bf3'
        }
    ],
    messageState: [
        {id: 1, message: "Hello"},
        {id: 2, message: "Hello World!"},
        {id: 3, message: "All love triangle"},
        {id: 4, message: "Nice 2 mu"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Hello"},
    ],
    messageForSend: "",
    answerState: [
        {id: 1, message: "Hello, Dimich"},
        {id: 2, message: "I can write it on JS!"}
    ]
}

const dialogsPageReducer = (state = initialState, action) => {


    switch (action.type) {
        case("SEND-MESSAGE"):
            return {
                ...state,
                messageForSend: '',
                answerState: [...state.answerState, {id: 3, message: state.messageForSend}]
            };
        case("UPDATE-MESSAGE-TEXT"):
            return {
                ...state,
                messageForSend: action.text
            };
        default:
            return state;
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateMessageText = (text) => ({type: UPDATE_MESSAGE_TEXT, text: text});
export default dialogsPageReducer;