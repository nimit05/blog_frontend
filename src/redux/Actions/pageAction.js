import {PAGE_LINK , FEED_TYPE} from '../Types'

export const PageLink = (page) => {
    return{
        type : PAGE_LINK,
        payload : page
    }
}

export const feedType = (feed)  => {
    return{
        type : FEED_TYPE,
        payload : feed
    }
}