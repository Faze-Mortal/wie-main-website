const fs = require('fs');
const data = [
  {
    "id": 1,
    "name": "Jannat Ghuman",
    "designation": "Joint head of promotions",
    "img": "/teams/CC/Jannat Ghuman.jpg",
    "instagram": "https://www.instagram.com/jannat.ghuman?igsh=NnZkanRkdmdwZGZh&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/jannat-ghuman-8923913b9?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 2,
    "name": "Tanisha Salian",
    "designation": "Senior Coordinator of Promotions",
    "img": "/teams/CC/Tanisha Salian.jpg",
    "instagram": "https://www.instagram.com/tanii_salian17?igsh=MWo5MmE3cnkzN2I1cQ==",
    "linkedin": "https://www.linkedin.com/in/tanisha-salian-5a3591376?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/Tanisha-123-tech"
  },
  {
    "id": 3,
    "name": "Yash Singh",
    "designation": "b.tech cse and Senior Coordinator Of Technical Projects",
    "img": "/teams/CC/Yash Singh.jpg",
    "instagram": "https://www.instagram.com/yashs61?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    "linkedin": "https://www.linkedin.com/in/yash-singh-56431a374?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/Yashbaghel12"
  },
  {
    "id": 4,
    "name": "Abhishek Vishnoi",
    "designation": "Promotion , Senior coordinator",
    "img": "/teams/CC/Abhishek Vishnoi.jpg",
    "instagram": "https://www.instagram.com/abhishek.v10?igsh=MW4wNHp1dmpqbDMwbQ==",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 5,
    "name": "Aanya Singhal",
    "designation": "Cuartions- Head",
    "img": "/teams/CC/Aanya Singhal.jpg",
    "instagram": "https://www.instagram.com/aanyasinghal03",
    "linkedin": "https://www.linkedin.com/in/aanya-singhal-583796378?",
    "github": "https://github.com/aanyasinghal03"
  },
  {
    "id": 6,
    "name": "Kavya das",
    "designation": "Corporate affairs (senior coordinator),BTECH CSE",
    "img": "/teams/CC/Kavya das.jpg",
    "instagram": "https://www.instagram.com/kabuli_chanaaa?igsh=MWJudXgyeTV0YXhhOA==",
    "linkedin": "https://www.linkedin.com/in/kavya-das-4728b936a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 7,
    "name": "Akshita Sinha",
    "designation": "Head of Editorial",
    "img": "/teams/CC/Akshita Sinha.jpg",
    "instagram": "https://www.instagram.com/akshiiii.ta_07?igsh=MWdybXFrd25qcGxuYQ%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/akshita-sinha-2aa74b1a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 8,
    "name": "Krishna Tripathi",
    "designation": "head of Media",
    "img": "/teams/CC/Krishna Tripathi.jpg",
    "instagram": "https://www.instagram.com/tripathi_ji1884?igsh=MTRsZWptb3NzejBsZA==",
    "linkedin": "https://www.linkedin.com/in/krishna-tripathi-8513a3217?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 9,
    "name": "Daksh Saxena",
    "designation": "Logistics, Head of Logistics",
    "img": "/teams/CC/Daksh Saxena.jpg",
    "instagram": "https://www.instagram.com/daksh_13_11?igsh=ZTE3eWs5bW9zMWt1",
    "linkedin": "https://www.linkedin.com/in/daksh-saxena-ab541337b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 10,
    "name": "Sahil",
    "designation": "Graphics Design & Joint Head",
    "img": "/teams/CC/Sahil.jpg",
    "instagram": "https://www.instagram.com/thisisme.sahil/",
    "linkedin": "https://www.linkedin.com/in/thisis-mesahil/",
    "github": ""
  },
  {
    "id": 11,
    "name": "Nehal Sharma",
    "designation": "Senior Coordinator Social Media",
    "img": "/teams/CC/Nehal Sharma.jpg",
    "instagram": "https://www.instagram.com/nehall.08?igsh=czZra21yZjF3aHp6",
    "linkedin": "https://www.linkedin.com/in/nehal-sharma-6a554a3a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/nehallsharma002-gif"
  },
  {
    "id": 12,
    "name": "Divya Sinha",
    "designation": "Senior Coordinator(Social Media)",
    "img": "/teams/CC/Divya Sinha.jpg",
    "instagram": "https://www.instagram.com/divya._s20/",
    "linkedin": "https://www.linkedin.com/in/divya-sinha-400159415/",
    "github": ""
  },
  {
    "id": 13,
    "name": "Aparna",
    "designation": "Btech Cse , Senior coordinator of technical projects",
    "img": "/teams/CC/Aparna.jpg",
    "instagram": "https://www.instagram.com/aparna_mishra98?igsh=MWhjYmNsemttZW1qMQ==",
    "linkedin": "https://www.linkedin.com/in/aparna-4a2486380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/baparna526-ai"
  },
  {
    "id": 14,
    "name": "Tanishka Panda",
    "designation": "Editorial- Joint Head",
    "img": "/teams/CC/Tanishka Panda.jpg",
    "instagram": "https://www.instagram.com/tanxishka",
    "linkedin": "https://linkedin.com/in/tanishka-panda",
    "github": "https://github.com/tanishkapanda18"
  },
  {
    "id": 15,
    "name": "Arpit Singh",
    "designation": "Logistics, Joint Head",
    "img": "/teams/CC/Arpit Singh.jpg",
    "instagram": "https://www.instagram.com/arpitsinnghh?igsh=ZnVhdHhybTk0MXhy",
    "linkedin": "https://www.linkedin.com/in/arpit-singh-3538a138b",
    "github": ""
  },
  {
    "id": 16,
    "name": "Prarthana Agarwal",
    "designation": "Senior coordinator of Editorial",
    "img": "/teams/CC/Prarthana Agarwal.jpg",
    "instagram": "https://www.instagram.com/prarthana_agarwal8/",
    "linkedin": "https://www.linkedin.com/in/prarthana-agarwal-8131b137b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    "github": "https://github.com/PrarthanaAgarwal82"
  },
  {
    "id": 17,
    "name": "Raima Ali",
    "designation": "Social Media - Senior Coordinator",
    "img": "/teams/CC/Raima Ali.jpg",
    "instagram": "https://www.instagram.com/raimaali.18",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 18,
    "name": "Ananya Singh",
    "designation": "Event senior coordinator",
    "img": "/teams/CC/Ananya Singh.jpg",
    "instagram": "https://www.instagram.com/20._.ananya",
    "linkedin": "https://www.linkedin.com/in/ananya-singh-077267410",
    "github": "https://github.com/Ananya20-Singh"
  },
  {
    "id": 19,
    "name": "Shouryam Sharma",
    "designation": "Promotions,Senior Coordinator",
    "img": "/teams/CC/Shouryam Sharma.jpg",
    "instagram": "https://www.instagram.com/shoury4mz?igsh=NTIwZ3E2cHgwZTl3&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shouryam-sharma-8839843a0?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 20,
    "name": "Anika Gujral",
    "designation": "Graphic Design- Senior Coordinator",
    "img": "/teams/CC/Anika Gujral.jpg",
    "instagram": "https://www.instagram.com/anika.gujral?igsh=MTIwMTUzdmlpZW43bA==",
    "linkedin": "https://www.linkedin.com/in/anika-gujral-529a17409?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 21,
    "name": "Alisha Chaudhary",
    "designation": "IEEE WIE Curations Senior Coordinator",
    "img": "/teams/CC/Alisha Chaudhary.jpg",
    "instagram": "https://www.instagram.com/_its.alishaaa_?utm_source=qr&igsh=MXNmdHMwMmpseHQzeg==",
    "linkedin": "https://www.linkedin.com/in/alisha-chaudhary-771056372?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 22,
    "name": "Vidhi Makkar",
    "designation": "Graphic Design, Senior Coordinator",
    "img": "/teams/CC/Vidhi Makkar.jpg",
    "instagram": "https://www.instagram.com/vidhiimakkarr",
    "linkedin": "https://www.linkedin.com/in/vidhi-makkar-75a010270?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 23,
    "name": "Vaibhav Sharma",
    "designation": "Corporate Affairs , Joint Head",
    "img": "/teams/CC/Vaibhav Sharma.jpg",
    "instagram": "https://www.instagram.com/vbhvshrma1?igsh=bjlyZTh5Zm05YXdm&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/vaibhav-sharma-a03025399?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "github": "https://github.com/vaibhavrsharma01-cell"
  },
  {
    "id": 24,
    "name": "Shivanshi Punj",
    "designation": "Graphics Design, Senior Coordinator",
    "img": "/teams/CC/Shivanshi Punj.jpg",
    "instagram": "https://www.instagram.com/shivanshipunj?igsh=MTVsdWdhdW0zYnV4cA%3D%3D&utm_source=qr",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 25,
    "name": "Spreha Verma",
    "designation": "SM- Senior coordinator social media",
    "img": "/teams/CC/Spreha Verma.jpg",
    "instagram": "https://www.instagram.com/spiaowo?igsh=MTBhMGIwNWVsODRvMA==",
    "linkedin": "https://www.linkedin.com/in/spreha-verma-017465315?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 26,
    "name": "Vaani Dhiman",
    "designation": "Graphic Design, Head",
    "img": "/teams/CC/Vaani Dhiman.jpg",
    "instagram": "https://www.instagram.com/vxxni_19?utm_source=qr&igsh=MWtranEzd3lrZmo1eQ==",
    "linkedin": "https://www.linkedin.com/in/vaani-dhiman-a6b242378?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 27,
    "name": "Mahi Mehrotra",
    "designation": "BTech CSE & Head of Promotions",
    "img": "/teams/CC/Mahi Mehrotra.jpg",
    "instagram": "https://www.instagram.com/mahimehrotraa?igsh=bTNrcTEyNXVudjV4&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/mahi-mehrotra-a260723a7?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": "https://github.com/mahimehrotra1234-cell"
  },
  {
    "id": 28,
    "name": "Gaadha Amal Nair",
    "designation": "Social Media Joint Head",
    "img": "/teams/CC/Gaadha Amal Nair.jpg",
    "instagram": "https://www.instagram.com/gaadha_amalnair?igsh=ODJjOXlsNGJoYWNx&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/gaadha-amal-nair-255760371?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": ""
  },
  {
    "id": 29,
    "name": "Shaurya Saxena",
    "designation": "Joint-Head of Technical Projects",
    "img": "/teams/CC/Shaurya Saxena.jpg",
    "instagram": "https://www.instagram.com/shaurya_s_16?igsh=MTRnd3Jwd25wYXhwZQ==",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 30,
    "name": "Saurish",
    "designation": "Senior Coordinator of Curations",
    "img": "/teams/CC/Saurish.jpg",
    "instagram": "https://www.instagram.com/saurish_idk?igsh=MWd5eWRrMW93bXlpcQ==",
    "linkedin": "https://www.linkedin.com/in/saurish-mishra-b1a30936b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/Saurish187"
  },
  {
    "id": 31,
    "name": "Saisha Narang",
    "designation": "Joint head of curations",
    "img": "/teams/CC/Saisha Narang.jpg",
    "instagram": "https://www.instagram.com/saishanarang.7?igsh=cjQ5Zmljd3d1Ym8=",
    "linkedin": "https://www.linkedin.com/in/saisha-narang-8246533a5?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/saishanarang13-source"
  },
  {
    "id": 32,
    "name": "Dhruv Sahrawat",
    "designation": "Technical Projects senior coordinator",
    "img": "/teams/CC/Dhruv Sahrawat.jpg",
    "instagram": "https://www.instagram.com/dhruv.17t_t?igsh=MWFubXdvYzlrNGE0OA%3D%3D&utm_source=qr",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 33,
    "name": "Yashika Agarwal",
    "designation": "IEEE WIE: Senior Coordinator of Media",
    "img": "/teams/CC/Yashika Agarwal.jpg",
    "instagram": "https://www.instagram.com/yashika_agarwal22?igsh=ZDAyMXN4d2lqaTJj",
    "linkedin": "https://www.linkedin.com/in/yashika-agarwal-070ab03a4?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 34,
    "name": "Naman Saini",
    "designation": "Media(Senior Coordinator)",
    "img": "/teams/CC/Naman Saini.jpg",
    "instagram": "https://www.instagram.com/saininaman_0001?igsh=ZWgzOTZwN3B0M3gx&utm_source=qr",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 35,
    "name": "Aditi Agarwal",
    "designation": "Btech CSE and Head of Events",
    "img": "/teams/CC/Aditi Agarwal.jpg",
    "instagram": "https://www.instagram.com/aditiiagarwalll/",
    "linkedin": "https://linkedin.com/in/aditi-agarwal-064bb6377",
    "github": "https://github.com/aditiiagarwalll"
  },
  {
    "id": 36,
    "name": "Ritesh Soni",
    "designation": "Logistics and Senior Coordinator",
    "img": "/teams/CC/Ritesh Soni.jpg",
    "instagram": "https://www.instagram.com/soni._.ritesh?igsh=MXJjajcybG9wcTMweA==",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 37,
    "name": "Abhigyan Padhy",
    "designation": "Events (senior coordinator)",
    "img": "/teams/CC/Abhigyan Padhy.jpg",
    "instagram": "https://www.instagram.com/abhigyanpadhy",
    "linkedin": "",
    "github": ""
  },
  {
    "id": 38,
    "name": "Atharv garg",
    "designation": "logistics and senior coordinator",
    "img": "/teams/CC/Atharv garg.jpg",
    "instagram": "https://www.instagram.com/atharvgarg4570/",
    "linkedin": "https://www.linkedin.com/in/atharv-garg-12972036b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": "https://github.com/atharvgarg30-hub"
  },
  {
    "id": 39,
    "name": "Tamanna",
    "designation": "Media and joint head",
    "img": "/teams/CC/Tamanna.jpg",
    "instagram": "https://www.instagram.com/itamanna02?igsh=aDhiMmQ3aXR5dXh6",
    "linkedin": "https://www.linkedin.com/in/tamanna-kinha-a6687237b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 40,
    "name": "Kiana agarwal",
    "designation": "Senior coordinator logistics",
    "img": "/teams/CC/Kiana agarwal.jpg",
    "instagram": "https://www.instagram.com/kiana_k_agarwal?igsh=MXhjODVvZ2thNWg1dA%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/kiana-agarwal",
    "github": "https://github.com/kianaagarwal"
  },
  {
    "id": 41,
    "name": "Niharika Singh",
    "designation": "Events, Senior Coordinator",
    "img": "/teams/CC/Niharika Singh.jpg",
    "instagram": "https://www.instagram.com/niharikaezz?igsh=azFka2wwdnV2ZnEz",
    "linkedin": "https://www.linkedin.com/in/niharika-singh-96b967380?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 42,
    "name": "Arnav Asrani",
    "designation": "WIE logistic(Senior Coordinator Logistic)",
    "img": "/teams/CC/Arnav Asrani.jpg",
    "instagram": "https://www.instagram.com/arnav.asrani",
    "linkedin": "",
    "github": "https://github.com/arnavasrani"
  },
  {
    "id": 43,
    "name": "Utkarsh Jain",
    "designation": "Graphic Design, Senior Coordinator",
    "img": "/teams/CC/Utkarsh Jain.jpg",
    "instagram": "https://www.instagram.com/utkxrsh_307/",
    "linkedin": "https://www.linkedin.com/in/utkarshjain007/",
    "github": ""
  },
  {
    "id": 44,
    "name": "Yashu Suresh Pandey",
    "designation": "Social media , senior coordinator",
    "img": "/teams/CC/Yashu Suresh Pandey.jpg",
    "instagram": "https://www.instagram.com/yashu_pandey04/",
    "linkedin": "https://www.linkedin.com/in/yashu-pandey-9b9685414?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    "github": "https://github.com/yashupandey29"
  },
  {
    "id": 45,
    "name": "Ifra Inam",
    "designation": "Graphic design senior coordinator",
    "img": "/teams/CC/Ifra Inam.jpg",
    "instagram": "https://www.instagram.com/ifraaa.com_?igsh=MXFoYWFwaGVlaTVwZw%3D%3D&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/ifra-inam-984a5937b?trk=contact-info",
    "github": ""
  },
  {
    "id": 46,
    "name": "Ananya Kedia",
    "designation": "Social Media , Head",
    "img": "/teams/CC/Ananya Kedia.jpg",
    "instagram": "https://www.instagram.com/ananyaa.kedia?igsh=MWUyaXJ1bWh0aGFsZA%3D%3D&utm_source=qr",
    "linkedin": "https://in.linkedin.com/in/ananya-kedia-848829348",
    "github": "https://github.com/ananyak09"
  },
  {
    "id": 47,
    "name": "Manya Singh",
    "designation": "Joint head of Events",
    "img": "/teams/CC/Manya Singh.jpg",
    "instagram": "https://www.instagram.com/manyaa.14?igsh=Zjl6MjQ2NDEzMTJq&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/manya-singh-8852a7420/?skipRedirect=true",
    "github": "https://github.com/manyasingh1477/Manya-Singh"
  },
  {
    "id": 48,
    "name": "Yash Sharma",
    "designation": "Cse and head of corporate affairs",
    "img": "/teams/CC/Yash Sharma.jpg",
    "instagram": "https://www.instagram.com/busyguy_18?igsh=aDMybmV3MWwzNjVw",
    "linkedin": "https://www.linkedin.com/in/yash-sharma-a46ab7339?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 49,
    "name": "Akshat Raheja",
    "designation": "Gen Sec",
    "img": "/teams/EC/Akshat Raheja.jpg",
    "instagram": "https://www.instagram.com/akshat_raheja06/",
    "linkedin": "https://www.linkedin.com/in/akshat-raheja06",
    "github": ""
  },
  {
    "id": 50,
    "name": "Ashita Saxena",
    "designation": "Managing Director",
    "img": "/teams/EC/Ashita Saxena.jpg",
    "instagram": "https://www.instagram.com/ashitaaaa_0808/",
    "linkedin": "https://www.linkedin.com/in/ashita-saxena-a3178824a/",
    "github": ""
  },
  {
    "id": 51,
    "name": "Vaibhav Kumar",
    "designation": "Technical Secretary",
    "img": "/teams/EC/Vaibhav Kumar.jpg",
    "instagram": "https://www.instagram.com/vbv.kr/",
    "linkedin": "https://www.linkedin.com/in/vaibhav-kumar-b8817038a/",
    "github": ""
  },
  {
    "id": 52,
    "name": "Sarath Mohanraj",
    "designation": "Treasurer",
    "img": "/teams/EC/Sarath Mohanraj.jpg",
    "instagram": "https://www.instagram.com/sarathmohanraj?igsh=MTRva3d5cGtjaGhhNg==",
    "linkedin": "https://www.linkedin.com/in/sarath-mohanraj",
    "github": "https://github.com/sarathTechie"
  },
  {
    "id": 53,
    "name": "Kshiti singh",
    "designation": "Vice Chairperson",
    "img": "/teams/EC/Kshiti singh.jpg",
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
    "img": "/teams/EC/Shivangi kotnala.jpg",
    "instagram": "https://www.instagram.com/_simplyshivangi_?igsh=a2xyb2t1ZnJ4NGJh&utm_source=qr",
    "linkedin": "https://www.linkedin.com/in/shivangi-kotnala-41a4b3359?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    "github": "https://github.com/shivangi-kotnala"
  },
  {
    "id": 56,
    "name": "Presha Gusain",
    "designation": "Senior coordinator of Marketing",
    "img": "/teams/CC/Presha Gusain.jpg",
    "instagram": "https://www.instagram.com/preshagusain__?igsh=aTVidHV5ZDBwam05",
    "linkedin": "https://www.linkedin.com/in/presha-gusain-7198863a6?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 57,
    "name": "Andrea Benjamin",
    "designation": "Senior Coordinator for Editorial",
    "img": "/teams/CC/Andrea Benjamin.jpg",
    "instagram": "https://www.instagram.com/andrea.diaa?igsh=ZWkwOHJ2bm93cWFm",
    "linkedin": "https://www.linkedin.com/in/andrea-benjamin-658238311?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    "github": ""
  },
  {
    "id": 58,
    "name": "Aum Lenka",
    "designation": "Head of Technical Projects",
    "img": "/teams/CC/Aum Lenka.jpg",
    "instagram": "https://www.instagram.com/lnk.dot/",
    "linkedin": "https://www.linkedin.com/in/aum-lenka/",
    "github": "https://github.com/Faze-Mortal"
  }
];

const path = require('path');
const ecRoles = ['chairperson', 'vice chairperson', 'human resource director', 'managing director', 'gen sec', 'general secretary', 'treasurer', 'technical secretary'];

let ec = [];
let cc = [];

// Clean up roles and check EC
data.forEach(p => {
  const d = p.designation.toLowerCase();
  
  const isEC = ecRoles.some(r => d.includes(r)) || d === 'gen sec';
  
  if(isEC) {
    ec.push(p);
  } else {
    cc.push(p);
  }
});

// Group cc by department
const departments = ['Technical Projects', 'Logistics', 'Media', 'Editorial', 'Corporate Affairs', 'Curations', 'Social Media', 'Promotions', 'Graphics Design', 'Events', 'Marketing'];
let coreGrouped = {};
departments.forEach(dep => coreGrouped[dep] = []);

cc.forEach(p => {
  const d = p.designation.toLowerCase();
  let matched = false;
  for(let dep of departments) {
    if(d.includes(dep.toLowerCase()) || 
       (dep === 'Graphics Design' && (d.includes('graphic design') || d.includes('graphics design'))) ||
       (dep === 'Promotions' && d.includes('promotion')) ||
       (dep === 'Curations' && d.includes('cuartions')) ||
       (dep === 'Events' && d.includes('event')) ||
       (dep === 'Logistics' && d.includes('logistic'))
       ) {
      coreGrouped[dep].push(p);
      matched = true;
      break;
    }
  }
  if(!matched) {
    console.log('Unmatched:', p.name, p.designation);
    coreGrouped['Other'] = coreGrouped['Other'] || [];
    coreGrouped['Other'].push(p);
  }
});

const fsDir = './public/teams';
let foundFiles = [];
try {
  foundFiles = [...fs.readdirSync(fsDir + '/CC').map(f => '/teams/CC/' + f), ...fs.readdirSync(fsDir + '/EC').map(f => '/teams/EC/' + f)];
} catch(e) {}

const getRealImage = (p, isEC) => {
  let nameNoSpace = p.name.trim().toLowerCase();
  
  // Exact match
  let matchedFile = foundFiles.find(f => {
    let base = path.parse(f).name.toLowerCase();
    return base === nameNoSpace;
  });
  if (matchedFile) return matchedFile;
  
  // Hyphen match
  matchedFile = foundFiles.find(f => {
    let base = path.parse(f).name.toLowerCase();
    return base === nameNoSpace.replace(/\s+/g, '-');
  });
  if (matchedFile) return matchedFile;

  // Prefix match
  matchedFile = foundFiles.find(f => {
    let base = path.parse(f).name.toLowerCase();
    return base.startsWith(nameNoSpace) || nameNoSpace.startsWith(base);
  });
  if (matchedFile) return matchedFile;

  return p.img;
};

const cleanDesignation = (raw) => {
  let d = raw.toLowerCase();
  
  if (d.includes('joint head') || d.includes('joint-head')) return 'Joint Head';
  if (d.includes('head') && !d.includes('joint')) return 'Head';
  if (d.includes('senior coordinator') || d.includes('senior coodinator')) return 'Senior Coordinator';
  if (d.includes('coordinator')) return 'Coordinator';
  if (d.includes('gen sec') || d.includes('general secretary')) return 'Gen Sec';
  if (d.includes('treasurer')) return 'Treasurer';
  if (d.includes('chairperson') && !d.includes('vice')) return 'Chairperson';
  if (d.includes('vice chairperson')) return 'Vice Chairperson';
  if (d.includes('human resource director')) return 'Human Resource Director';
  if (d.includes('managing director')) return 'Managing Director';
  if (d.includes('technical secretary')) return 'Technical Secretary';

  return raw; 
};

const sortDepartmentMembers = (members) => {
  const getRank = (d) => {
    if (d === 'Head') return 1;
    if (d === 'Joint Head') return 2;
    if (d === 'Senior Coordinator') return 3;
    return 4;
  };
  
  let sorted = members.slice().sort((a, b) => getRank(a.designation) - getRank(b.designation));
  
  if (sorted.length <= 2) return sorted;
  
  let result = [];
  result[1] = sorted[0]; // Center
  result[2] = sorted[1]; // Right
  result[0] = sorted[2]; // Left
  
  for(let i=3; i<sorted.length; i++) {
    result.push(sorted[i]);
  }
  
  return result;
};

ec = ec.map(p => ({...p, designation: cleanDesignation(p.designation), img: getRealImage(p, true)}));
let finalCC = [];
let nextId = 32;
for(let dep in coreGrouped) {
  if (coreGrouped[dep] && coreGrouped[dep].length > 0) {
    let members = coreGrouped[dep].map(p => ({...p, designation: cleanDesignation(p.designation), img: getRealImage(p, false)}));
    finalCC.push({
      department: dep,
      members: sortDepartmentMembers(members).map(p => ({...p, id: nextId++}))
    });
  }
}


const out = `
const executiveCommittee = ${JSON.stringify(ec, null, 2)};
const coreDepartments = ${JSON.stringify(finalCC, null, 2)};
`;

fs.writeFileSync('temp_team_code.js', out);
console.log('done');
