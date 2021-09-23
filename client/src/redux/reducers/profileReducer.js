
export const SET_NICKNAME = 'SET_NICKNAME'
export const SET_EMAIL = 'SET_EMAIL'
export const SET_TEL = 'SET_TEL'
export const SET_PASSWORD = 'SET_PASSWORD'
export const SET_NICKNAME_PREVIEW = 'SET_NICKNAME_PREVIEW'
export const SET_PASSWORD_PREVIEW = 'SET_PASSWORD_PREVIEW'
export const SET_NEED_REMEMBER = 'SET_NEED_REMEMBER'
export const SET_SHOW_PASSWORD = 'SET_SHOW_PASSWORD'
export const TOGGLE_NEED_REMEMBER = 'TOGGLE_NEED_REMEMBER'
export const TOGGLE_SHOW_PASSWORD = 'TOGGLE_SHOW_PASSWORD'

let initialState =
    {
        nickName:'',
        email:'',
        tel:'',
        password:'',
        nickNamePreview:'',
        passwordPreview:'',
        needRemember:true,
        showPassword:false
    }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case SET_NICKNAME_PREVIEW:
        {
            return {...state, nickNamePreview:action.preview }
        }
        case SET_PASSWORD_PREVIEW:
        {
            return {...state, passwordPreview:action.preview }
        }
        case TOGGLE_NEED_REMEMBER:
        {
            return {...state, needRemember: !action.flag }
        }
        case TOGGLE_SHOW_PASSWORD:
        {
            return {...state, showPassword: !action.flag }
        }
        // case PUBLISH_NEW_POST:
        // {
        //     const id = state.posts.length
        //     const data = state.newPostPreview
        //     const post = {id: id, data: data, numLikes: 0}
        //     /** return copy of state using spread operator*/
        //     return {
        //         ...state,
        //         /** Copy posts and unshift new post */
        //         posts:[post, ...state.posts],
        //         newPostPreview:DEFAULT_NEW_POST_PREVIEW
        //     }
        // }
        // case UPDATE_NEW_POST_PREVIEW:
        // {
        //     /** return copy of state using spread operator*/
        //     return {
        //         ...state,
        //         newPostPreview: action.text
        //     }
        //
        // }
        default: return state
    }

}

export const SetNickNamePreviewAC = preview => ({type:SET_NICKNAME_PREVIEW, preview})
export const SetPasswordPreviewAC = preview => ({type:SET_PASSWORD_PREVIEW, preview})
export const ToggleNeedRememberAC = flag => ({type:TOGGLE_NEED_REMEMBER, flag})
export const ToggleShowPasswordAC = flag => ({type:TOGGLE_SHOW_PASSWORD, flag})


//export const PublishNewPostAction = () => ({type:PUBLISH_NEW_POST})
//export const UpdateNewPostPreviewAction = (text) => ({type:UPDATE_NEW_POST_PREVIEW, text:text})

export default profileReducer