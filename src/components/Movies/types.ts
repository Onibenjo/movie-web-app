export interface IMovieCarousel {
  id: string;
  name: string;
  image: string;
  rating: number;
  rentPrice: string;
}

export  interface IMovie {
        id: string;
        name: string;
        director: string;
        releaseYear: string;
        poster: string;
        rating: number;
}
    
  export interface ITopCast {
        name: string;
        roleName: string;
    }

    export interface IReview {
        userName: string;
        review: string;
        likes: number;
        dislikes: number;
    }

    export interface IMovieDetails {
        id: string;
        name: string;
        releaseYear: string;
        director: string;
        topCast: ITopCast[];
        images: string[];
        storyline: string;
        reviews: IReview[];
        rentPrice: string;
        rating: number;
    }
