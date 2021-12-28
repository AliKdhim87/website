import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
query getAllPosts  {
  allPosts(sortBy: published_DESC){
  
    edges{
      node{
        title
        published
        body
        image
        _meta{
          uid
        }
      }
    }
  }
}
  `


export const GET_ALL_POSTS_UID = gql`
query getAllPostsUid{
    allPosts(sortBy: published_DESC){
      edges{
        node{
          _meta{
            uid
          }
        }
      }
    }
  }`

export const GET_POST = gql`
query getPost($uid: String!){
  post(uid: $uid, lang:"en-us"){
    title
    published
    body
    image
  }
}
`