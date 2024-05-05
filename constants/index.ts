import { FaWpforms } from "react-icons/fa6";
import { FaCode } from "react-icons/fa6";
import { FaRankingStar } from "react-icons/fa6";
import { GoDiscussionClosed } from "react-icons/go";
import { HiLightBulb } from "react-icons/hi";
import { GoVerified } from "react-icons/go";

export const benefits = [
    {
        title: 'Prize Pool',
        description: 'Dive into a sea of rewards with our substantial prize pool!',
        icon: '/assets/prizepool.png'
    },
    {
        title: 'Gourmet Delights',
        description: 'Savor the taste of success with our delicious food offerings!',
        icon: '/assets/food.jpeg'
    },
    {
        title: 'Merchandise',
        description: 'Stand out with our trendy and exclusive swags!',
        icon: '/assets/swag.jpg'
    },
    {
        title: 'Networking',
        description: 'Forge valuable connections in the tech world!',
        icon: '/assets/network.avif'
    },
]

export const  tracks = [
    {
        title1: 'Open',
        title2: 'Innovation',
        description: `In this domain, participants will explore collaborative approaches to problem-solving. They will work with various stakeholders to develop innovative solutions. The goal is to leverage external ideas and resources to drive positive change, fostering an environment of open innovation.`,
        title1Class: '',
        title2Class: 'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent',
        border: 'bg-blue-500/30'
    },
    {
        title1: 'Immersive Technologies &',
        title2: 'Social Impact',
        description: `Participants in this domain will utilize virtual reality (VR) to create immersive experiences. These experiences aim to raise awareness of social and environmental issues, fostering empathy and inspiring action towards solving these problems.`,
        title1Class: '',
        title2Class: 'bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent',
        border: 'bg-green-500/30'
    },
    {
        title1: 'Artificial Intelligence in',
        title2: 'Food Industry',
        description: `This domain focuses on leveraging artificial intelligence (AI) to transform the food industry. Participants will develop AI systems to revolutionize food production and consumption, aiming to improve efficiency, health, and sustainability in food-related processes.`,
        title1Class: '',
        title2Class: 'bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent',
        border: 'bg-violet-500/30'
    },
    {
        title1: 'Financial Technology',
        title2: '& Blockchain',
        description: `In this domain, participants will explore decentralized finance (DeFi) solutions. They will create user-friendly DeFi platforms and mobile apps for micro-transactions, aiming to democratize finance and provide access to financial services for underbanked communities.`,
        title1Class: 'bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent',
        title2Class: '',
        border: 'bg-yellow-500/30'
    },
    {
        title1: 'Cybersecurity and',
        title2: ' Social Media',
        description: `Participants will focus on developing tools to combat cyberbullying on social media platforms. By utilizing machine learning and natural language processing, they will detect and flag instances of cyberbullying, empowering users to report incidents and promoting
        responsible online behavior.`,
        title1Class: '',
        title2Class: 'bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent',
        border: 'bg-red-500/30'
    },
]

export const TimeLineElements: { id: number, title: string, description: string, date: string, icon: React.ElementType }[] = [
    {
        id:1,
        title:'Registration Starts with idea submission:',
        description:"- Registration for the hackathon officially opens. Participants can begin submitting their ideas for consideration.",
        date: '23 April 2023',
        icon: FaWpforms 
    },
    {
        id:2,
        title:'Registration Ends:',
        description:"- This marks the deadline for participants to complete their registration and submit their ideas for the hackathon.",
        date: '05 May 2024',
        icon:  HiLightBulb
    },
    {
        id:3,
        title:'Announcement of shortlisted teams:',
        description:`- The organizing committee will review submitted ideas and announce the shortlisted teams that will participate in the hackathon.`,
        date: '05 May 2024',
        icon: GoVerified 
    },
    {
        id:4,
        title:'Hackathon day 1:',
        description:`- The first day of the hackathon begins, participating teams will gather to start working on their projects. Workshops, team formations, and initial brainstorming sessions may take place.`,
        date: '09 May 2023',
        icon: FaCode 
    },
    {
        id:4,
        title:'Hackathon day 2 and event conclusion:',
        description:`- The hackathon continues into its second day, with teams focusing on project development and completion. The event concludes with final presentations and the announcement of winners.`,
        date: '10 May 2023',
        icon: FaRankingStar 
    }
]

export const siteMetadataConfig: { ogImage: string } = {
    ogImage: '/assets/opengraph-image.png',
}