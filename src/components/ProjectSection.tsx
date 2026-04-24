import p10 from '../assets/10.png';
import p11 from '../assets/11.png';
import p13 from '../assets/13.png';
import p14 from '../assets/14.png';
import p18 from '../assets/18.png';
import p5 from '../assets/5.png';
import p6 from '../assets/6.png';
import p7 from '../assets/7.png';
import p4 from '../assets/4.png';
import p18b from '../assets/p18b.png';
import p15 from '../assets/15.png';
import p2 from '../assets/2.png';
import p16 from '../assets/16.png';
import p19 from '../assets/p19.png';
import P1image from '../assets/image.png';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';

const mockProjects: Project[] = [
  {
    id: "18a",
    title: "Baho Tech",
    description:
      "Creating innovative solutions for people with disabilities. Technology that empowers everyone.",
    image: p18,
    projectUrl: "https://baho-tech-innovation-web.onrender.com/",
    members: [
      { id: "1", name: "Rugambwa Genson", role: "Frontend Developer" },
      { id: "2", name: "Mahoro Gislaine", role: "API Tester" },
      { id: "3", name: "Nancy Teta", role: "Backend Developer" },
      { id: "4", name: "Nyarwaya Kenny", role: "Database Manager" },
    ],
  },
    {
    id: "19",
    title: "BookIt",
    description:
      "BookIt is the digital platform simplifying bus travel in Rwanda and beyond. Search, book, and manage your tickets instantly, eliminating long queues and manual processes.",
    image: p19,
    projectUrl: "https://book-it-rw.onrender.com/",
    members: [
      { id: "1", name: "KWIZERA AIME LOIC", role: "Team Lead" },
      { id: "2", name: "RYABAHIKA ALOYSIE", role: "Developer" },
      { id: "3", name: "NDASHIMYE ALPHA YASSIN", role: "Developer" },
      { id: "4", name: "NZIZA SUGI OLGA", role: "Developer" },
    ],
  },
   {
    id: "2",
    title: "Schedule",
    description:
      "Automate employee scheduling, eliminate shift conflicts, and keep your whole team in sync — from one intelligent dashboard.",
    image:p2,
    projectUrl: "https://schedules-app-uzde.onrender.com/",
    members: [
      { id: "1", name: "YVE Andre", role: "Team Lead" },
      { id: "2", name: "DUSHIME Nani Chris", role: "Developer" },
      { id: "3", name: "KWIZERA Daniel", role: "Developer" },
      { id: "4", name: "NDINDABAHIZI Lisa", role: "Developer" },
      { id: "5", name: "KAMANZI Bruce", role: "Developer" },
    ],
  },
  {
    id: "6",
    title: "ExpenseTracker",
    description:
      "Track expenses, visualize spending patterns, and achieve your financial goals with our intuitive smart expense tracker.",
    image: p6,
    projectUrl: "https://smartexpensetrackerrw.netlify.app/",
    members: [
      { id: "1", name: "Manzi Lucky", role: "Frontend Developer" },
      {
        id: "2",
        name: "Isimbi Michelle Yvonne kundwa",
        role: "Database Manager",
      },
      { id: "3", name: "Isimbi Nshuti Olga", role: "API Tester" },
      { id: "4", name: "Muhire Urban", role: "Backend Developer" },
    ],
  },
  {
    id: "17",
    title: "Smart Parking App",
    description:
      "Find, book, and navigate to parking spaces in seconds. Smart parking for smarter cities — save time, fuel, and frustration.",
    image: P1image,
    projectUrl: "https://smartpark-fawn.vercel.app/",
    members: [
      { id: "1", name: "NIYIGENA David", role: "Database Manager" },
      { id: "2", name: "MPABUKA Gibson", role: "Backend Developer" },
      { id: "3", name: "MULUNGI Martha", role: "API Tester" },
      { id: "4", name: "BYIRINGIRO Prince", role: "Frontend Developer" },
    ],
  },
  {
    id: "13",
    title: "MMS Rwanda",
    description:
      "MMS Rwanda connects Motari, passengers, and leaders on one powerful platform — with real-time tracking, secure payments, and AI-powered insights.",
    image: p13,
    projectUrl: "https://motari-frontend.vercel.app/",
    members: [
      { id: "1", name: "UMURAGWA Dieu Merci", role: "Backend Developer" },
      { id: "2", name: "GWANEZA Divine", role: "API Tester" },
      { id: "3", name: "ISIMBI Mignone Beryl Ange", role: "Database Manager" },
      { id: "4", name: "INEZA Jessica", role: "Database Manager" },
      { id: "5", name: "IRANGABIYE Bertha", role: "Frontend Developer" },
    ],
  },
  {
    id: "10",
    title: "StockMaster",
    description:
      "Professional tracking for modern shops. Real-time sync, deep analytics, and native performance.",
    image: p10,
    projectUrl: "https://stockmaster-cloud.vercel.app/",
    members: [
      { id: "1", name: "Mukama Bruce", role: "Team Lead" },
      { id: "2", name: "Harerimana Ivan Modeste", role: "Developer" },
      { id: "3", name: "Gisa Blaise", role: "Developer" },
      { id: "4", name: "Ntwali Atete Joelle", role: "Developer" },
      { id: "5", name: "Kabanda Mico Sydney", role: "Developer" },
    ],
  },

  {
    id: "15",
    title: "SMCS",
    description:
      "A platform engineered to help soldiers communicate safely with their families and coordinate effectively during critical missions — without compromising security or reliability.",
    image: p15,
    projectUrl: "https://smcs-frontend.vercel.app/",
    members: [
      { id: "1", name: "HUNDWA Maria Mater Dei", role: "Team Lead" },
      { id: "2", name: "Zainab Elmukashfi Ali Musa", role: "Developer" },
      { id: "3", name: "INEZA Rwigamba Wilson", role: "Developer" },
      { id: "4", name: "RUSHAGO Ndayambaje Stacey", role: "Developer" },
      { id: "5", name: "MBONIGABA Ineza Christein", role: "Developer" },
    ],
  },

  {
    id: "14",
    title: "FLOW",
    description:
      "A comprehensive web-based stock management system for  shop retailers that enables inventory tracking, sales management, visual product previews, and multi-shop administration with centralized data synchronization.",
    image: p14,
    projectUrl: "https://tilestokapp-2.onrender.com",
    members: [
      { id: "1", name: "UWISHEMA SONGA Arnaurd Briant", role: "Team Lead" },
      { id: "2", name: "KAYITARE MANZI Werner", role: "Developer" },
      { id: "3", name: "KEZA Kessy Roxanne", role: "Developer" },
      { id: "4", name: "MUGISHA NTWALI Caleb", role: "Developer" },
      { id: "5", name: "NTWALI KALISA Ray", role: "Developer" },
    ],
  },

  {
    id: "5",
    title: "AGRICOM",
    description:
      "Purchase new modern quality Agricultural tools , Fertilizers and differnt kinds of seeds all in one place.",
    image: p5,
    projectUrl: "https://intern-nine-drab.vercel.app/",
    members: [
      { id: "1", name: "Uwase Kayitare Celia", role: "Team Lead" },
      { id: "2", name: "Shema Nick", role: "Developer" },
      { id: "3", name: "Shema Junior", role: "Developer" },
      { id: "4", name: "Shema Alicien", role: "Developer" },
      { id: "5", name: "Mugisha Kenny Bruce", role: "Developer" },
    ],
  },
  {
    id: "7",
    title: "School Management System",
    description:
      "The all-in-one platform for modern schools. Streamline administration, enhance learning, and connect your educational community with powerful integrated tools.",
    image: p7,
    projectUrl: "https://elitefront.vercel.app/",
    members: [
      { id: "1", name: "MANZI UWIZEYIMANA Sammy", role: "Team Lead" },
      { id: "2", name: "SHEMA Ilona", role: "Developer" },
      { id: "3", name: "HATEGEKA Kenny", role: "Developer" },
      { id: "4", name: "CYUSA ANGE Brunain", role: "Developer" },
    ],
  },

  {
    id: "3",
    title: "group 3 project",
    description:
      "No Project provided",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
    projectUrl: "https://stockflow-k9ezy9sbk-ishimwe-brunos-projects.vercel.app",
    members: [
      { id: "1", name: "Mugisha Kayitare Eloge", role: "Team Lead" },
      { id: "2", name: "Manzi Herve", role: "Developer" },
      { id: "3", name: "Ishimwe Bruno", role: "Developer" },
      { id: "4", name: "Kamananga Brian", role: "Developer" },
    ],
  },
  {
    id: "16",
    title: "STERMED",
    description:
      "Streamlined medicine tracking, inventory control and AI-powered analytics across global pharmacy hubs.",
    image: p16,
    projectUrl: "https://stermedd.vercel.app",
    members: [
      { id: "1", name: "KABERA Gaju Elysee", role: "Team Lead" },
      { id: "2", name: "IYIZIRE Corail", role: "Developer" },
      { id: "3", name: "HIRWA Jean Luc", role: "Developer" },
      { id: "4", name: "SHEMA Yvan", role: "Developer" },
      { id: "5", name: "MUGISHA Deborah", role: "Developer" },
    ],
  },
  {
    id: "11",
    title: "ATTEND-X",
    description:
      "A comprehensive platform for managing child sponsorships, donations, and volunteer coordination, empowering SOS Children's Villages to create a brighter future for vulnerable children worldwide.",
    image: p11,
    projectUrl: "https://attendance-project-teal.vercel.app/signin",
    members: [
      { id: "1", name: "KWIZERA Kabanda Bertin", role: "Team Lead" },
      { id: "2", name: "IKIREZI Rwanyonga Favor", role: "Developer" },
      { id: "3", name: "MWUNGERI Sam", role: "Developer" },
      { id: "4", name: "Hirwa Olivier", role: "Developer" },
    ],
  },
 

  {
    id: "4",
    title: "AGRILINK:Where Farmers Meet Buyers,Directly",
    description:
      "AgriLink cuts out the middleman. List your produce, find fresh goods, arrange delivery — all in one transparent marketplace.",
    image: p4,
    projectUrl: "https://agrilink-2.vercel.app/",
    members: [
      { id: "1", name: "TUMWEBAZE Johnson", role: "Team Lead" },
      { id: "2", name: "MANZI Royal Darius", role: "Developer" },
      { id: "3", name: "MUGABO Ruth", role: "Developer" },
      { id: "4", name: "ABATONI Ariella", role: "Developer" },
    ],
  },

  {
    id: "8",
    title: "Umuganda_T",
    description:
      "no Project , just wait.",
    image:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80",
    // projectUrl: "https://group8-project.vercel.app",
    members: [
      { id: "1", name: "Irakoze Cyiza Honore", role: "Group Leader" },
      { id: "2", name: "Sangwa Carl Darcy", role: "Developer" },
      { id: "3", name: "Nshimirimana Abdul Kharim", role: "Developer" },
      { id: "4", name: "Mpabuka Greyson", role: "Developer" },
    ],
  },
  {
    id: "9",
    title: "GROUP 9 Project",
    description:
      "No Project Just wait.",
    image:
      "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
    // projectUrl: "https://group9-project.vercel.app",
    members: [
      { id: "1", name: "BILINGBI-MAX Alvynn Knhel", role: "Team Lead" },
      { id: "2", name: "MUGABO MANZI Calvin", role: "Developer" },
      { id: "3", name: "Bwenge Hirwa Rayan", role: "Developer" },
      { id: "4", name: "Manzi Yvan", role: "Developer" },
      { id: "5", name: "GANZA Yacine Pleasure", role: "Developer" },
    ],
  },

  {
    id: "18b",
    title: "Your Farm's AI Doctor",
    description:
      "Upload a crop image and instantly detect diseases, understand causes, and get effective treatment solutions powered by AI.",
    image: p18b,
    projectUrl: "https://agrinova-front.vercel.app/",
    members: [
      { id: "1", name: "Hirwa Ivan", role: "Team Lead" },
      { id: "2", name: "Umwali Cynthia Belize", role: "Developer" },
      { id: "3", name: "Kwizera Gaga Yanick", role: "Developer" },
      { id: "4", name: "Uwase Nalada Bella", role: "Developer" },
      { id: "5", name: "Niwemugisha Prince", role: "Developer" },
      { id: "6", name: "Mugisha yves", role: "Developer" },
    ],
  },

  {
    id: "20",
    title: "RwandaGo",
    description:
      "Car Rental & Touring System for Foreigners in Rwanda. Providing Easy Transport + Guided Touring for Exact Stay Duration",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    projectUrl: "https://rwanda-eight.vercel.app/",
    members: [
      { id: "1", name: "SHEMA Shanny", role: "Team Lead" },
      { id: "2", name: "SHIMWA Favour Chris", role: "Developer" },
      { id: "3", name: "UMWALI Deborah", role: "Developer" },
      { id: "4", name: "MUHIRWA Fabrice", role: "Developer" },
      { id: "5", name: "MANZI Keza Huguette", role: "Developer" },
    ],
  },
];

export default function ProjectSection() {
  return (
    <section id="projects" className="py-20 bg-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Explore innovative solutions created by talented students from SAN TECH Interns
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
