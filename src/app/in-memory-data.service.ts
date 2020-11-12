import { InMemoryDbService } from 'angular-in-memory-web-api'; 

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const news = [
            {
                "title": "Making A New Trend In Poster Printing",
                "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
                "image" : "../../assets/image4/rectangle.jpg",
                "importance" : "important",
                "time" : "date",
                "category": "News",
                "author": "John Nash",
                "shares": "2000",
                "views" : "23000"
            },
            {
                "title": "How To Boost Your Traffic Of Your Blog And Destroy The Competition",
                "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
                "image" : "../../assets/image5/rectangle-copy-11.jpg",
                "importance" : "important",
                "time" : "date",
                "category": "Sports",
                "author": "John Nash",
                "shares": "2000",
                "views" : "23000"
            },
            {
                "title": "Where To Look For Cheap Brochure Printing Services",
                "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
                "image" : "../../assets/image6/rectangle-copy-14.jpg",
                "importance" : "important",
                "time" : "date",
                "category": "News",
                "author": "John Nash",
                "shares": "2000",
                "views" : "23000"
            },
            {
                "title": "Effective Forms Advertising Internet Web Site",
                "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
                "image" : "../../assets/image7/rectangle-copy-15.jpg",
                "importance" : "important",
                "time" : "date",
                "category": "Sports",
                "author": "John Nash",
                "shares": "2000",
                "views" : "23000"
            },
    
          ];    
      
      const allNews = [
        {
            "title": "FBI hunts trader for 'N Korea links'",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image1/bitmap.jpg",
            "importance" : "high",
            "time" : "date",
            "category": "News",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Premier League news conferences",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image2/bitmap.jpg",
            "importance" : "high",
            "time" : "date",
            "category": "Sports",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "India’s most expensive tea",
            "content" : "It is among the rarest tea in the world picked only when the moon is full.",
            "image" : "../../assets/image3/bitmap.jpg",
            "importance" : "high",
            "time" : "date",
            "category": "Explore",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "India’s most expensive tea",
            "content" : "It is among the rarest tea in the world picked only when the moon is full.",
            "image" : "../../assets/image3/bitmap.jpg",
            "importance" : "high",
            "time" : "date",
            "category": "Explore",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Break Through Self Doubt And Fear",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image8/rectangle.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "News",
            "author": "John Nash",
            "shares": "2008",
            "views" : "23000"
        },
        {
            "title": "10 Steps To Look Younger",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image9/rectangle-copy-20.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "Sports",
            "author": "John Nash",
            "shares": "2007",
            "views" : "23000"
        },
        {
            "title": "Tips For A Healthy Clear Complexion",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image10/rectangle-copy-21.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "News",
            "author": "John Nash",
            "shares": "2006",
            "views" : "23000"
        },
        {
            "title": "Tips For A Healthy Clear Complexion",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image10/rectangle-copy-21.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "Sports",
            "author": "John Nash",
            "shares": "2005",
            "views" : "23000"
        },
        {
            "title": "When Your Meal Bites Back Tips For Avoiding Food Poisoning",
            "content" : "Vegetables are essential to the human diet. We get a great deal of our daily vitamin content from vegetables. We need to make sure that how we cook them does not drain vitamin contents and benefits of consumption.",
            "image" : "../../assets/image14/rectangle-copy-28.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "Food",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Cooking For One",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image15/rectangle-copy-32.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "Food",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Turkey Gravy Secrets Revealed",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image16/rectangle-copy-33.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "Food",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Making A New Trend In Poster Printing",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image17/rectangle-copy-35.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "sports",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Home Business Advertising Ideas",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image18/rectangle-copy-36.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "sports",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Creative Outdoor Ads",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image20/rectangle-copy-37.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "sports",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Making A New Trend In Poster Printing",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image22/rectangle-copy-40.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "other",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Travel Prudently Luggage And Carry On Worries",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image23/rectangle-copy-40.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "other",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Branding Do You Know Who You Are",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image24/rectangle-copy-40.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "other",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Live Poker How To Win Tournament Games",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image25/rectangle-copy-40.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "other",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Business Travel With The Wife",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image21/rectangle.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "travel",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Travel Prudently Luggage And Carry On Worries",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image21/rectangle.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "travel",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Branding Do You Know Who You Are",
            "content" : "Tan Wee Beng told the BBC that he had only learned of criminal charges against him.",
            "image" : "../../assets/image21/rectangle.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "travel",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
        {
            "title": "Live Poker How To Win Tournament Games",
            "content" : "All the latest Premier League news as managers face the media before this weekend's fixtures.",
            "image" : "../../assets/image21/rectangle.jpg",
            "importance" : "important",
            "time" : "date",
            "category": "travel",
            "author": "John Nash",
            "shares": "2000",
            "views" : "23000"
        },
    ];

    
      return {allNews , news};
    }

} 