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
  { id: 4, name: "Dr. Rishav Dubey", designation: "Faculty Advisory,(IEEE WIE)", img: "/Team/faculty/rishav.webp", instagram: "", linkedin: "" },
];

const Advisory = [
  { id: 1, name: "Ananta Taneja", designation: "Advisory, IEEE WIE MUJ", img: "/Team/faculty/ananta.avif", instagram: "https://www.instagram.com/at_1920_28?igsh=OGQ5ZDc2ODk2ZA%3D%3D", linkedin: "https://www.linkedin.com/in/ananta-t-690431211/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" }
];

// Executive Committee Data
const executiveCommittee = [
  {
    "id": 49,
    "name": "Akshat Raheja",
    "designation": "Gen Sec",
    "img": "/teams/EC/Akshat Raheja.png",
    "instagram": "https://www.instagram.com/akshat_raheja06/",
    "linkedin": "https://www.linkedin.com/in/akshat-raheja06",
    "github": ""
  },
  {
    "id": 50,
    "name": "Ashita Saxena",
    "designation": "Managing Director",
    "img": "/teams/EC/Ashita Saxena.jpeg",
    "instagram": "https://www.instagram.com/ashitaaaa_0808/",
    "linkedin": "https://www.linkedin.com/in/ashita-saxena-a3178824a/",
    "github": ""
  },
  {
    "id": 51,
    "name": "Vaibhav Kumar",
    "designation": "Technical Secretary",
    "img": "/teams/EC/Vaibhav Kumar.jpeg",
    "instagram": "https://www.instagram.com/vbv.kr/",
    "linkedin": "https://www.linkedin.com/in/vaibhav-kumar-b8817038a/",
    "github": ""
  },
  {
    "id": 52,
    "name": "Sarath Mohanraj",
    "designation": "Treasurer",
    "img": "/teams/EC/SARATH MOHANRAJ.jpg",
    "instagram": "https://www.instagram.com/sarathmohanraj?igsh=MTRva3d5cGtjaGhhNg==",
    "linkedin": "https://www.linkedin.com/in/sarath-mohanraj",
    "github": "https://github.com/sarathTechie"
  },
  {
    "id": 53,
    "name": "Kshiti singh",
    "designation": "Vice Chairperson",
    "img": "/teams/EC/Kshiti Singh.JPG",
    "instagram": "https://www.instagram.com/kshitisingh._?igsh=MWFwbG1ubWZ0N21xeA==",
    "linkedin": "https://www.linkedin.com/in/kshiti-singh-6515b8319?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 54,
    "name": "Palakshi Sirsat",
    "designation": "Chairperson",
    "img": "/teams/EC/Palakshi Sirsat.jpg",
    "instagram": "https://www.instagram.com/palakshiiii_?igsh=MXdld3ptcnc4bXNzOQ==",
    "linkedin": "https://www.linkedin.com/in/palakshi-sirsat-8185b4351?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 55,
    "name": "Shivangi kotnala",
    "designation": "Human Resource Director",
    "img": "/teams/EC/SHIVANGI KOTNALA.jpeg",
    "instagram": "https://www.instagram.com/_simplyshivangi_?igsh=a2xyb2t1ZnJ4NGJh&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shivangi-kotnala-41a4b3359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "github": "https://github.com/shivangi-kotnala"
  }
];
const coreDepartments = [
  {
    "department": "Technical Projects",
    "members": [
      {
        "id": 32,
        "name": "Yash Singh",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Yash Singh.jpeg",
        "instagram": "https://www.instagram.com/yashs61?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
        "linkedin": "https://www.linkedin.com/in/yash-singh-56431a374?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/Yashbaghel12"
      },
      {
        "id": 33,
        "name": "Aum Lenka",
        "designation": "Head",
        "img": "/teams/CC/Aum Lenka.jpg",
        "instagram": "https://www.instagram.com/lnk.dot/",
        "linkedin": "https://www.linkedin.com/in/aum-lenka/",
        "github": "https://github.com/Faze-Mortal"
      },
      {
        "id": 34,
        "name": "Shaurya Saxena",
        "designation": "Joint Head",
        "img": "/teams/CC/Shaurya Saxena.jpg",
        "instagram": "https://www.instagram.com/shaurya_s_16?igsh=MTRnd3Jwd25wYXhwZQ==",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 35,
        "name": "Aparna",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Aparna Mishra.jpg",
        "instagram": "https://www.instagram.com/aparna_mishra98?igsh=MWhjYmNsemttZW1qMQ==",
        "linkedin": "https://www.linkedin.com/in/aparna-4a2486380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/baparna526-ai"
      },
      {
        "id": 36,
        "name": "Dhruv Sahrawat",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Dhruv Sahrawat.jpeg",
        "instagram": "https://www.instagram.com/dhruv.17t_t?igsh=MWFubXdvYzlrNGE0OA%3D%3D&utm_source=qr",
        "linkedin": "",
        "github": ""
      }
    ]
  },
  {
    "department": "Logistics",
    "members": [
      {
        "id": 37,
        "name": "Ritesh Soni",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Ritesh.jpg",
        "instagram": "https://www.instagram.com/soni._.ritesh?igsh=MXJjajcybG9wcTMweA==",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 38,
        "name": "Daksh Saxena",
        "designation": "Head",
        "img": "/teams/CC/Daksh Saxena.jpg",
        "instagram": "https://www.instagram.com/daksh_13_11?igsh=ZTE3eWs5bW9zMWt1",
        "linkedin": "https://www.linkedin.com/in/daksh-saxena-ab541337b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 39,
        "name": "Arpit Singh",
        "designation": "Joint Head",
        "img": "/teams/CC/Arpit Singh.jpg",
        "instagram": "https://www.instagram.com/arpitsinnghh?igsh=ZnVhdHhybTk0MXhy",
        "linkedin": "https://www.linkedin.com/in/arpit-singh-3538a138b",
        "github": ""
      },
      {
        "id": 40,
        "name": "Atharv garg",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Atharv Garg.png",
        "instagram": "https://www.instagram.com/atharvgarg4570/",
        "linkedin": "https://www.linkedin.com/in/atharv-garg-12972036b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/atharvgarg30-hub"
      },
      {
        "id": 41,
        "name": "Kiana agarwal",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Kiana Agarwal.jpeg",
        "instagram": "https://www.instagram.com/kiana_k_agarwal?igsh=MXhjODVvZ2thNWg1dA%3D%3D&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/kiana-agarwal",
        "github": "https://github.com/kianaagarwal"
      },
      {
        "id": 42,
        "name": "Arnav Asrani",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Arnav Asrani.jpeg",
        "instagram": "https://www.instagram.com/arnav.asrani",
        "linkedin": "",
        "github": "https://github.com/arnavasrani"
      }
    ]
  },
  {
    "department": "Media",
    "members": [
      {
        "id": 43,
        "name": "Gaadha Amal Nair",
        "designation": "Joint Head",
        "img": "/teams/CC/Gaadha Amal Nair.jpeg",
        "instagram": "https://www.instagram.com/gaadha_amalnair?igsh=ODJjOXlsNGJoYWNx&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/gaadha-amal-nair-255760371?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": ""
      },
      {
        "id": 44,
        "name": "Krishna Tripathi",
        "designation": "Head",
        "img": "/teams/CC/Krishna Tripathi.jpg",
        "instagram": "https://www.instagram.com/tripathi_ji1884?igsh=MTRsZWptb3NzejBsZA==",
        "linkedin": "https://www.linkedin.com/in/krishna-tripathi-8513a3217?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 45,
        "name": "Ananya Kedia",
        "designation": "Head",
        "img": "/teams/CC/Ananya Kedia.jpg",
        "instagram": "https://www.instagram.com/ananyaa.kedia?igsh=MWUyaXJ1bWh0aGFsZA%3D%3D&utm_source=qr",
        "linkedin": "https://in.linkedin.com/in/ananya-kedia-848829348",
        "github": "https://github.com/ananyak09"
      },
      {
        "id": 46,
        "name": "Tamanna",
        "designation": "Joint Head",
        "img": "/teams/CC/Tamanna Kinha.jpg",
        "instagram": "https://www.instagram.com/itamanna02?igsh=aDhiMmQ3aXR5dXh6",
        "linkedin": "https://www.linkedin.com/in/tamanna-kinha-a6687237b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 47,
        "name": "Nehal Sharma",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Nehal Sharma.jpg",
        "instagram": "https://www.instagram.com/nehall.08?igsh=czZra21yZjF3aHp6",
        "linkedin": "https://www.linkedin.com/in/nehal-sharma-6a554a3a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/nehallsharma002-gif"
      },
      {
        "id": 48,
        "name": "Divya Sinha",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Divya.jpeg",
        "instagram": "https://www.instagram.com/divya._s20/",
        "linkedin": "https://www.linkedin.com/in/divya-sinha-400159415/",
        "github": ""
      },
      {
        "id": 49,
        "name": "Raima Ali",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Raima Ali.jpeg",
        "instagram": "https://www.instagram.com/raimaali.18",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 50,
        "name": "Spreha Verma",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Spreha Verma.jpg",
        "instagram": "https://www.instagram.com/spiaowo?igsh=MTBhMGIwNWVsODRvMA==",
        "linkedin": "https://www.linkedin.com/in/spreha-verma-017465315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 51,
        "name": "Yashika Agarwal",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Yashika Agarwal.jpg",
        "instagram": "https://www.instagram.com/yashika_agarwal22?igsh=ZDAyMXN4d2lqaTJj",
        "linkedin": "https://www.linkedin.com/in/yashika-agarwal-070ab03a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 52,
        "name": "Naman Saini",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Naman Saini.jpeg",
        "instagram": "https://www.instagram.com/saininaman_0001?igsh=ZWgzOTZwN3B0M3gx&utm_source=qr",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 53,
        "name": "Yashu Suresh Pandey",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Yashu Suresh Pandey.jpg",
        "instagram": "https://www.instagram.com/yashu_pandey04/",
        "linkedin": "https://www.linkedin.com/in/yashu-pandey-9b9685414?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": "https://github.com/yashupandey29"
      }
    ]
  },
  {
    "department": "Editorial",
    "members": [
      {
        "id": 54,
        "name": "Prarthana Agarwal",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Prarthana Agarwal.jpg",
        "instagram": "https://www.instagram.com/prarthana_agarwal8/",
        "linkedin": "https://www.linkedin.com/in/prarthana-agarwal-8131b137b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        "github": "https://github.com/PrarthanaAgarwal82"
      },
      {
        "id": 55,
        "name": "Akshita Sinha",
        "designation": "Head",
        "img": "/teams/CC/Akshita Sinha.jpeg",
        "instagram": "https://www.instagram.com/akshiiii.ta_07?igsh=MWdybXFrd25qcGxuYQ%3D%3D&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/akshita-sinha-2aa74b1a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": ""
      },
      {
        "id": 56,
        "name": "Tanishka Panda",
        "designation": "Joint Head",
        "img": "/teams/CC/Tanishka Panda.jpeg",
        "instagram": "https://www.instagram.com/tanxishka",
        "linkedin": "https://linkedin.com/in/tanishka-panda",
        "github": "https://github.com/tanishkapanda18"
      },
      {
        "id": 57,
        "name": "Andrea Benjamin",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Andrea Benjamin.jpeg",
        "instagram": "https://www.instagram.com/andrea.diaa?igsh=ZWkwOHJ2bm93cWFm",
        "linkedin": "https://www.linkedin.com/in/andrea-benjamin-658238311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      }
    ]
  },
  {
    "department": "Corporate Affairs",
    "members": [
      {
        "id": 58,
        "name": "Kavya das",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Kavya Das.jpg",
        "instagram": "https://www.instagram.com/kabuli_chanaaa?igsh=MWJudXgyeTV0YXhhOA==",
        "linkedin": "https://www.linkedin.com/in/kavya-das-4728b936a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 59,
        "name": "Yash Sharma",
        "designation": "Head",
        "img": "/teams/CC/Yash Sharma.jpg",
        "instagram": "https://www.instagram.com/busyguy_18?igsh=aDMybmV3MWwzNjVw",
        "linkedin": "https://www.linkedin.com/in/yash-sharma-a46ab7339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 60,
        "name": "Vaibhav Sharma",
        "designation": "Joint Head",
        "img": "/teams/CC/Vaibhav Sharma.jpg",
        "instagram": "https://www.instagram.com/vbhvshrma1?igsh=bjlyZTh5Zm05YXdm&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/vaibhav-sharma-a03025399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        "github": "https://github.com/vaibhavrsharma01-cell"
      }
    ]
  },
  {
    "department": "Curations",
    "members": [
      {
        "id": 61,
        "name": "Alisha Chaudhary",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Alisha Chaudhary.jpg",
        "instagram": "https://www.instagram.com/_its.alishaaa_?utm_source=qr&igsh=MXNmdHMwMmpseHQzeg==",
        "linkedin": "https://www.linkedin.com/in/alisha-chaudhary-771056372?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 62,
        "name": "Aanya Singhal",
        "designation": "Head",
        "img": "/teams/CC/Aanya Singhal.jpeg",
        "instagram": "https://www.instagram.com/aanyasinghal03",
        "linkedin": "https://www.linkedin.com/in/aanya-singhal-583796378?",
        "github": "https://github.com/aanyasinghal03"
      },
      {
        "id": 63,
        "name": "Saisha Narang",
        "designation": "Joint Head",
        "img": "/teams/CC/Saisha Narang.jpg",
        "instagram": "https://www.instagram.com/saishanarang.7?igsh=cjQ5Zmljd3d1Ym8=",
        "linkedin": "https://www.linkedin.com/in/saisha-narang-8246533a5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/saishanarang13-source"
      },
      {
        "id": 64,
        "name": "Saurish",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Saurish Mishra.jpg",
        "instagram": "https://www.instagram.com/saurish_idk?igsh=MWd5eWRrMW93bXlpcQ==",
        "linkedin": "https://www.linkedin.com/in/saurish-mishra-b1a30936b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/Saurish187"
      }
    ]
  },
  {
    "department": "Promotions",
    "members": [
      {
        "id": 65,
        "name": "Tanisha Salian",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Tanisha Salian.jpg",
        "instagram": "https://www.instagram.com/tanii_salian17?igsh=MWo5MmE3cnkzN2I1cQ==",
        "linkedin": "https://www.linkedin.com/in/tanisha-salian-5a3591376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": "https://github.com/Tanisha-123-tech"
      },
      {
        "id": 66,
        "name": "Mahi Mehrotra",
        "designation": "Head",
        "img": "/teams/CC/Mahi Mehrotra.jpeg",
        "instagram": "https://www.instagram.com/mahimehrotraa?igsh=bTNrcTEyNXVudjV4&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/mahi-mehrotra-a260723a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": "https://github.com/mahimehrotra1234-cell"
      },
      {
        "id": 67,
        "name": "Jannat Ghuman",
        "designation": "Joint Head",
        "img": "/teams/CC/Jannat Ghuman.jpeg",
        "instagram": "https://www.instagram.com/jannat.ghuman?igsh=NnZkanRkdmdwZGZh&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/jannat-ghuman-8923913b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": ""
      },
      {
        "id": 68,
        "name": "Abhishek Vishnoi",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Abhishek Vishnoi.jpeg",
        "instagram": "https://www.instagram.com/abhishek.v10?igsh=MW4wNHp1dmpqbDMwbQ==",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 69,
        "name": "Shouryam Sharma",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Shouryam Sharma.jpeg",
        "instagram": "https://www.instagram.com/shoury4mz?igsh=NTIwZ3E2cHgwZTl3&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/shouryam-sharma-8839843a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": ""
      }
    ]
  },
  {
    "department": "Graphics Design",
    "members": [
      {
        "id": 70,
        "name": "Anika Gujral",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Anika Gujral.jpg",
        "instagram": "https://www.instagram.com/anika.gujral?igsh=MTIwMTUzdmlpZW43bA==",
        "linkedin": "https://www.linkedin.com/in/anika-gujral-529a17409?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 71,
        "name": "Vaani Dhiman",
        "designation": "Head",
        "img": "/teams/CC/Vaani.jpg",
        "instagram": "https://www.instagram.com/vxxni_19?utm_source=qr&igsh=MWtranEzd3lrZmo1eQ==",
        "linkedin": "https://www.linkedin.com/in/vaani-dhiman-a6b242378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      },
      {
        "id": 72,
        "name": "Sahil",
        "designation": "Joint Head",
        "img": "/teams/CC/Sahil Parashar.jpeg",
        "instagram": "https://www.instagram.com/thisisme.sahil/",
        "linkedin": "https://www.linkedin.com/in/thisis-mesahil/",
        "github": ""
      },
      {
        "id": 73,
        "name": "Vidhi Makkar",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Vidhi Makkar.jpeg",
        "instagram": "https://www.instagram.com/vidhiimakkarr",
        "linkedin": "https://www.linkedin.com/in/vidhi-makkar-75a010270?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
        "github": ""
      },
      {
        "id": 74,
        "name": "Shivanshi Punj",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/shivanshi punj.jpeg",
        "instagram": "https://www.instagram.com/shivanshipunj?igsh=MTVsdWdhdW0zYnV4cA%3D%3D&utm_source=qr",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 75,
        "name": "Utkarsh Jain",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Utkarsh Jain.jpeg",
        "instagram": "https://www.instagram.com/utkxrsh_307/",
        "linkedin": "https://www.linkedin.com/in/utkarshjain007/",
        "github": ""
      },
      {
        "id": 76,
        "name": "Ifra Inam",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Ifra Inam.jpeg",
        "instagram": "https://www.instagram.com/ifraaa.com_?igsh=MXFoYWFwaGVlaTVwZw%3D%3D&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/ifra-inam-984a5937b?trk=contact-info",
        "github": ""
      }
    ]
  },
  {
    "department": "Events",
    "members": [
      {
        "id": 77,
        "name": "Ananya Singh",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Ananya Singh.jpeg",
        "instagram": "https://www.instagram.com/20._.ananya",
        "linkedin": "https://www.linkedin.com/in/ananya-singh-077267410",
        "github": "https://github.com/Ananya20-Singh"
      },
      {
        "id": 78,
        "name": "Aditi Agarwal",
        "designation": "Head",
        "img": "/teams/CC/Aditi.jpeg",
        "instagram": "https://www.instagram.com/aditiiagarwalll/",
        "linkedin": "https://linkedin.com/in/aditi-agarwal-064bb6377",
        "github": "https://github.com/aditiiagarwalll"
      },
      {
        "id": 79,
        "name": "Manya Singh",
        "designation": "Joint Head",
        "img": "/teams/CC/Manya Singh.jpeg",
        "instagram": "https://www.instagram.com/manyaa.14?igsh=Zjl6MjQ2NDEzMTJq&utm_source=qr",
        "linkedin": "https://www.linkedin.com/in/manya-singh-8852a7420/?skipRedirect=true",
        "github": "https://github.com/manyasingh1477/Manya-Singh"
      },
      {
        "id": 80,
        "name": "Abhigyan Padhy",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Abhigyan Padhy.jpeg",
        "instagram": "https://www.instagram.com/abhigyanpadhy",
        "linkedin": "",
        "github": ""
      },
      {
        "id": 81,
        "name": "Niharika Singh",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Niharika.jpg",
        "instagram": "https://www.instagram.com/niharikaezz?igsh=azFka2wwdnV2ZnEz",
        "linkedin": "https://www.linkedin.com/in/niharika-singh-96b967380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      }
    ]
  },
  {
    "department": "Marketing",
    "members": [
      {
        "id": 82,
        "name": "Presha Gusain",
        "designation": "Senior Coordinator",
        "img": "/teams/CC/Presha Gusain.jpeg",
        "instagram": "https://www.instagram.com/preshagusain__?igsh=aTVidHV5ZDBwam05",
        "linkedin": "https://www.linkedin.com/in/presha-gusain-7198863a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
        "github": ""
      }
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
      className="bg-gradient-to-b from-[#181132] to-[#0e091f] hover:from-[#1f163c] hover:to-[#160f29] border border-fuchsia-500/10 hover:border-fuchsia-500/60 rounded-3xl p-6 relative overflow-hidden group transition-all duration-300 ease-out shadow-lg hover:shadow-[0_0_20px_rgba(217,70,239,0.2)] hover:scale-[1.02] w-full max-w-xs"
    >
      {/* High-tech Corner Accents */}
      <div className="absolute top-0 left-0 w-5 h-5 border-t-[3px] border-l-[3px] border-fuchsia-500/0 group-hover:border-fuchsia-500/100 transition-all duration-300 rounded-tl-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-5 h-5 border-t-[3px] border-r-[3px] border-fuchsia-500/0 group-hover:border-fuchsia-500/100 transition-all duration-300 rounded-tr-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-5 h-5 border-b-[3px] border-l-[3px] border-fuchsia-500/0 group-hover:border-fuchsia-500/100 transition-all duration-300 rounded-bl-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-5 h-5 border-b-[3px] border-r-[3px] border-fuchsia-500/0 group-hover:border-fuchsia-500/100 transition-all duration-300 rounded-br-3xl pointer-events-none" />

      <img
        src={img}
        alt={name}
        className="relative z-10 w-full h-80 object-cover rounded-2xl border border-purple-500/30 mb-4 transition-transform duration-300 group-hover:scale-105 group-hover:border-purple-400 filter-none grayscale-0 saturate-100 contrast-100"
      />
      <h3 className="relative z-10 text-xl font-semibold text-purple-100 mb-1 text-center">{name}</h3>
      <p className="relative z-10 text-purple-400 text-sm mb-4 text-center">{designation}</p>
      <div className="relative z-10 flex justify-center gap-5 text-xl text-purple-300">
        {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram className="hover:text-pink-500 transition" /></a>}
        {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-500 transition" /></a>}
        {github && <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className="hover:text-white transition" /></a>}
      </div>
    </motion.div>
  );
};

// Filtered Core Card Component
const CoreCard = ({ member, isCarousel }) => {
  const { name, designation, img, instagram, linkedin, github } = member;
  return (
    <div className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg transition-all duration-300 w-full h-full group hover:bg-white/10 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:border-purple-500/50 ${!isCarousel ? 'hover:-translate-y-2' : ''}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-64 object-cover rounded-xl border border-gray-600 mb-4 transition-all duration-300 filter-none grayscale-0 saturate-100 contrast-100 group-hover:border-purple-400"
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
        <div className="absolute inset-0 p-4 flex flex-col items-center justify-center  w-full h-full [backface-visibility:hidden] border-[1px] border-fuchsia-500/30 group-hover:border-fuchsia-500/60 transition-colors duration-500 rounded-xl overflow-hidden">
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

  const DepartmentCarousel = ({ dept }) => {
    const initialMembers = dept.members;
    // Pad array if fewer than 7 members to create a safe off-screen buffer runway
    const members = initialMembers.length < 7 
      ? [...initialMembers, ...initialMembers.map((m, i) => ({...m, id: m.id + "_pad" + i}))]
      : initialMembers;

    const n = members.length;
    const isFallback = initialMembers.length < 4;

    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useGSAP(() => {
      if (isFallback) return;

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) return;

      let currentIndex = 0;
      let timer;
      let isPaused = false;
      let isVisible = false;
      let isMobile = window.innerWidth < 768;

      const getPosition = (dist, isMob) => {
        if (isMob) {
          // Mobile fallback (1 card crossfade)
          if (dist === 0) return { x: 0, scale: 1, rotateY: 0, opacity: 1, zIndex: 30, isBack: false, transformOrigin: "center center" };
          return { x: 0, scale: 1, rotateY: 0, opacity: 0, zIndex: 0, isBack: false, transformOrigin: "center center" };
        } else {
          // Desktop 3D Sliding Window
          if (dist === 0) return { x: -280, scale: 1, rotateY: 0, opacity: 1, zIndex: 20, isBack: false, transformOrigin: "center center" }; // left
          if (dist === 1) return { x: 0, scale: 1.1, rotateY: 0, opacity: 1, zIndex: 30, isBack: false, transformOrigin: "center center" }; // center
          if (dist === 2) return { x: 280, scale: 1, rotateY: 0, opacity: 1, zIndex: 20, isBack: false, transformOrigin: "center center" }; // right
          if (dist === 3) return { x: 540, scale: 0.8, rotateY: 30, opacity: 0.85, zIndex: 10, isBack: true, transformOrigin: "left center" }; // edgeRight
          if (dist === n - 1) return { x: -540, scale: 0.8, rotateY: -30, opacity: 0.85, zIndex: 10, isBack: true, transformOrigin: "right center" }; // edgeLeft
          return { x: 750, scale: 0.8, rotateY: 30, opacity: 0, zIndex: 0, isBack: true, transformOrigin: "left center" }; // hidden right queue
        }
      };

      const updateLayout = (immediate = false) => {
        cardsRef.current.forEach((card, i) => {
          if (!card) return;
          const dist = (i - currentIndex + n) % n;
          const pos = getPosition(dist, isMobile);
          
          if (immediate) {
             gsap.set(card, { 
                x: pos.x, 
                scale: pos.scale, 
                opacity: pos.opacity, 
                zIndex: pos.zIndex, 
                rotateY: pos.rotateY,
                transformOrigin: pos.transformOrigin
             });
             const inner = card.querySelector('.carousel-inner');
             if (inner) gsap.set(inner, { rotationY: pos.isBack ? 180 : 0 });
          } else {
             const oldDist = (i - ((currentIndex - 1 + n) % n) + n) % n;
             if (!isMobile && oldDist === n - 1 && dist !== 0) {
                // Animate old edgeLeft offscreen to the left
                const tl = gsap.timeline();
                tl.to(card, { x: -750, opacity: 0, duration: 0.3 });
                tl.set(card, { x: 750, rotateY: 30, transformOrigin: "left center" }, 0.3); // Queue back on the right
             } else if (!isMobile && dist === 3 && oldDist !== 2) {
                // New edgeRight entering from hidden
                const tl = gsap.timeline();
                tl.set(card, { x: 750, scale: 0.8, opacity: 0, zIndex: 10, rotateY: 30, transformOrigin: "left center" });
                const inner = card.querySelector('.carousel-inner');
                if (inner) tl.set(inner, { rotationY: 180 });
                tl.to(card, { x: pos.x, opacity: pos.opacity, duration: 0.6 }, 0);
             } else {
                // Standard internal slot slide
                const tl = gsap.timeline();
                tl.to(card, { 
                   x: pos.x, 
                   scale: pos.scale, 
                   opacity: pos.opacity, 
                   zIndex: pos.zIndex,
                   rotateY: pos.rotateY,
                   transformOrigin: pos.transformOrigin,
                   duration: 0.6 
                }, 0);
                
                const inner = card.querySelector('.carousel-inner');
                if (inner) {
                   if (isMobile) {
                      tl.set(inner, { rotationY: 0 }, 0);
                   } else {
                      if (pos.isBack && oldDist !== n-1 && oldDist <= 3) {
                         tl.to(inner, { rotationY: 180, duration: 0.6 }, 0); // Flip to back
                      } else if (!pos.isBack && oldDist === 3) {
                         tl.to(inner, { rotationY: 0, duration: 0.6 }, 0); // Flip to front
                      }
                   }
                }
             }
          }
        });
      };

      updateLayout(true); // Initial layout setup

      const advance = () => {
        if (isPaused || !isVisible) return;
        currentIndex = (currentIndex + 1) % n;
        updateLayout(false);
        
        // Screen reader update
        const liveRegion = document.getElementById(`live-region-${dept.department.replace(/\s+/g, '')}`);
        if (liveRegion) {
          const centerMember = members[(currentIndex + 1) % n];
          if (centerMember) liveRegion.innerText = `${centerMember.name}, ${centerMember.designation}`;
        }
        
        timer = gsap.delayedCall(2, advance);
      };

      timer = gsap.delayedCall(2, advance);

      const handleMouseEnter = () => { isPaused = true; };
      const handleMouseLeave = () => { isPaused = false; timer.restart(true); };
      
      const container = containerRef.current;
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('focusin', handleMouseEnter);
      container.addEventListener('focusout', handleMouseLeave);

      const observer = new IntersectionObserver((entries) => {
        isVisible = entries[0].isIntersecting;
        if (isVisible && !isPaused) {
          timer.restart(true);
        } else {
          timer.pause();
        }
      });
      observer.observe(container);
      
      const handleResize = () => {
         const newIsMobile = window.innerWidth < 768;
         if (newIsMobile !== isMobile) {
            isMobile = newIsMobile;
            updateLayout(true);
         }
      };
      window.addEventListener('resize', handleResize);

      // Mobile touch swipe fallback
      let startX = 0;
      const handleTouchStart = (e) => { startX = e.touches[0].clientX; };
      const handleTouchEnd = (e) => {
         const endX = e.changedTouches[0].clientX;
         if (startX - endX > 50) advance(); 
         else if (endX - startX > 50) { 
            if (isPaused || !isVisible) return;
            currentIndex = (currentIndex - 1 + n) % n;
            updateLayout(false);
            timer.restart(true);
         }
      };
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('touchend', handleTouchEnd);

      return () => {
        timer.kill();
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('focusin', handleMouseEnter);
        container.removeEventListener('focusout', handleMouseLeave);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('touchend', handleTouchEnd);
        observer.disconnect();
        window.removeEventListener('resize', handleResize);
      };

    }, { scope: containerRef, dependencies: [members] });

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (isFallback || prefersReducedMotion) {
      return (
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-8 tracking-wide">{dept.department}</h3>
          <div className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:justify-center md:gap-8 px-4 max-w-6xl mx-auto">
            {initialMembers.map((member) => (
              <div key={member.id} className="md:w-[260px]">
                <CoreCard member={member} isCarousel={false} />
              </div>
            ))}
          </div>
        </div>
      );
    }

    return (
      <div className="mb-32">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-purple-300 mb-12 tracking-wide">{dept.department}</h3>
        <div 
           ref={containerRef} 
           className="relative w-full max-w-screen-xl h-[450px] mx-auto perspective-[1000px] flex items-center justify-center overflow-visible px-20 touch-pan-y group"
        >
          <div id={`live-region-${dept.department.replace(/\s+/g, '')}`} className="sr-only" aria-live="polite"></div>
          {members.map((member, i) => (
            <div
              key={`${member.id}-${i}`}
              ref={el => cardsRef.current[i] = el}
              className="absolute w-[260px] h-[380px] origin-center [transform-style:preserve-3d]"
              style={{ opacity: 0 }}
            >
              <div className="carousel-inner w-full h-full absolute inset-0 [transform-style:preserve-3d] rounded-2xl">
                 {/* Front Face (Open) */}
                 <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                   <CoreCard member={member} isCarousel={true} />
                 </div>
                 {/* Back Face (Closed) */}
                 <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white/5 bg-gradient-to-b from-black/20 to-black/50 border border-fuchsia-500/20 shadow-[0_0_10px_rgba(217,70,239,0.1)] flex items-center justify-center overflow-hidden">
                    <span className="font-tomorrow-bold text-fuchsia-400 text-sm tracking-[0.25em] text-center px-4 uppercase whitespace-normal break-words drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                      CORE COMMITTEE
                    </span>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen bg-transparent text-white py-24 px-4 md:px-8 overflow-hidden z-0">
      {/* Page-wide Ambient Grid */}
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
          <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-4xl md:text-5xl font-bold text-center text-purple-100 mb-16 md:mb-20">
            Executive Committee
          </motion.h2>
          
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
             <DepartmentCarousel key={idx} dept={dept} />
           ))}
        </div>

      </div>
    </div>
  );
}
