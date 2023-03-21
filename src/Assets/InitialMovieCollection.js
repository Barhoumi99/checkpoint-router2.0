const initialMovieCollection = [
    {
        id: 0,
        title: 'The Shawshank Redemption',
        poster: 'https://th.bing.com/th/id/R.ec3d52daa56bd9c2abf0d82952d3b8ad?rik=KJJPHIPgDUhgbA&pid=ImgRaw&r=0',
        year: 1994,
        rating:9.3,
        story: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        favourite: false
    },
    {
        id: 1,
        title: 'Django Unchained',
        poster: 'https://th.bing.com/th/id/OIP.GHyddD1FWm1aivbmq9APoAHaLH?w=119&h=180&c=7&r=0&o=5&pid=1.7',
        year: 2012,
        rating:8.4,
        story: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.",
        favourite: false
    },
    {
        id: 2,
        title: 'The Lord of the Rings: The Two Towers',
        poster: 'https://th.bing.com/th/id/OIF.q2cETjd8Xq6M6T1usypMJw?pid=ImgDet&rs=1',
        year: 2002,
        rating: 8.8,
        story: "While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron's new ally, Saruman, and his hordes of Isengard.",
        favourite: false
    },
    {
        id: 3,
        title: 'Interstellar',
        poster: 'https://th.bing.com/th/id/OIP.SXxApLG4AunG4BOBm1VMJwHaLk?pid=ImgDet&rs=1',
        year: 2014,
        rating: 8.6,
        story: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
        favourite: false
    },
    {
        id: 4,
        title: 'The Godfather',
        poster: 'https://th.bing.com/th/id/R.b29f1fe191ee14894531ec70c133cda7?rik=seCcBjWmCK%2fUxQ&pid=ImgRaw&r=0',
        year: 1972,
        rating:9.2,
        story: "The aging patriarch of an organized crime dynasty in postwar New York City transfers control of his clandestine empire to his reluctant youngest son.",
        favourite: false
    },
    {
        id: 5,
        title: 'Forrest Gump',
        poster: 'https://th.bing.com/th/id/R.f879b6c80cddcf82531748dfe8990283?rik=rcDsM98qD3ZJ8Q&riu=http%3a%2f%2fshatthemovies.com%2fwp-content%2fuploads%2fyE5d3BUhE8hCnkMUJOo1QDoOGNz-scaled-e1580485501297.jpg&ehk=4kiEbW9%2bC95D3v1RfKh2WpimQXV%2brVZPsdP9QYkURBM%3d&risl=&pid=ImgRaw&r=0',
        year: 1994,
        rating: 8.8,
        story: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
        favourite: false
    },
    {
        id: 6,
        title: '12 Angry Men',
        poster: 'https://th.bing.com/th/id/OIP.NOY_fnGlvaqBJRwOIb2zwQHaLa?pid=ImgDet&rs=1',
        year: 1957,
        rating: 9.0,
        story: "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
        favourite: false
    },
    {
        id: 7,
        title: 'The Man Who Knew Infinity',
        poster: 'https://th.bing.com/th/id/R.7aef3ab000a8ce3a298e767b298d7b8b?rik=XMUqmpD6%2fOGpwQ&riu=http%3a%2f%2fimages.amcnetworks.com%2fifcfilms.com%2fwp-content%2fuploads%2f2016%2f04%2fTheManWhoKnewInfinity_web_small.jpg&ehk=V4l6FUVmmMJqhfQw%2f%2ffsd6qRnIPUVvoaYtqU9KVZuug%3d&risl=&pid=ImgRaw&r=0',
        year: 2016,
        rating: 7.2,
        story: "The story of the life and academic career of the pioneer Indian mathematician, Srinivasa Ramanujan, and his friendship with his mentor, Professor G.H. Hardy.",
        favourite: false
    },
    {
        id: 8,
        title: 'The Lake House',
        poster: 'https://th.bing.com/th/id/R.37ed4956ace35a8d10328c77a69a173c?rik=qqGBNE0AXWj7MA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-F4mG2XQPaQM%2fT4rHed1haUI%2fAAAAAAAABe4%2f6Ob24wXPo80%2fs1600%2fthe-lake-house.jpg&ehk=7WUp1TorOQ%2bVCgQv7XAnxzr0niF4syGCkQ39H0jIcyo%3d&risl=&pid=ImgRaw&r=0',
        year: 2006,
        rating: 6.8,
        story: "A lonely doctor who once occupied an unusual lakeside house begins to exchange love letters with its former resident, a frustrated architect. They must try to unravel the mystery behind their extraordinary romance before it's too late.",
        favourite: false
    },
]
export default initialMovieCollection