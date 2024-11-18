import { Book, Chapter, Content } from "@/model";
import instance from "@/utils/request"; 

export function get_books():Promise<{data: Book[]}>{
  return instance({
    method: 'get',
    url: '/getNvlInfoList/'
  })
}

export function get_book_chapters(bid:string):Promise<{data: Chapter}>{
  return instance({
    method: 'get',
    url: `/getNvlChapInfoList/${bid}`
  })
}

export function get_book_content(cid:string):Promise<{data: Content}>{
  return instance({
    method: 'get',
    url: `/getNvlChapContent/${cid}`
  })
}