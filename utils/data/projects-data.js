import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'RICE Smart',
        description: "RICE Smart is an Android application designed to aid students in preparing for government exams. Leveraging Java, Kotlin, and Python for backend development, and using Firebase for notification management, the app follows the MVVM architecture. It offers features like guidance from experienced educators, live learning classes, enriching content, and high-quality recorded videos. Additionally, RICE Smart provides monthly mock tests, offline doubt clearing classes, printed study materials, examination-specific classes, 1-on-1 teacher appointments, and regular examinations to ensure comprehensive preparation.",
        tools: ['Android Studio', 'Java', 'Kotlin', 'Firebase', 'Retrofit', 'Room', 'Glide', 'MVVM', 'Exoplayer', 'Python', 'GIT'],
        role: 'Team Lead',
        code: '',
        demo: 'https://play.google.com/store/apps/details?id=com.ricesmart.learner&hl=en&gl=US',
        image: crefin,
    },
    {
        id: 2,
        name: 'Geoagri',
        description: 'GeoAgri is an Agri Commodities Information Service delivering detailed insights into the agriculture commodity market. It provides accurate spot prices, APMC arrivals, NCDEX & MCX futures, and weather data, enabling informed decisions. Users, including farmers and traders, access market reports, crop estimates, and news. The app also features comprehensive data and special reports on commodity supply, demand, production, and international trade, supporting efficient business operations and strategic planning for industry participants.',
        tools: ['Android Studio', 'Java', 'Firebase', 'Retrofit','Dependency Injection', 'Jetpack Compose', 'SQLite', 'WebSocket', 'Glide', 'PHP', 'GIT'],
        role: 'Application Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 3,
        name: 'OnlineTutor',
        description: 'OnlineTutor is a mobile application built using Flutter and Dart, designed to connect learners with tutors globally. Utilizing the BLoC pattern for state management, the app enables users to book slots with tutors and facilitates both chat and video call interactions for effective learning sessions.',
        tools: ['Flutter', 'Dart', 'Android Studio', 'VS Code', 'Xcode', 'Retrofit', 'GIT'],
        code: '',
        role: 'Application Developer',
        demo: '',
        image: crefin,
    },
    {
        id: 4,
        name: 'Brand eManager',
        description: 'Brand eManager is India’s premier business marketing and branding app. It helps create posters for festivals, business marketing, politics, and daily themes. The app features image-to-video posts, image editing, custom templates, digital business cards, and more. It covers all major Indian festivals and events, providing daily updates. Users can easily register and input their company details to start creating branding content, making it a comprehensive 360-degree branding solution for businesses.',
        tools: ['Android', 'Java', 'Retrofit', 'Firebase', 'openCV'],
        code: '',
        demo: '',
        image: crefin,
        role: 'Assistant Application Developer',
    }
];