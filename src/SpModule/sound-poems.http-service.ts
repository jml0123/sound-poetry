import axios from 'axios';
import { PoemDto } from './sound-poems.models';

export default class SpHttpService {

  private static rootUrl: string = 'https://poetrydb.org/';

  static async searchByLine(line: string): Promise<PoemDto[]> {
   return axios.get(`${this.rootUrl}/lines/${line.split(' ').join('%20')}`).then(res => {
      const poemData: PoemDto[] = res.data;
      return poemData
    });
  };

  static async searchByTitle(title: string): Promise<PoemDto[]> {
   return axios.get(`${this.rootUrl}/title/${title.split(' ').join('%20')}`).then(res => {
      const poemData: PoemDto[] = res.data;
      return poemData
    });
  };

   static async searchByAuthor(author: string): Promise<PoemDto[]> {
   return axios.get(`${this.rootUrl}/author/${author.split(' ').join('%20')}`).then(res => {
      const poemData: PoemDto[] = res.data;
      return poemData
    });
  };



}