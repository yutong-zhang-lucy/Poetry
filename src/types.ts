
export interface Poem {
  id: string;
  title: string;
  author: string;
  dynasty: string;
  content: string[];
  pinyin?: string[];
  translation?: string;
  annotation?: { word: string; meaning: string }[];
  category: string;
  subCategory?: string; // e.g., "五言绝句", "七言律诗"
}

export enum AppTab {
  HOME = 'HOME',
  RECITE_TAB = 'RECITE_TAB',
  LIBRARY = 'LIBRARY',
  PROFILE = 'PROFILE'
}

export enum ViewState {
  SEARCH = 'SEARCH',
  DETAIL = 'DETAIL',
  RECITE = 'RECITE',
  CATEGORY_LIST = 'CATEGORY_LIST'
}
