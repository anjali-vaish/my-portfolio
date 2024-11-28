export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Satya Subham Nayak',
        position: 'Co-Founder of Fixtix',
        img: 'assets/satya.jpg',
        review:
            'I highly recommend Anjali for her exceptional skills in frontend development and problem-solving. Anjali possesses a keen eye for detail and an innate ability to turn ideas into seamless, user-friendly interfaces. Her proactive approach and creative mindset make her a standout team member. She excels at tackling complex challenges with clarity and delivering efficient solutions. Anjali\'s expertise in coding, coupled with her problem-solving skills, ensures she brings immense value to any project or organization lucky to work with her.',
    },
    {
        id: 2,
        name: 'Prakhar Tripathi',
        position: 'SDE at 4N EcoTech',
        img: 'assets/prakhar.jpg',
        review:
            'Working with Anjali has been an absolute pleasure. Her expertise in web development shines through in every project she takes on. She’s not just technically skilled but also deeply thoughtful about creating user-friendly designs and solving problems effectively. Anjali’s proactive nature and dedication to delivering high-quality work make her a standout contributor. ',
    },
    {
        id: 3,
        name: 'Aditya Mehrotra',
        position: 'CEO of Verseatile',
        img: 'assets/aditya.jpg',
        review:
            'As Anjali Vaish’s supervisor during her time as a Community Associate Intern at VERSEATILE’s Web3 Division, I had the privilege of watching her grow and make a significant impact on our team and community. Anjali consistently impressed me with her proactive approach, adaptability, and deep commitment to fostering a positive and engaging environment for our Web3 community members. Anjali quickly grasped basic Web3 concepts and used that knowledge to create engaging and informative interactions within our community. Her efforts didn’t go unnoticed as she earned an invitation from VERSEATILE to attend TOKEN2049 in Singapore, an opportunity we extended to her in recognition of her outstanding contributions. \n' +
            'Anjali’s ability to leverage new knowledge, her excellent communication skills, and her natural rapport with community members set her apart. I have no doubt that she will continue to excel in any role she takes on in the Web3 space and beyond. Anjali would be a tremendous asset to any team, and I highly recommend her.',
    },
    {
        id: 4,
        name: 'Anam Hussain',
        position: 'Creative Marketing & Strategy Professional at Verseatile',
        img: 'assets/anam.jpg',
        review:
            'Anjali was a dedicated and hardworking Community Associate at VERSEATILE™️. She brought a positive attitude to every task and was always eager to learn and grow, making her a key contributor to our team.\n' +
            '\n' +
            'Her ability to connect with people stood out, as she managed community interactions with professionalism and care. Anjali was proactive, resourceful, and always ready to take on challenges, ensuring our community felt supported and valued.\n' +
            '\n' +
            'Her commitment to personal and professional growth was inspiring, and she continuously sought ways to improve and contribute more. Anjali’s dedication and enthusiasm made her an asset to our team, and I’m confident she will thrive in any role she pursues.',
    },
];

export const myProjects = [
    {
        title: 'Podcastr - AI Podcast Platform',
        desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
        subdesc:
            'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
        //href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        //href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        //href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        //href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        //href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'ZenAdmin.ai',
        pos: 'IT Solutions Specialist',
        duration: 'Nov 2024 - Present',
        title: "IT Solutions Specialist at ZenAdmin, focused on delivering innovative IT solutions in digital lifecycle management (DLM), asset management, MDM, and software management. Helping businesses enhance efficiency and simplify processes across 150+ countries.",
        icon: '/assets/zenadmin.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'TheAntbox',
        pos: 'GTM Growth Executive',
        duration: 'Oct 2024 - Present',
        title: "GTM Growth Executive at TheAntBox, leading go-to-market strategies to drive revenue growth and market penetration. Specializing in crafting data-driven initiatives, optimizing product positioning, and fostering customer acquisition to support scalable business growth and long-term success.",
        icon: '/assets/theantbox.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Verseatile',
        pos: 'Web3 Community Associate',
        duration: 'Jul 2024 - Dec 2024',
        title: "Community Associate at Verseatile, specializing in the Web3 branding ecosystem. Played a pivotal role in building and engaging the community, contributing significantly to our selection as media partners for TOKEN2049, a leading global crypto event.",
        icon: '/assets/verseatile.png',
        animation: 'salute',
    },
    {
        id: 4,
        name: '3rdiTech (IIT Delhi)',
        pos: 'Software Developer',
        duration: 'May 2024 - Jun 2024',
        title: "Software Developer at 3rdItech, incubated at IIT-Delhi, specializing in full-stack web development with a primary focus on frontend design and functionality. Successfully crafted the company's first-ever web-based leave portal, streamlining employee management processes and enhancing user experience.",
        icon: '/assets/3rditech.png',
        animation: 'victory',
    },
];