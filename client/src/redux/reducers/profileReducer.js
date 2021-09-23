export const PUBLISH_NEW_POST = 'PUBLISH_NEW_POST'
export const UPDATE_NEW_POST_PREVIEW = 'UPDATE_NEW_POST_PREVIEW'
export const DEFAULT_NEW_POST_PREVIEW = 'New post ..'

let initialState =
    {
        posts:[
            {id : 3, data:"Post N", numLikes:3},
            {id : 2, data:"Post 1", numLikes:6},
            {id : 1, data:"Post 0", numLikes:3},
            {id : 0, data:"Initial Post", numLikes:9}
        ],
        user:{
            name:'seems techies'
        },
        newPostPreview: DEFAULT_NEW_POST_PREVIEW
    }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case PUBLISH_NEW_POST:
        {
            const id = state.posts.length
            const data = state.newPostPreview
            const post = {id: id, data: data, numLikes: 0}
            /** return copy of state using spread operator*/
            return {
                ...state,
                /** Copy posts and unshift new post */
                posts:[post, ...state.posts],
                newPostPreview:DEFAULT_NEW_POST_PREVIEW
            }
        }
        case UPDATE_NEW_POST_PREVIEW:
        {
            /** return copy of state using spread operator*/
            return {
                ...state,
                newPostPreview: action.text
            }

        }
        default: return state
    }

}


export const PublishNewPostAction = () => ({type:PUBLISH_NEW_POST})
export const UpdateNewPostPreviewAction = (text) => ({type:UPDATE_NEW_POST_PREVIEW, text:text})

export default profileReducer