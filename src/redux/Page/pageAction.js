import {PAGE_LINK} from './pageType'

export const PageLink = (page) => {
    return{
        type : PAGE_LINK,
        payload : page
    }
}