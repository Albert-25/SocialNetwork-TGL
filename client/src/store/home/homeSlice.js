import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
    name: 'home',
    initialState: {
        posts: [],
        suggestions: [],
        checkComments: false,
        userSearch:[],
        checkEmptySearchBar:true,
        pathReference:"/"
    },
    reducers: {
        getPostsToHome: (state, { payload }) => {
            state.posts = payload
        },
        getFriendsFromFriends: (state, { payload }) => {
            state.suggestions = payload
        },
        checkComments: (state, { payload }) => {
            state.checkComments = !state.checkComments
        },
        getUserSearched:(state, { payload })=>{
            state.userSearch = payload
        },
        checkEmptySearchBar:(state, { payload })=>{
            if(state.userSearch == null){
                console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE",state.userSearch)
                state.checkEmptySearchBar = true
            }
            else{
                console.log("aaaaaaaaaaaaaaaaaaaaaaaaaa", state.userSearch)
                state.checkEmptySearchBar = false
            }
        },
        setPathReference:(state, { payload })=>{
            state.pathReference = payload;
        }
    }
})

export const { getPostsToHome, getFriendsFromFriends, checkComments, getUserSearched, checkEmptySearchBar, setPathReference } = homeSlice.actions
