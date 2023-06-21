export interface ArticleAPI {
  id : number
  label? : string
  price : number
  description : string

  commentaires? : Commentaire[]
}

export interface Commentaire {
  id : string
  content : string
}

