import profilePageReducer, {addPostAC} from "../redux/profilePageReducer";

it('state should be increment', () => {
    let action = addPostAC ('learning React is cool');
    let state = {
        postsState: [
            {id: 1, message: 'How are you ?', likescount: 3},
            {id: 2, message: 'We will rock U', likescount: 10},
            {id: 3, message: 'Check my Git', likescount: 0},
            {id: 4, message: 'Check my Greets', likescount: 0},
        ] };



    let newState = profilePageReducer(state, action);

    expect(newState.postsState.length).toBe(5);
    expect(newState.postsState[4].message).toBe('learning React is cool');
    expect(newState.postsState[4].likescount).toBe(0);
    expect(newState.postsState[4].id).toBe(5);

});





