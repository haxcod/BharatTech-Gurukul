import { motion } from 'framer-motion'
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa'
import vinayImg from '../assets/team/vinay.avif'
import saniyaImg from '../assets/team/saniya.avif'
import anmolImg from '../assets/team/anmol.jpeg'
import ashishImg from '../assets/team/ashish.jpg'
import sachinImg from '../assets/team/sachin.avif'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const team = [
  {
    name: 'Er. Vinay Kumar',
    role: 'Founder & Director',
    image: vinayImg,
    skills: ['Security Systems', 'Digital Solutions', 'Legal advisor'],
    social: { linkedin: 'https://www.linkedin.com/in/vinay-kumar-abb2ab213', twitter: 'https://x.com/bharattech_g', email: 'mailto:contact@bharattechgurukul.tech' }
  },
  {
    name: 'Saniya Shah',
    role: 'Real Estate Dealer & Law Student',
    image: saniyaImg,
    skills: ['Property Law', 'Real Estate', 'Legal Advise'],
    social: { linkedin: '#', twitter: '#', email: '#' }
  },
  {
    name: 'Er. Anmol kashyap',
    role: 'Network & Electronic Engineer',
    image: anmolImg,
    skills: ['Network Architecture', 'Electronics', 'Tech Support'],
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Er. Ashish Rathaur',
    role: 'Lead Software Developer',
    image: ashishImg,
    skills: ['Full Stack Dev', 'Mobile Apps', 'Code Architecture'],
    social: { linkedin: '#', github: '#', email: '#' }
  },
  {
    name: 'Er. Sachin Maurya',
    role: 'Civil engineer',
    image: sachinImg,
    skills: ['Civil engineer', 'Real Estate', 'Architecture engineer'],
    social: { linkedin: '#', github: '#', email: '#' }
  }
]

const TeamCard = ({ member }) => (
  <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 p-6 pt-10 transition-all duration-500 hover:border-orange-500/50 hover:bg-white/10 group h-full">
    {/* Image Container - Circular */}
    <div className="relative w-32 h-32 mx-auto mb-6">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 animate-pulse opacity-20 group-hover:opacity-40" />
      <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-orange-500/50 to-blue-500/50 blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 group-hover:border-orange-500/80 transition-colors duration-500">
        <img 
          src={member.image} 
          alt={`${member.name} - ${member.role}`} 
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      {/* Social Links Overlay - Adjusted for circle */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex gap-2 scale-0 group-hover:scale-100 transition-all duration-500 delay-100">
        {Object.entries(member.social).map(([platform, link]) => (
          <a
            key={platform}
            href={link}
            className="w-7 h-7 rounded-full glass flex items-center justify-center text-white hover:bg-orange-500 transition-colors shadow-lg"
          >
            {platform === 'linkedin' && <FaLinkedin size={12} />}
            {platform === 'twitter' && <FaTwitter size={12} />}
            {platform === 'github' && <FaGithub size={12} />}
            {platform === 'email' && <FaEnvelope size={12} />}
          </a>
        ))}
      </div>
    </div>

    {/* Content */}
    <div className="text-center">
      <h3 className="text-white font-bold text-lg mb-1">{member.name}</h3>
      <p className="text-orange-400 text-xs font-semibold mb-4">{member.role}</p>
      
      <div className="flex flex-wrap justify-center gap-2">
        {member.skills.map((skill, j) => (
          <span key={j} className="px-2 py-0.5 rounded-md bg-white/5 text-[10px] text-white/50 border border-white/5 uppercase tracking-wider">
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
)

export default function Team() {
  return (
    <section id="team" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#050d2e]/50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-orange-400 text-sm font-semibold tracking-wider uppercase mb-4">
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
              The Experts
              <div className="w-8 h-0.5 bg-orange-400 rounded" />
            </div>
            <h2 className="section-title text-white mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="section-sub">
              A diverse group of professionals dedicated to bringing you the best solutions in technology, security, property, and law.
            </p>
          </motion.div>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden pb-12">
          <Slider {...{dots:true,infinite:true,speed:500,slidesToShow:1,slidesToScroll:1,arrows:false}}>
            {team.map((member, i) => (
              <div key={i} className="px-2">
                <TeamCard member={member} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
