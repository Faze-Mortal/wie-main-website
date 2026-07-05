import React, { useRef, useState, useEffect } from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Faculty & Advisory data
const Faculty = [
  { id: 1, name: "Dr. Mahesh Jangid", designation: "Branch Counselor (IEEE MUJ)", img: "/Team/faculty/mahesh.avif", instagram: "https://www.instagram.com/mahesh_seelak", linkedin: "" },
  { id: 2, name: "Dr Sunita Singhal", designation: "Faculty Coordinator,(IEEE WIE)", img: "/Team/faculty/sunita.avif", instagram: "", linkedin: "" },
  { id: 3, name: "Ms. Juhi Singh", designation: "Faculty Advisory (IEEE WIE)", img: "/Team/faculty/juhi.avif", instagram: "", linkedin: "" },
  { id: 4, name: "Dr. Rishav Dubey", designation: "Faculty Advisory,(IEEE WIE)", img: "/Team/faculty/rishav.jpg", instagram: "", linkedin: "" },
];

const Advisory = [
  { id: 1, name: "Ananta Taneja", designation: "Advisory, IEEE WIE MUJ", img: "/Team/faculty/ananta.avif", instagram: "https://www.instagram.com/at_1920_28?igsh=OGQ5ZDc2ODk2ZA%3D%3D", linkedin: "https://www.linkedin.com/in/ananta-t-690431211/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
];

// Executive Committee Data
const executiveCommittee = [
  { id: 1, name: "Kashish Kumar", designation: "Chairperson", img: "/Team/EC/chair.jpg", instagram: "https://www.instagram.com/kashish._kumar_?igsh=MWEzZTQ3dnN4emVtNw%3D%3D&utm_source=qr", linkedin: "http://linkedin.com/in/kashish-kumar-527ba72b3" },
  { id: 2, name: "Guneet Pahwa", designation: "Vice-Chairperson", img: "/Team/EC/vice.jpg", instagram: "https://www.instagram.com/guneet_7_?igsh=MXM5emYzMTNhczZkMA==", linkedin: "https://www.linkedin.com/in/guneet-pahwa-350063264?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/saumya" },
  { id: 3, name: "Ishani Arora", designation: "Human Resource Director", img: "/Team/EC/hrd.jpg", instagram: "https://www.instagram.com/ishaniiaroraa?igsh=N3M4aGxwbXJuZWI1", linkedin: "https://www.linkedin.com/in/ishani-arora-990959273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 4, name: "Shambhavi Sharma", designation: "Managing Director", img: "/Team/EC/md.jpg", instagram: "https://www.instagram.com/shambhavi_0914?igsh=MXIycWE5ZjJubmowMw==", linkedin: "https://www.linkedin.com/in/shambhavi-sharma-855032312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 5, name: "Tanishk Mittal", designation: "General Secretary", img: "/Team/EC/gensec.jpg", instagram: "https://www.instagram.com/tqnishk.hehe/", linkedin: "https://www.linkedin.com/in/tanishk-mittal-b42719289/", github: "https://github.com/Tanishk109" },
  { id: 6, name: "Akshit Gupta", designation: "Treasurer", img: "/Team/EC/tres.jpg", instagram: "https://www.instagram.com/akshitgupta05?igsh=bXV3OWk3MHc5ZWg3", linkedin: "https://www.linkedin.com/in/akshit-gupta-7a10962b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
  { id: 7, name: "Aarav", designation: "Technical Secretary", img: "/Team/EC/techsec.jpg", instagram: "https://instagram.com/aaranay", linkedin: "https://linkedin.com/in/aaranay", github: "https://github.com/AaroAarav" },
];

// Core Committee Departments Data
const coreDepartments = [
  {
    department: "Technical Projects",
    members: [
      { id: 32, name: "Akshat Kumar", designation: "Head of Technical Projects", img: "/Team/akshatkumar.jpg", instagram: "https://www.instagram.com/akshat__sah?igsh=MWxzdTIzZ3RzbGNkbQ==", linkedin:"https://www.linkedin.com/in/akshat-kumar-976978349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github:"https://github.com/Akshatsah04" },
      { id: 33, name: "Aarohi Dhand", designation: "Joint Head of Technical Projects", img: "/Team/aarohidhand.jpg", instagram: "https://www.instagram.com/aarohi_dhand?igsh=NXVtdzZiMzd3NGk3", linkedin:"https://www.linkedin.com/in/aarohi-dhand-262178310?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"https://github.com/aarohidhand" },
      { id: 34, name: "Kriti Saraogi", designation: "Senior Coordinator", img: "/Team/kritisaraogi.jpg", instagram: "https://www.instagram.com/kritisaraogi?igsh=bzg0emFxNzgyNXp4", linkedin:"http://www.linkedin.com/in/kriti-saraogi-147635324", github:"https://github.com/kriti2307" },
      { id: 35, name: "Vidhu Gupta", designation: "Senior Coordinator", img: "/Team/vidhugupta.jpg", instagram: "https://www.instagram.com/_vidhugupta?igsh=ZjNhN28zeXd1bHVq", linkedin:"https://www.linkedin.com/in/vidhu-gupta-a30586349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"https://github.com/vidhu77" },
      { id: 36, name: "Sumit Sharma", designation: "Senior Coordinator", img: "/Team/sumitsharma.jpg", instagram: "https://www.instagram.com/whoissumitttt?igsh=MXN0cnVreXh2eDEwMA==", linkedin:"https://www.linkedin.com/in/sumit-sharma-36241a339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
    ]
  },
  {
    department: "Logistics",
    members: [
      { id: 37, name: "Akshat Raheja", designation: "Head of Logistics", img: "/Team/akshatraheja.jpg", instagram: "https://www.instagram.com/akshat_raheja06?igsh=eTJpejZvYXNwZTJj", linkedin:"https://www.linkedin.com/in/akshat-raheja-a82396306?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 38, name: "Ambika Khandelwal", designation: "Joint Head of Logistics", img: "/Team/ambikakhandelwal.jpg", instagram: "https://www.instagram.com/ambikakhandelwal_?igsh=MXdiN3AzMHd6aHN6dw==", linkedin:"https://www.linkedin.com/in/ambika-khandelwal-782bb1247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 39, name: "Kushagra Singh", designation: "Senior Coordinator", img: "/Team/kushagrasingh.jpg", instagram: "https://www.instagram.com/kushagra.21?igsh=aXg0bXAxMzk0OXk4", linkedin:"https://www.linkedin.com/in/kushagra-singh-12384b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 40, name: "Sarath Mohanraj", designation: "Senior Coordinator", img: "/Team/sarathmohanraj1.jpg", instagram: "https://www.instagram.com/sarathmohanraj?igsh=MTRva3d5cGtjaGhhNg==", linkedin:"https://www.linkedin.com/in/sarath-mohanraj-55aa74335?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 41, name: "Ria Gupta", designation: "Senior Coordinator", img: "/Team/riagupta.jpg", instagram: "", linkedin:"", github:"" },
      { id: 42, name: "Ved Salodkar", designation: "Senior Coordinator", img: "/Team/vedsalodkar.jpg", instagram: "", linkedin:"", github:"" },
    ]
  },
  {
    department: "Media",
    members: [
      { id: 43, name: "Meshwa Sunil Patel", designation: "Head of Media", img: "/Team/meshwapatel.jpg", instagram: "https://www.instagram.com/_meshwa_p?igsh=dG13eWFnMnZncmVl&utm_source=qr", linkedin:"http://linkedin.com/in/meshwa-sunil-patel-9b404b292", github:"https://github.com/meshwa-p" },
      { id: 44, name: "Aakshra Tomar", designation: "Joint Head of Media", img: "/Team/aakshratomar.jpg", instagram: "https://www.instagram.com/aakshra_tomar01?igsh=MWY3czZsYmRrMnFqaQ%3D%3D&utm_source=qr", linkedin:"https://www.linkedin.com/in/aakshra-tomar-07637833a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github:"" },
      { id: 45, name: "Shreya Bharti", designation: "Senior Coordinator", img: "/Team/shreyabharti.jpg", instagram: "https://www.instagram.com/sh_reyyaa12?igsh=cXg5OG1yemZhY205", linkedin:"https://www.linkedin.com/in/shreya-bharti-729690368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 47, name: "Rujul Dani", designation: "Senior Coordinator", img: "/Team/rujuldani.jpg", instagram: "", linkedin:"", github:"" },
    ]
  },
  {
    department: "Editorial",
    members: [
      { id: 48, name: "Ashita Saxena", designation: "Head of Editorial", img: "/Team/ashitasaxena.jpg", instagram: "https://www.instagram.com/ashitaaaa_0808/", linkedin:"https://www.linkedin.com/in/ashita-saxena-a3178824a/", github:"" },
      { id: 49, name: "Shnigddha Pandey", designation: "Joint Head of Editorial", img: "/Team/shnigddhapandey.jpg", instagram: "https://www.instagram.com/asturias_7321?igsh=YnUyNzI1YmcyZW83", linkedin:"https://www.linkedin.com/in/shnigddha-pandey-3a0a58333?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"https://github.com/shnigddha" },
      { id: 50, name: "Suhina Ray", designation: "Senior Coordinator", img: "/Team/suhinaray.jpg", instagram: "https://www.instagram.com/suhina.ray?igsh=MTZ1dmoxdDBpZTF4Zw%3D%3D&utm_source=qr", linkedin:"https://in.linkedin.com/in/suhina-ray-47738132a", github:"" },
      { id: 51, name: "Kresha Jain", designation: "Senior Coordinator", img: "/Team/kreshajain.jpg", instagram: "https://www.instagram.com/kreshajain_?igsh=MXNpMGZiamxzcXpmbg%3D%3D&utm_source=qr", linkedin:"http://www.linkedin.com/in/kresha-jain-44a150371", github:"https://github.com/kreshaj" },
      { id: 52, name: "Suryansh Shah", designation: "Senior Coordinator", img: "/Team/suryanshshah.jpg", instagram: "", linkedin:"https://www.linkedin.com/in/suryanshshahurl?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
    ]
  },
  {
    department: "Corporate Affairs",
    members: [
      { id: 101, name: "Suhaan Tanveer", designation: "Head of Corporate Affairs", img: "/Team/suhaantanveer.jpg", instagram: "https://www.instagram.com/vio_lucky_?igsh=MTNnbDJncWtuZHkydA==", linkedin: "https://www.linkedin.com/in/suhaan-tanveer-39a596345?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 201, name: "Madhura Bhosale", designation: "Joint Head of Corporate Affairs", img: "/Team/madhurabhosale.jpg", instagram: "https://www.instagram.com/itsokaymadhura?igsh=b25qNnBvYnJuMWxi", linkedin: "https://www.linkedin.com/in/madhura-bhosale-b79615316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 301, name: "Tanisha Bhardwaj", designation: "Senior Coordinator", img: "/Team/tanishabhardwaj.jpg", instagram: "https://www.instagram.com/tanishazzz.z?igsh=MWUwMjk4cGo3dHo2ZQ==", linkedin: "https://www.linkedin.com/in/tanisha-b-50257a223?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 401, name: "Aaryan", designation: "Senior Coordinator", img: "/Team/aaryan.jpg", instagram: "", linkedin:"", github:"" },
      { id: 501, name: "Soumya Arya", designation: "Senior Coordinator", img: "/Team/soumyaarya.jpg", instagram: "", linkedin:"", github:"" },
    ]
  },
  {
    department: "Curations",
    members: [
      { id: 601, name: "Aayra Gupta", designation: "Head of Curations", img: "/Team/aayragupta.jpg", instagram: "https://www.instagram.com/aayra0_0?igsh=OHdicHIzeGhhYjcz", linkedin: "https://www.linkedin.com/in/aayra-gupta-9b248526b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 701, name: "Guru", designation: "Joint Head of Curations", img: "/Team/guru.jpg", instagram: "", linkedin: "" },
      { id: 801, name: "Parth Joshi", designation: "Senior Coordinator", img: "/Team/parthjoshi.jpg", instagram: "https://www.instagram.com/itsparth26o4?igsh=MThoZG5kZGF0dHYwOA==", linkedin: "https://www.linkedin.com/in/parth-joshi-168a68363?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 901, name: "Yash Kishore", designation: "Senior Coordinator", img: "/Team/yashkishore.jpg", instagram: "https://www.instagram.com/yash318_/", linkedin:"https://www.linkedin.com/in/yashkishore2/", github:"" },
      { id: 10, name: "Samichha Singh", designation: "Senior Coordinator", img: "/Team/samichhasingh.jpg", instagram: "https://www.instagram.com/samikshaa_1310?igsh=cTZjNHY0ZzhpdmJu", linkedin:"https://www.linkedin.com/in/samichha-singh-5b3405282", github:"https://github.com/Samichha13" },
      { id: 11, name: "Akshita Jain", designation: "Senior Coordinator", img: "/Team/akshitajain.jpg", instagram: "https://www.instagram.com/akshitajain_27", linkedin:"https://www.linkedin.com/in/akshitajain-ai", github:"" },
    ]
  },
  {
    department: "Social Media",
    members: [
      { id: 12, name: "Aastha Shukla", designation: "Head of Social Media", img: "/Team/aasthashukla.jpg", instagram: "", linkedin: "" },
      { id: 13, name: "Shivangi Kotnala", designation: "Joint Head of Social Media", img: "/Team/shivangikotnala.jpg", instagram: "https://www.instagram.com/kotnalashivangi?igsh=d21ibnkzNmVhNXNl&utm_source=qr", linkedin: "https://www.linkedin.com/in/shivangi-kotnala-41a4b3359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { id: 14, name: "Polina Aneja", designation: "Senior Coordinator", img: "/Team/polinaaneja.jpg", instagram: "https://www.instagram.com/polinaaneja/", linkedin: "https://www.linkedin.com/in/polina-aneja-307791329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 15, name: "Ritika Lal", designation: "Senior Coordinator", img: "/Team/ritikalal.jpg", instagram: "https://www.instagram.com/_ritika_2805?igsh=MTZkbXpiOTBtMjZyaA==", linkedin:"https://www.linkedin.com/in/ritika-lal-31a07a311?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 16, name: "Saina Kumar", designation: "Senior Coordinator", img: "/Team/sainakumar.jpg", instagram: "", linkedin:"", github:"" },
    ]
  },
  {
    department: "Promotions",
    members: [
      { id: 17, name: "Chinmayee Khanna", designation: "Head of Promotions", img: "/Team/chinmayeekhanna.jpg", instagram: "https://www.instagram.com/chinmayee.kh?igsh=MWZnamJqZ3F6c3M1NQ%3D%3D&utm_source=qr", linkedin: "https://www.linkedin.com/in/chinmayee-khanna-a663492b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { id: 18, name: "Vidhushi Rathore", designation: "Joint Head of Promotions", img: "/Team/vidhushirathore.jpg", instagram: "https://www.instagram.com/ll.vidushii.ll?igsh=MTdncDZhcWoybGhheg==", linkedin: "" },
      { id: 19, name: "Vanshika Bhatia", designation: "Senior Coordinator", img: "/Team/vanshikabhatia.jpg", instagram: "https://www.instagram.com/vanshika_bhatia27?igsh=OXQyYWNiZWNoMHYw&utm_source=qr", linkedin: "https://www.linkedin.com/in/vanshika-bhatia-a69300319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { id: 20, name: "Ayesha Askari", designation: "Senior Coordinator", img: "/Team/ayeshaaskari.jpg", instagram: "https://www.instagram.com/ayesha.askari?igsh=NTV6dzFkNXU1dmxh", linkedin:"https://www.linkedin.com/in/ayesha-askari-7bb5b3351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 21, name: "Aksh Singhi", designation: "Senior Coordinator", img: "/Team/akshsinghi.jpg", instagram: "https://www.instagram.com/aksh_singhi/?utm_source=ig_web_button_share_sheet", linkedin:"https://in.linkedin.com/in/aksh-singhi-304146325?utm_source=share&utm_medium=member_mweb&utm_campaign=share_via&utm_content=profile", github:"" },
    ]
  },
  {
    department: "Graphics Design",
    members: [
      { id: 22, name: "Annanya Jaswal", designation: "Head of Graphics Design", img: "/Team/annanyajaswal.jpg", instagram: "https://www.instagram.com/annanyaa_26_?igsh=NXhnc21iZG01ZTNh&utm_source=qr", linkedin:"https://www.linkedin.com/in/annanya-jaswal-2133a8330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github:"" },
      { id: 23, name: "Piyush Agarwal", designation: "Joint Head of Graphics Design", img: "/Team/piyushagarwal.jpg", instagram: "https://www.instagram.com/piyushagarwal5525?igsh=YnM4ZnZvcnFpdWVi", linkedin:"https://www.linkedin.com/in/piyush-agarwal-97b731316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 24, name: "Ansh", designation: "Senior Coordinator", img: "/Team/ansh.jpg", instagram: "https://www.instagram.com/simpl.icity18?igsh=MWJjMW8xN3Z0NWZ6bg==", linkedin:"", github:"" },
      { id: 25, name: "Subhi Gupta", designation: "Senior Coordinator", img: "/Team/subhigupta.jpg", instagram: "https://www.instagram.com/subhiiguptaa?igsh=MW1jOHY2eGo0cjIxMQ==", linkedin:"", github:"" },
    ]
  },
  {
    department: "Events",
    members: [
      { id: 26, name: "Palakshi Sirsat", designation: "Head of Events", img: "/Team/palakshisirsat.jpg", instagram: "https://www.instagram.com/palakshiiii_?igsh=MXdld3ptcnc4bXNzOQ==", linkedin:"https://www.linkedin.com/in/palakshi-sirsat-8185b4351?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 27, name: "Kshiti Singh", designation: "Joint Head of Events", img: "/Team/kshitisingh.jpg", instagram: "https://www.instagram.com/k_shiti_?igsh=MTVqcW4wNzFzYnQwcA%3D%3D&utm_source=qr", linkedin:"https://www.linkedin.com/in/kshiti-singh-6515b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" },
      { id: 28, name: "Tanmay Gole", designation: "Senior Coordinator", img: "/Team/tanmaygole.jpg", instagram: "https://www.instagram.com/_tanmay_gole?igsh=OTN6dG9mOHI0OG0=", linkedin:"https://www.linkedin.com/in/tanmay-g-390690313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 29, name: "Mahika Sahu", designation: "Senior Coordinator", img: "/Team/mahikasahu.jpg", instagram: "https://www.instagram.com/mahikasahu_?igsh=aWZrdWprOGQ0Nnp0", linkedin:"https://www.linkedin.com/in/mahika-sahu-85b801370?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
      { id: 30, name: "Shriya Desai", designation: "Senior Coordinator", img: "/Team/shriyadesai.jpg", instagram: "https://www.instagram.com/shriyadesai612?igsh=bDNqZGNpdm82MXhi", linkedin:"https://www.linkedin.com/in/shriya-desai-9a3b74361", github:"https://github.com/astro-quanta" },
      { id: 31, name: "Dhruv Gupta", designation: "Senior Coordinator", img: "/Team/dhruvgupta.jpg", instagram: "https://www.instagram.com/ur_dhruvv/", linkedin:"https://www.linkedin.com/in/dhruv-gupta-3933b231a" },
    ]
  },
  {
    department: "Community",
    members: [
      { id: 53, name: "Tanisha Srivastava", designation: "Community Manager", img: "/Team/tanishasrivastava.jpg", instagram: "https://www.instagram.com/tanishasrivastava?igsh=MTd2Y2Q2Nmo2ZHF4ag==", linkedin:"https://www.linkedin.com/in/tanisha-srivastava-990232330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github:"" },
      { id: 54, name: "Anushka Dixit", designation: "Community Manager", img: "/Team/anushkadixit.jpg", instagram: "", linkedin:"", github:"" }
    ]
  }
];

// Shuffle Utility (Locks index 0 and 1)
const shuffleMembers = (members) => {
  if (members.length <= 2) return members;
  const heads = members.slice(0, 2);
  const others = members.slice(2);
  for (let i = others.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [others[i], others[j]] = [others[j], others[i]];
  }
  return [...heads, ...others];
};

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

// Base Static Card Component (used for Faculty/Advisory)
const TeamCard = ({ member }) => {
  const { name, designation, img, instagram, linkedin, github } = member;
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white/10 border border-white/20 backdrop-blur-lg rounded-3xl p-6 shadow-2xl hover:scale-[1.03] transition-transform duration-300 w-full max-w-xs group"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-80 object-cover rounded-2xl border border-purple-500 mb-4 transition-transform group-hover:scale-105"
      />
      <h3 className="text-xl font-semibold text-purple-100 mb-1 text-center">{name}</h3>
      <p className="text-purple-400 text-sm mb-4 text-center">{designation}</p>
      <div className="flex justify-center gap-5 text-xl text-purple-300">
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500 transition" /></a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-500 transition" /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition" /></a>}
      </div>
    </motion.div>
  );
};

// Filtered Core Card Component
const CoreCard = ({ member }) => {
  const { name, designation, img, instagram, linkedin, github } = member;
  return (
    <div className="bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg transition-all duration-300 w-full h-full group hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-500/50">
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-xl border border-gray-600 mb-4 transition-all duration-300 grayscale contrast-125 group-hover:grayscale-0 group-hover:border-purple-400"
      />
      <h3 className="text-lg font-semibold text-purple-100 mb-1 text-center">{name}</h3>
      <p className="text-purple-300 text-xs mb-4 text-center">{designation}</p>
      <div className="flex justify-center gap-4 text-lg text-purple-400/80 group-hover:text-purple-300">
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-400 transition" /></a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400 transition" /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition" /></a>}
      </div>
    </div>
  );
};

const ExecutiveCard = ({ member, innerRef, textRef }) => {
  return (
    <div 
      className="relative w-full flex-shrink-0 md:flex-1 md:max-w-[160px] lg:max-w-[170px] h-[380px] group perspective-[1500px]"
    >
      <div
        ref={innerRef}
        className="w-full h-full absolute inset-0 [transform-style:preserve-3d] rounded-xl shadow-[0_0_10px_rgba(217,70,239,0.15)] group-hover:shadow-[0_0_25px_rgba(217,70,239,0.5)] group-hover:-translate-y-1 transition-shadow duration-500"
      >
        {/* Front Face (Unrevealed) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-[#070312] border-[1px] border-fuchsia-500/30 group-hover:border-fuchsia-500/60 transition-colors duration-500 rounded-xl overflow-hidden flex flex-col items-center justify-center p-4">
          {/* Outer Frame Corners */}
          <div className="absolute inset-0 pointer-events-none z-30 rounded-xl">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-[2px] border-l-[2px] border-fuchsia-500/40 opacity-70 group-hover:border-fuchsia-400 group-hover:opacity-100 transition-all duration-500 rounded-tl-xl"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-fuchsia-500/40 opacity-70 group-hover:border-fuchsia-400 group-hover:opacity-100 transition-all duration-500 rounded-tr-xl"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-fuchsia-500/40 opacity-70 group-hover:border-fuchsia-400 group-hover:opacity-100 transition-all duration-500 rounded-bl-xl"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[2px] border-r-[2px] border-fuchsia-500/40 opacity-70 group-hover:border-fuchsia-400 group-hover:opacity-100 transition-all duration-500 rounded-br-xl"></div>
          </div>

          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(217,70,239,0.05)_50%,transparent_75%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
          <h3 className="font-mono tracking-[0.1em] text-fuchsia-400/80 text-xs md:text-[13px] text-center uppercase relative z-10 break-words w-full px-2">
            {member.designation}
          </h3>
          <div className="absolute bottom-6 w-full text-center">
            <span className="font-mono text-[9px] md:text-[10px] text-fuchsia-300/60 tracking-widest animate-pulse">
              [ ACCESS LOCKED ]
            </span>
          </div>
        </div>

        {/* Back Face (Revealed) */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-[#070312] border-[1px] border-fuchsia-500/60 rounded-xl overflow-hidden shadow-[0_0_15px_rgba(217,70,239,0.25)]">
          {/* Full Background Portrait */}
          <img
            src={member.img}
            alt={member.name}
            loading="eager"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
          
          {/* Outer Frame Corners (Float on top) */}
          <div className="absolute inset-0 pointer-events-none z-30 rounded-xl">
             <div className="absolute top-0 left-0 w-4 h-4 border-t-[2px] border-l-[2px] border-fuchsia-400 opacity-100 rounded-tl-xl"></div>
             <div className="absolute top-0 right-0 w-4 h-4 border-t-[2px] border-r-[2px] border-fuchsia-400 opacity-100 rounded-tr-xl"></div>
             <div className="absolute bottom-0 left-0 w-4 h-4 border-b-[2px] border-l-[2px] border-fuchsia-400 opacity-100 rounded-bl-xl"></div>
             <div className="absolute bottom-0 right-0 w-4 h-4 border-b-[2px] border-r-[2px] border-fuchsia-400 opacity-100 rounded-br-xl"></div>
          </div>
          
          {/* Dark Vignette Base */}
          <div className="absolute bottom-0 left-0 w-full h-[45%] bg-gradient-to-t from-[#0d0221] via-[#0d0221]/90 to-transparent pointer-events-none z-10"></div>
          
          {/* Text/Footer Section */}
          <div className="absolute bottom-0 inset-x-0 w-full flex flex-col justify-end items-center pb-4 px-3 md:px-4 pointer-events-none z-20">
            <div ref={textRef} className="opacity-0 translate-y-4 pointer-events-auto flex flex-col items-center text-center w-full">
              <h3 className="text-[13px] md:text-sm font-bold text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)] mb-1 whitespace-normal break-words leading-tight">{member.name}</h3>
              <p className="text-fuchsia-400 drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)] text-[10px] md:text-[11px] font-mono tracking-wider mb-2 whitespace-normal break-words leading-tight">{member.designation}</p>
              
              <div className="flex gap-3 text-purple-200 drop-shadow-[0_2px_3px_rgba(0,0,0,0.95)] mt-1">
                {member.instagram && <a href={member.instagram} onClick={(e)=>e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"><FaInstagram size={15} /></a>}
                {member.linkedin && <a href={member.linkedin} onClick={(e)=>e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"><FaLinkedin size={15} /></a>}
                {member.github && <a href={member.github} onClick={(e)=>e.stopPropagation()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all"><FaGithub size={15} /></a>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Team() {
  const execSectionRef = useRef(null);
  const cardInnerRefs = useRef([]);
  const cardTextRefs = useRef([]);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: execSectionRef.current,
        start: "top center",
        end: "bottom center",
        toggleActions: "play reverse play reverse",
      }
    });

    if (prefersReducedMotion) {
      tl.to(cardInnerRefs.current, { rotationY: 180, duration: 0.1 }, 0);
      tl.to(cardTextRefs.current, { y: 0, opacity: 1, duration: 0.1 }, 0);
    } else {
      tl.to(cardInnerRefs.current, {
        rotationY: 180,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        overwrite: "auto"
      }, 0);
      
      tl.to(cardTextRefs.current, {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto"
      }, 0.2);
    }
  }, { scope: execSectionRef });

  // Department Section Component
  const DepartmentSection = ({ dept }) => {
    const scrollRef = useRef(null);
    const [members, setMembers] = useState([]);

    useEffect(() => {
      setMembers(shuffleMembers(dept.members));
    }, [dept.members]); // Add dependency

    const scroll = (direction) => {
      if (scrollRef.current) {
        const { current } = scrollRef;
        const scrollAmount = direction === "left" ? -320 : 320;
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    };

    const isLarge = members.length >= 7;

    return (
      <div className="mb-20">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-8 tracking-wide">{dept.department}</h3>
        
        {isLarge ? (
          <div className="relative group/slider max-w-7xl mx-auto px-4 md:px-12">
            {/* Desktop Slider Track / Mobile Grid */}
            <div 
              ref={scrollRef} 
              className="grid grid-cols-2 gap-4 md:flex md:overflow-x-auto md:snap-x md:snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:flex-nowrap md:gap-6 md:pb-6 md:px-2 scroll-smooth"
            >
              {members.map((member) => (
                <div key={member.id} className="md:min-w-[260px] md:snap-start">
                  <CoreCard member={member} />
                </div>
              ))}
            </div>
            {/* Navigation Arrows (Desktop Only) */}
            <button onClick={() => scroll("left")} className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 hover:bg-purple-600 shadow-xl border border-white/10 backdrop-blur-md">
              <FaChevronLeft size={20} />
            </button>
            <button onClick={() => scroll("right")} className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full opacity-0 group-hover/slider:opacity-100 transition-opacity z-10 hover:bg-purple-600 shadow-xl border border-white/10 backdrop-blur-md">
              <FaChevronRight size={20} />
            </button>
          </div>
        ) : (
          /* Static Row / Mobile Grid */
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:gap-8 px-4 max-w-6xl mx-auto">
            {members.map((member) => (
              <div key={member.id} className="md:w-[260px]">
                <CoreCard member={member} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-[#0a0216] text-white py-24 px-4 md:px-8 overflow-hidden z-0">
      {/* Page-wide Ambient Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[linear-gradient(rgba(147,51,234,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.08)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Massive Ambient Glow Orbs */}
      <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/15 blur-[150px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute top-[45%] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-fuchsia-600/15 blur-[180px] rounded-full pointer-events-none z-0"></div>
      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-900/20 blur-[150px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* Faculty */}
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-16">
          Faculty
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-8 md:gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {Faculty.map((member) => <TeamCard key={member.id} member={member} />)}
        </motion.div>

        {/* Advisory */}
        <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center text-purple-100 mt-28 mb-16">
          Advisory
        </motion.h2>
        <motion.div className="flex flex-wrap justify-center gap-8 md:gap-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {Advisory.map((member) => <TeamCard key={member.id} member={member} />)}
        </motion.div>

        {/* Executive Committee - Night Market Reveal */}
        <div ref={execSectionRef} className="mt-32 mb-24 max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 md:mb-20 px-4 md:px-10">
            <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-purple-100 mb-6 md:mb-0">
              Executive Committee
            </motion.h2>
          </div>
          
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-row md:flex-nowrap md:justify-center md:items-stretch md:gap-4 px-2 md:px-4 w-full">
            {executiveCommittee.map((member, index) => (
              <ExecutiveCard 
                key={member.id} 
                member={member} 
                innerRef={el => cardInnerRefs.current[index] = el}
                textRef={el => cardTextRefs.current[index] = el}
              />
            ))}
          </div>
        </div>
        
        {/* Core Committee - Dynamic Rows/Sliders */}
        <div className="mt-32 mb-16">
           <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-20">
             Core Committee
           </motion.h2>
           
           {coreDepartments.map((dept, idx) => (
             <DepartmentSection key={idx} dept={dept} />
           ))}
        </div>

      </div>
    </div>
  );
}
