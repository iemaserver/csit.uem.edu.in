import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '../components/PageLayout';
import GlassCard from '../components/GlassCard';
import SectionTitle from '../components/SectionTitle';
import EventCard from '../components/EventCard';
import { Calendar, GraduationCap } from 'lucide-react';

const alumniTalkPoster = new URL('../assets/Events/2021_ODD SEM/Alumni Talk/17-09-2021/flyer_17-09-2021.jpg', import.meta.url).href;
const alumniTalkScreenshot = new URL('../assets/Events/2021_ODD SEM/Alumni Talk/17-09-2021/PHOTO_SCREENSHOT.jpg', import.meta.url).href;
const industryTalkPoster1 = new URL('../assets/Events/2021_ODD SEM/Industry Talk/02-10-2021/flyer_02-10-2021.jpg', import.meta.url).href;
const industryTalkPoster2 = new URL('../assets/Events/2021_ODD SEM/Industry Talk/09-10-2021/flyer_09-10-2021.jpg', import.meta.url).href;
const industryTalkScreenshot = new URL('../assets/Events/2021_ODD SEM/Industry Talk/09-10-2021/PHOTO_SCREENSHOT.jpg', import.meta.url).href;

const industryTalk2022Poster = new URL('../assets/Events/2022_EVEN SEM/Industry Talk/01-04-2022/Flyer_Panel_Discussions_1st-April.jpeg', import.meta.url).href;
const industryTalk2022Gallery = [
  new URL('../assets/Events/2022_EVEN SEM/Industry Talk/01-04-2022/IMAGE_SCREENSHOT/pic_1.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Industry Talk/01-04-2022/IMAGE_SCREENSHOT/pic_2.jpg', import.meta.url).href,
];
const alumniTalk2022Poster = new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/Flyer.png', import.meta.url).href;
const alumniTalk2022Gallery = [
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/Pic_1.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/pic_2.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/pic_3.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/pic_4.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/pic_5.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Alumni talk/08-04-2022/PHOTO_SCREENSHOT/pic_6.jpg', import.meta.url).href,
];
const posterCompetition2022Poster = new URL('../assets/Events/2022_EVEN SEM/Poster Competition/poster.png', import.meta.url).href;
const posterCompetition2022Gallery = [
  new URL('../assets/Events/2022_EVEN SEM/Poster Competition/12-04-2022/IMAGE_SCREENSHOT/IMG-20220412-WA0006.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Poster Competition/12-04-2022/IMAGE_SCREENSHOT/IMG-20220412-WA0008.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Poster Competition/12-04-2022/IMAGE_SCREENSHOT/IMG-20220412-WA0014.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_EVEN SEM/Poster Competition/12-04-2022/IMAGE_SCREENSHOT/IMG_20220412_171857.jpg', import.meta.url).href,
];
const technicalTalk3AugPoster = new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/tt113.JPG', import.meta.url).href;
const technicalTalk3AugGallery = [
  new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/tt113.JPG', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/tt18.JPG', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/TT19.JPG', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/TT20.JPG', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Technical Talk/03-08-2022/PHOTO_SCREENSHOT/TT22.JPG', import.meta.url).href,
];
const technicalTalk20AugPoster = new URL('../assets/Events/2022_ODD SEM/Technical Talk/20-08-2022/flyer.jpg', import.meta.url).href;
const virtualTourPoster = new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/Flyer_virtual tour.jpg', import.meta.url).href;
const virtualTourGallery = [
  new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/IMAGE_SCREENSHOT/ss1.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/IMAGE_SCREENSHOT/ss10.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/IMAGE_SCREENSHOT/ss11.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/IMAGE_SCREENSHOT/ss12.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Virtual Tour/26-08-2022/IMAGE_SCREENSHOT/ss2.png', import.meta.url).href,
];
const distinguishedLecture2022Poster1 = new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/07-09-2022/Flyer-DL-SUMANAKUNDU.jpg', import.meta.url).href;
const distinguishedLecture2022Gallery1 = [
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/07-09-2022/PHOTO_SCREENSHOT/1.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/07-09-2022/PHOTO_SCREENSHOT/2.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/07-09-2022/PHOTO_SCREENSHOT/3.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/07-09-2022/PHOTO_SCREENSHOT/4.png', import.meta.url).href,
];
const distinguishedLecture2022Poster2 = new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/15-09-2022/flyer.jpg', import.meta.url).href;
const distinguishedLecture2022Gallery2 = [
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/15-09-2022/PHOTO_SCREENSHOT/Pic1_15.09.2022.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Distinguished Lecture Series/15-09-2022/PHOTO_SCREENSHOT/Pic2_15.09.2022.png', import.meta.url).href,
];
const posterCompetitionOddPoster = new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/Poster Competition_9th September__2022_5.jpeg', import.meta.url).href;
const posterCompetitionOddGallery = [
  new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/photo_2022-09-19_15-54-10.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/photo_2022-09-19_15-54-19.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/photo_2022-09-19_15-54-58.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/Poster Competition_9th September__2022_5.jpeg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Poster Competition/09-09-2022/PHOTO_SCREENSHOT/Poster Competition_9th September__2022_6.jpeg', import.meta.url).href,
];
const prizeDistribution2022Poster = new URL('../assets/Events/2022_ODD SEM/Prize Distribution/14-11-2022/PHOTO_SCREENSHOT/ss1.jpg', import.meta.url).href;
const prizeDistribution2022Gallery = [
  new URL('../assets/Events/2022_ODD SEM/Prize Distribution/14-11-2022/PHOTO_SCREENSHOT/ss1.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Prize Distribution/14-11-2022/PHOTO_SCREENSHOT/ss2.jpg', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Prize Distribution/14-11-2022/PHOTO_SCREENSHOT/ss3.jpg', import.meta.url).href,
];
const invitedLecture2022Poster = new URL('../assets/Events/2022_ODD SEM/Invited Lecture Series/28-10-2022/PHOTO_SCREENSHOT/SS1.png', import.meta.url).href;
const invitedLecture2022Gallery = [
  new URL('../assets/Events/2022_ODD SEM/Invited Lecture Series/28-10-2022/PHOTO_SCREENSHOT/SS1.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Invited Lecture Series/28-10-2022/PHOTO_SCREENSHOT/SS2.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Invited Lecture Series/28-10-2022/PHOTO_SCREENSHOT/SS3.png', import.meta.url).href,
  new URL('../assets/Events/2022_ODD SEM/Invited Lecture Series/28-10-2022/PHOTO_SCREENSHOT/SS4.png', import.meta.url).href,
];

const invitedTalk2023Poster1 = new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/03-02-2023/FLYER1_IT_03-02-2023.png', import.meta.url).href;
const invitedTalk2023Gallery1 = [
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/03-02-2023/IMAGE/industry talk ss1.png', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/03-02-2023/IMAGE/industry talk ss2.png', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/03-02-2023/IMAGE/industry talk ss3.png', import.meta.url).href,
];
const invitedTalk2023Poster2 = new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/15-02-2023/FLYER2_IT_15-02-2023.png', import.meta.url).href;
const invitedTalk2023Gallery2 = [
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/15-02-2023/IMAGE/Image1.jpeg', import.meta.url).href,
];
const invitedTalk2023Poster3 = new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-02-2023/FLYER3_IT_24-02-2023.png', import.meta.url).href;
const invitedTalk2023Gallery3 = [
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-02-2023/IMAGE/Image1.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-02-2023/IMAGE/Image2.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-02-2023/IMAGE/Image3.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-02-2023/IMAGE/Image4.jpeg', import.meta.url).href,
];
const invitedTalk2023Poster4 = new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/FLYER4_IT_24-03-2023.png', import.meta.url).href;
const invitedTalk2023Gallery4 = [
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/image/WhatsApp Image 2023-03-24 at 5.19.48 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/image/WhatsApp Image 2023-03-24 at 5.19.49 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/image/WhatsApp Image 2023-03-24 at 5.19.50 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/image/WhatsApp Image 2023-03-24 at 5.19.51 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/INVITED TALK/24-03-2023/image/WhatsApp Image 2023-03-24 at 5.19.51 PM.jpeg', import.meta.url).href,
];
const posterCompetition2023Poster = new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/POSTER.jpg', import.meta.url).href;
const posterCompetition2023Gallery = [
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/IMG_20230315_194935_323.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/WhatsApp Image 2023-03-15 at 5.02.07 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/WhatsApp Image 2023-03-15 at 5.02.13 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/WhatsApp Image 2023-03-15 at 5.26.05 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/WhatsApp Image 2023-03-15 at 5.26.06 PM (4).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/POSTER COMPETITION/IMAGES/WhatsApp Image 2023-03-16 at 12.38.41 PM (1).jpeg', import.meta.url).href,
];
const prizeDistribution2023Poster = new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.17 PM (1).jpeg', import.meta.url).href;
const prizeDistribution2023Gallery = [
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.17 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.19 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.19 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.20 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.20 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.21 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.21 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.21 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.22 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.22 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.23 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.23 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.24 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.24 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.24 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.25 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.25 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.26 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PRIZE DISTRIBUTION/WhatsApp Image 2023-04-28 at 2.31.27 PM.jpeg', import.meta.url).href,
];
const projectCompetition2023Poster = new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/project comp flyer.jpg', import.meta.url).href;
const projectCompetition2023Gallery = [
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img1.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img10.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img2.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img3.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img4.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img5.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img6.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img7.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img8.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/PROJECT COMPETITION/images/proj_img9.jpeg', import.meta.url).href,
];
const virtualTour2023Poster1 = new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/03-03-2023/Flyer_ Virtual tour 1.png', import.meta.url).href;
const virtualTour2023Gallery1 = [
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/03-03-2023/IMAGE/IMAGE 1.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/03-03-2023/IMAGE/IMAGE 2.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/03-03-2023/IMAGE/IMAGE 3.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/03-03-2023/IMAGE/IMAGE 4.jpeg', import.meta.url).href,
];
const virtualTour2023Poster2 = new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/virtual tour 3_flyer.png', import.meta.url).href;
const virtualTour2023Gallery2 = [
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.12 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.13 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.13 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.13 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.14 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.14 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/11-04-2023/Image/WhatsApp Image 2023-04-11 at 4.57.15 PM.jpeg', import.meta.url).href,
];
const virtualTour2023Poster3 = new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/Virtual tour 2_flyer.png', import.meta.url).href;
const virtualTour2023Gallery3 = [
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/IMAGE/WhatsApp Image 2023-03-17 at 4.52.24 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/IMAGE/WhatsApp Image 2023-03-17 at 4.52.25 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/IMAGE/WhatsApp Image 2023-03-17 at 4.52.26 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/IMAGE/WhatsApp Image 2023-03-17 at 4.52.26 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/VIRTUAL TOUR/17-03-2023/IMAGE/WhatsApp Image 2023-03-17 at 4.52.26 PM.jpeg', import.meta.url).href,
];
const workshop2023Poster = new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/WhatsApp Image 2023-03-27 at 5.20.41 PM.jpeg', import.meta.url).href;
const workshop2023Gallery = [
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-27 at 5.20.40 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-27 at 5.20.42 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-29 at 5.21.53 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-30 at 5.19.07 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-31 at 6.04.56 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-31 at 6.04.56 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-31 at 6.04.57 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_EVEN SEM/WORKSHOP/27-31 march 2023_Departmental/IMAGE/WhatsApp Image 2023-03-31 at 6.04.59 PM.jpeg', import.meta.url).href,
];
const technicalEssay2024Poster = new URL('../assets/Events/2024_EVEN SEM/TECHNICAL ESSAY WRITING_30012024/Flyer_EssayCompetition.png', import.meta.url).href;
const technicalEssay2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/TECHNICAL ESSAY WRITING_30012024/WhatsApp Image 2024-02-07 at 2.06.11 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/TECHNICAL ESSAY WRITING_30012024/WhatsApp Image 2024-02-07 at 2.06.12 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/TECHNICAL ESSAY WRITING_30012024/WhatsApp Image 2024-02-07 at 2.06.12 PM.jpeg', import.meta.url).href,
];
const virtualTour2024Poster1 = new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/Virtual Tour_08022024.png', import.meta.url).href;
const virtualTour2024Gallery1 = [
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/WhatsApp Image 2024-02-08 at 4.41.25 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/WhatsApp Image 2024-02-08 at 4.41.25 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/WhatsApp Image 2024-02-08 at 4.41.25 PM (3).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/WhatsApp Image 2024-02-08 at 4.41.25 PM (4).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/08.02.2024/WhatsApp Image 2024-02-08 at 4.41.25 PM.jpeg', import.meta.url).href,
];
const alumniTalk2024Poster1 = new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_09022024/FLYER_ALUMNITALK.jpeg', import.meta.url).href;
const alumniTalk2024Gallery1 = [
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_09022024/PIC.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_09022024/WhatsApp Image 2024-02-12 at 11.51.51 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_09022024/WhatsApp Image 2024-02-12 at 11.51.52 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_09022024/WhatsApp Image 2024-02-12 at 11.51.56 AM.jpeg', import.meta.url).href,
];
const virtualTour2024Poster2 = new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/20.03.2024/SS1.jpg', import.meta.url).href;
const virtualTour2024Gallery2 = [
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/20.03.2024/SS2.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/20.03.2024/SS3.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/20.03.2024/WhatsApp Image 2024-03-18 at 1.21.56 PM.jpeg', import.meta.url).href,
];
const alumniTalk2024Poster2 = new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_18032024/Alumni talk_18032024 (1).png', import.meta.url).href;
const alumniTalk2024Gallery2 = [
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_18032024/WhatsApp Image 2024-03-28 at 4.33.24 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_18032024/WhatsApp Image 2024-03-28 at 4.33.24 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_18032024/WhatsApp Image 2024-03-28 at 4.33.25 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/ALUMNITALK_18032024/WhatsApp Image 2024-03-28 at 4.33.25 PM.jpeg', import.meta.url).href,
];
const invitedTalk2024Poster = new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/ss1.jpg', import.meta.url).href;
const invitedTalk2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/ss2.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/ss3.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/WhatsApp Image 2024-03-18 at 12.43.58 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/WhatsApp Image 2024-03-19 at 4.34.44 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/WhatsApp Image 2024-03-19 at 4.34.45 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/WhatsApp Image 2024-03-19 at 4.37.42 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/INVITED TALK_19032024/WhatsApp Image 2024-03-19 at 4.39.00 PM.jpeg', import.meta.url).href,
];
const posterCompetition2024Poster = new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/POSTER_FLYER.jpeg', import.meta.url).href;
const posterCompetition2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.47 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.51 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.51 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.52 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.53 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.54 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.54 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.55 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.56 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/POSTER COMPETITION/WhatsApp Image 2024-03-02 at 9.56.58 AM.jpeg', import.meta.url).href,
];
const projectCompetition2024Poster = new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/PROJECT_FLYER.jpeg', import.meta.url).href;
const projectCompetition2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.41 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.43 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.43 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.44 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.45 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.46 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.46 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/PROJECT COMPETITION/WhatsApp Image 2024-03-02 at 9.56.46 AM.jpeg', import.meta.url).href,
];
const workshop2024Poster = new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/photo1708405652.jpeg', import.meta.url).href;
const workshop2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.09 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.14 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.15 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.15 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.16 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.16 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.18 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.20 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/WORKSHOP/WhatsApp Image 2024-03-28 at 4.31.21 PM (2).jpeg', import.meta.url).href,
];
const prizeDistribution2024Poster = new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.22 AM (1).jpeg', import.meta.url).href;
const prizeDistribution2024Gallery = [
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.22 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.23 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.23 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.24 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.24 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.24 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.25 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.25 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.26 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.26 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.26 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/Prize Distribution/WhatsApp Image 2024-05-28 at 9.37.27 AM (1).jpeg', import.meta.url).href,
];
const virtualTour2024Poster3 = new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/28.03.2024/vt31.jpg', import.meta.url).href;
const virtualTour2024Gallery3 = [
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/28.03.2024/vt32.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/28.03.2024/vt33.jpg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/28.03.2024/WhatsApp Image 2024-03-28 at 4.32.26 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2024_EVEN SEM/VIRTUAL TOUR/28.03.2024/WhatsApp Image 2024-03-28 at 4.32.26 PM.jpeg', import.meta.url).href,
];
const virtualTourOdd2024Poster = new URL('../assets/Events/2024_ODD SEM/VIRTUAL TOUR_19072024/WhatsApp Image 2024-07-19 at 4.56.10 PM.jpeg', import.meta.url).href;
const alumniTalkOdd2024Poster = new URL('../assets/Events/2024_ODD SEM/ALUMNI TALK_14082024/WhatsApp Image 2024-08-14 at 10.19.27 AM.jpeg', import.meta.url).href;
const technicalDebate2024Poster = new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-13 at 12.51.38 PM.jpeg', import.meta.url).href;
const quizCompetition2024Poster = new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-20 at 12.23.08 PM.jpeg', import.meta.url).href;
const treePlantation2024Poster = new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.14 PM.jpeg', import.meta.url).href;
const posterCompetitionOdd2024Poster = new URL('../assets/Events/2024_ODD SEM/POSTER COMPETITION_16092024/WhatsApp Image 2024-10-04 at 5.33.41 PM (1).jpeg', import.meta.url).href;
const projectCompetitionOdd2024Poster = new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.19.58 PM.jpeg', import.meta.url).href;
const industryTalk2024Poster = new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.34 PM (1).jpeg', import.meta.url).href;
const technicalWriting2024Poster = new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.06 PM.jpeg', import.meta.url).href;
const invitedTalkOdd2024Poster = new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.05 PM.jpeg', import.meta.url).href;

// 2025 event asset constants (generated from src/assets/Events/2025_EVEN SEM and src/assets/Events/2025_ODD SEM)
const alumniTalk2025Poster = new URL('../assets/Events/2025_EVEN SEM/Alumni Talk/WhatsApp Image 2025-03-07 at 10.40.15 AM.jpeg', import.meta.url).href;
const alumniTalk2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Alumni Talk/WhatsApp Image 2025-03-07 at 10.40.15 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Alumni Talk/WhatsApp Image 2025-03-07 at 10.40.16 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Alumni Talk/WhatsApp Image 2025-03-07 at 10.40.16 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Alumni Talk/WhatsApp Image 2025-03-07 at 10.44.15 AM (1).jpeg', import.meta.url).href,
];
const codeAThrive2025Poster = new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.35 PM (2).jpeg', import.meta.url).href;
const codeAThrive2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.35 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.36 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.36 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.37 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.37 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.37 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.38 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Code-A-Thrive/WhatsApp Image 2025-04-25 at 12.04.38 PM.jpeg', import.meta.url).href,
];
const invitedTalk2025Poster = new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/post.jpg', import.meta.url).href;
const invitedTalk2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/WhatsApp Image 2025-04-25 at 12.57.59 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/WhatsApp Image 2025-04-25 at 12.58.00 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/WhatsApp Image 2025-04-25 at 12.58.00 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/WhatsApp Image 2025-04-25 at 12.58.00 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Invited Talk/22.3.2025/WhatsApp Image 2025-04-25 at 12.58.01 PM.jpeg', import.meta.url).href,
];
const posterCompetition2025Poster = new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.10 AM.jpeg', import.meta.url).href;
const posterCompetition2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.10 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.11 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.11 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.12 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.12 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.41.13 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Poster Competition/WhatsApp Image 2025-03-07 at 10.44.12 AM.jpeg', import.meta.url).href,
];
const prizeDistribution2025Poster = new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.28 PM (1).jpeg', import.meta.url).href;
const prizeDistribution2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.28 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.28 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.28 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.29 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.29 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.29 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.30 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.30 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.30 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.31 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.31 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.31 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.32 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.32 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.32 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.33 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.33 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.34 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Prize Distribution/WhatsApp Image 2025-04-25 at 12.04.34 PM.jpeg', import.meta.url).href,
];
const projectCompetition2025Poster = new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.28 PM (1).jpeg', import.meta.url).href;
const projectCompetition2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.28 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.29 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.29 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.30 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.30 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.31 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.31 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/WhatsApp Image 2025-04-25 at 12.05.32 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Project Competition/Workshop Po (7).png', import.meta.url).href,
];
const technicalEssay2025Poster = new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.51.38 AM.jpeg', import.meta.url).href;
const technicalEssay2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.51.38 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.52.06 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.52.07 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.52.08 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.52.08 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_EVEN SEM/Technical Essay Writing/WhatsApp Image 2025-03-07 at 10.52.09 AM.jpeg', import.meta.url).href,
];
const virtualTour2025Poster = new URL('../assets/Events/2025_EVEN SEM/VIRTUAL TOUR_07032025/WhatsApp Image 2025-03-07 at 10.51.18 AM.jpeg', import.meta.url).href;
const virtualTour2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/VIRTUAL TOUR_07032025/WhatsApp Image 2025-03-07 at 10.51.18 AM.jpeg', import.meta.url).href,
];
const workshop2025Poster = new URL('../assets/Events/2025_EVEN SEM/Workshop/6228939113625665886.jpg', import.meta.url).href;
const workshop2025Gallery = [
  new URL('../assets/Events/2025_EVEN SEM/Workshop/6228939113625665886.jpg', import.meta.url).href,
];

// 2026 event asset constants (generated from src/assets/Events/2026_Even SEM)
const alumniTalk2026Poster = new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/alumni_flyer.jpg', import.meta.url).href;
const alumniTalk2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/alumni_flyer.jpg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/WhatsApp Image 2026-01-14 at 5.30.26 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/WhatsApp Image 2026-01-14 at 5.30.26 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/WhatsApp Image 2026-01-14 at 5.30.27 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Alumni Talk_14.01.2026/WhatsApp Image 2026-01-14 at 5.30.27 PM.jpeg', import.meta.url).href,
];
const filmMaking2026Poster = new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.31 PM (1).jpeg', import.meta.url).href;
const filmMaking2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.31 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.31 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.32 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.33 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 1.27.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Film making Competition/WhatsApp Image 2026-03-17 at 12.13.13 PM.jpeg', import.meta.url).href,
];
const invitedTalk2026Poster = new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/Invited talk_flyer.jpeg', import.meta.url).href;
const invitedTalk2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/WhatsApp Image 2026-01-31 at 4.18.55 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/WhatsApp Image 2026-01-31 at 4.18.55 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/WhatsApp Image 2026-01-31 at 4.18.56 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/WhatsApp Image 2026-01-31 at 4.18.56 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Invited_talk_31.1.2026/WhatsApp Image 2026-01-31 at 4.20.50 PM.jpeg', import.meta.url).href,
];
const posterCompetition2026Poster = new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/poster flyer.jpeg', import.meta.url).href;
const posterCompetition2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 6.18.15 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 6.18.17 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 6.18.18 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 6.18.20 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 6.18.22 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.36 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.37 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.37 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.38 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.39 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.40 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Poster Compettition_19.2.2026/WhatsApp Image 2026-02-19 at 9.08.41 PM (1).jpeg', import.meta.url).href,
];
const technicalEssay2026Poster = new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/writing_flyer.jpg', import.meta.url).href;
const technicalEssay2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/WhatsApp Image 2026-02-05 at 9.41.02 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/WhatsApp Image 2026-02-05 at 9.41.03 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/WhatsApp Image 2026-02-05 at 9.41.04 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/WhatsApp Image 2026-02-05 at 9.41.05 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Technical Essay writing_5.2.2026/WhatsApp Image 2026-02-05 at 9.41.06 PM.jpeg', import.meta.url).href,
];
const virtualTour132026Poster = new URL('../assets/Events/2026_Even SEM/Virtual Tour_13.02.2026/WhatsApp Image 2026-02-13 at 6.08.32 PM.jpeg', import.meta.url).href;
const virtualTour132026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_13.02.2026/WhatsApp Image 2026-02-13 at 6.08.32 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_13.02.2026/WhatsApp Image 2026-02-13 at 6.08.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_13.02.2026/WhatsApp Image 2026-02-13 at 6.08.34 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_13.02.2026/WhatsApp Image 2026-02-13 at 6.08.34 PM.jpeg', import.meta.url).href,
];
const virtualTour232026Poster = new URL('../assets/Events/2026_Even SEM/Virtual Tour_2.3.2026/WhatsApp Image 2026-03-02 at 6.59.22 PM.jpeg', import.meta.url).href;
const virtualTour232026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_2.3.2026/WhatsApp Image 2026-03-02 at 6.59.22 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_2.3.2026/WhatsApp Image 2026-03-02 at 6.59.22 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_2.3.2026/WhatsApp Image 2026-03-02 at 6.59.23 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Virtual Tour_2.3.2026/WhatsApp Image 2026-03-02 at 6.59.27 PM.jpeg', import.meta.url).href,
];
const workshop2026Poster = new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.11 PM.jpeg', import.meta.url).href;
const workshop2026Gallery = [
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.11 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.31 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.32 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.34 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2026_Even SEM/Workshop/WhatsApp Image 2026-03-16 at 1.33.35 PM.jpeg', import.meta.url).href,
];

// 2025 odd-sem
const alumniTalkOdd2025Poster = new URL('../assets/Events/2025_ODD SEM/ALUMNI TALK_/alumni talk.jpg', import.meta.url).href;
const alumniTalkOdd2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/ALUMNI TALK_/alumni talk.jpg', import.meta.url).href,
];
const codingCompetition2025Poster = new URL('../assets/Events/2025_ODD SEM/CODING/WhatsApp Image 2025-09-01 at 4.52.32 PM (1).jpeg', import.meta.url).href;
const codingCompetition2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/CODING/WhatsApp Image 2025-09-01 at 4.52.32 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/CODING/WhatsApp Image 2025-09-01 at 4.52.32 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/CODING/WhatsApp Image 2025-09-01 at 4.52.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/CODING/WhatsApp Image 2025-09-01 at 4.52.34 PM.jpeg', import.meta.url).href,
];
const debateCompetition2025Poster = new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.01 PM.jpeg', import.meta.url).href;
const debateCompetition2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.01 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.35 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.43 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.45 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.46 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/DEBATE COMPETITION/WhatsApp Image 2025-09-12 at 10.34.49 PM.jpeg', import.meta.url).href,
];
const genAi2025Poster = new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-12 at 5.11.40 PM.jpeg', import.meta.url).href;
const genAi2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-12 at 5.11.40 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-12 at 5.12.16 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-12 at 5.12.18 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-12 at 5.12.18 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-14 at 6.00.18 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-14 at 6.00.19 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-14 at 6.00.19 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-14 at 6.00.20 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/GENAI/WhatsApp Image 2025-08-14 at 6.00.21 PM.jpeg', import.meta.url).href,
];
const invitedTalkOdd2025Poster = new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.54.00 AM.jpeg', import.meta.url).href;
const invitedTalkOdd2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.54.00 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.55.46 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.55.46 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.55.47 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.55.47 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/INVITED TALK/WhatsApp Image 2025-09-26 at 11.55.47 AM.jpeg', import.meta.url).href,
];
const pixelPalette2025Poster = new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-10 at 3.01.02 PM.jpeg', import.meta.url).href;
const pixelPalette2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-10 at 3.01.02 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.29 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.29 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.30 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.30 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.31 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PIXEL PALETTE/WhatsApp Image 2025-09-15 at 5.58.31 PM.jpeg', import.meta.url).href,
];
const posterOdd2025Poster = new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.10 PM.jpeg', import.meta.url).href;
const posterOdd2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.10 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.31 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.32 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.33 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.34 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.35 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.36 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.36 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/POSTER/WhatsApp Image 2025-09-10 at 7.23.37 PM.jpeg', import.meta.url).href,
];
const projectOdd2025Poster = new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 12.34.23 PM.jpeg', import.meta.url).href;
const projectOdd2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 12.34.23 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.07 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.07 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.09 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.10 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.10 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.11 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.12 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.12 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/PROJECT/WhatsApp Image 2025-09-04 at 5.53.14 PM.jpeg', import.meta.url).href,
];
const virtualTourOdd2025Poster = new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-22 at 4.25.02 PM.jpeg', import.meta.url).href;
const virtualTourOdd2025Gallery = [
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-22 at 4.25.02 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-26 at 4.15.40 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-26 at 4.15.40 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-26 at 4.15.41 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-26 at 4.15.41 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2025_ODD SEM/VIRTUAL_TOUR/WhatsApp Image 2025-08-26 at 4.15.42 PM.jpeg', import.meta.url).href,
];

const alumniTalk2023Poster = new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Alumni1_28072023.jpeg', import.meta.url).href;
const alumniTalk2023Gallery = [
  new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Image/Alumni_28072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Image/Alumni2_28072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Image/Alumni3_28072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Image/Alumni4_28072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Alumni Talk/Image/Alumni5_28072023.jpeg', import.meta.url).href,
];
const codingCompetition2023Poster = new URL('../assets/Events/2023_ODD SEM/INTRA-DEPARTMENTAL CODING COMPETITON/photo1695629530.jpeg', import.meta.url).href;
const codingCompetition2023Gallery = [
  new URL('../assets/Events/2023_ODD SEM/INTRA-DEPARTMENTAL CODING COMPETITON/WhatsApp Image 2023-10-09 at 5.09.23 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INTRA-DEPARTMENTAL CODING COMPETITON/WhatsApp Image 2023-10-09 at 5.09.23 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INTRA-DEPARTMENTAL CODING COMPETITON/WhatsApp Image 2023-10-09 at 5.09.23 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INTRA-DEPARTMENTAL CODING COMPETITON/WhatsApp Image 2023-10-09 at 5.09.24 PM.jpeg', import.meta.url).href,
];
const invitedTalk2023OddPoster1 = new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/Flyer_08092023.png', import.meta.url).href;
const invitedTalk2023OddGallery1 = [
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/WhatsApp Image 2023-09-20 at 9.48.04 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/WhatsApp Image 2023-09-20 at 9.48.05 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/WhatsApp Image 2023-09-20 at 9.48.05 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/WhatsApp Image 2023-09-20 at 9.48.06 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/08_09_2023/WhatsApp Image 2023-09-20 at 9.48.06 AM.jpeg', import.meta.url).href,
];
const invitedTalk2023OddPoster2 = new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/Flyer_Tanmoy Karmakar.png', import.meta.url).href;
const invitedTalk2023OddGallery2 = [
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.39 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.39 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.40 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.40 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.42 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.42 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/25_08_2023/IMAGE/WhatsApp Image 2023-09-07 at 10.57.43 AM.jpeg', import.meta.url).href,
];
const invitedTalk2023OddPoster3 = new URL('../assets/Events/2023_ODD SEM/INVITED TALK/29_09_2023/SOUVEEK_FLYER (1).png', import.meta.url).href;
const invitedTalk2023OddGallery3 = [
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/29_09_2023/WhatsApp Image 2023-10-09 at 10.37.22 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/29_09_2023/WhatsApp Image 2023-10-09 at 10.37.22 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/29_09_2023/WhatsApp Image 2023-10-09 at 10.37.23 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/INVITED TALK/29_09_2023/WhatsApp Image 2023-10-09 at 10.37.26 AM.jpeg', import.meta.url).href,
];
const posterCompetitionOdd2023Poster = new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-09-22 at 9.36.24 AM.jpeg', import.meta.url).href;
const posterCompetitionOdd2023Gallery = [
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-09-22 at 9.36.24 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-10-09 at 5.21.57 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-10-09 at 5.21.57 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-10-09 at 5.21.58 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-10-09 at 5.21.59 PM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/POSTER COMPETION/WhatsApp Image 2023-10-09 at 5.22.00 PM (1).jpeg', import.meta.url).href,
];
const prizeDistributionOdd2023Poster = new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.41 AM (1).jpeg', import.meta.url).href;
const prizeDistributionOdd2023Gallery = [
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.41 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.41 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.42 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.42 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.43 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.43 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.45 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.46 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.46 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.46 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.47 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.47 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.48 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Prize Distribution/WhatsApp Image 2023-12-11 at 11.31.49 AM.jpeg', import.meta.url).href,
];
const technicalDebate2023Poster1 = new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Debate_Flyer_10082023.jpeg', import.meta.url).href;
const technicalDebate2023Gallery1 = [
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate1_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate2_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate3_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate4_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate5_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate6_10082023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/10-08-2023/Image/debate7_10082023.jpeg', import.meta.url).href,
];
const technicalDebate2023Poster2 = new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Debate_Flyer_27072023.jpeg', import.meta.url).href;
const technicalDebate2023Gallery2 = [
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate1_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate2_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate3_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate4_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate5_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate6_27072023.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical Debate Competition/27-07-2023/Image/Debate7_27072023.jpeg', import.meta.url).href,
];
const technicalQuiz2023Poster1 = new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Quiz_finale_Flyer.jpeg', import.meta.url).href;
const technicalQuiz2023Gallery1 = [
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Image/WhatsApp Image 2023-10-09 at 4.19.39 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Image/WhatsApp Image 2023-10-09 at 4.19.39 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Image/WhatsApp Image 2023-10-09 at 4.19.40 PM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Image/WhatsApp Image 2023-10-09 at 4.19.40 PM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/05_09_2023/Image/WhatsApp Image 2023-10-09 at 4.19.41 PM.jpeg', import.meta.url).href,
];
const technicalQuiz2023Poster2 = new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Quiz_290823_Flyer.jpeg', import.meta.url).href;
const technicalQuiz2023Gallery2 = [
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_43431PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_43638PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_43659PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_52022PMByGPSMapCamera (1).jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_52022PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_52034PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/20230829_52035PMByGPSMapCamera.jpg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 10.57.12 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 10.57.13 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 10.57.13 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 10.57.14 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 10.57.14 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Technical QUIZ competition/29_08_2023/Image/WhatsApp Image 2023-09-07 at 11.34.16 AM.jpeg', import.meta.url).href,
];
const virtualTourOdd2023Poster1 = new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/VT_01092023_Flyer.jpeg', import.meta.url).href;
const virtualTourOdd2023Gallery1 = [
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/Image/WhatsApp Image 2023-09-07 at 10.55.36 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/Image/WhatsApp Image 2023-09-07 at 10.55.37 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/Image/WhatsApp Image 2023-09-07 at 10.55.38 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/Image/WhatsApp Image 2023-09-07 at 10.55.38 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/01_09_2023/Image/WhatsApp Image 2023-09-07 at 10.55.58 AM.jpeg', import.meta.url).href,
];
const virtualTourOdd2023Poster2 = new URL('../assets/Events/2023_ODD SEM/Virtual Tour/06_10_2023/Virtual tour_06102023.png', import.meta.url).href;
const virtualTourOdd2023Gallery2 = [
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/06_10_2023/WhatsApp Image 2023-10-09 at 10.38.02 AM.jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/06_10_2023/WhatsApp Image 2023-10-09 at 10.38.03 AM (1).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/06_10_2023/WhatsApp Image 2023-10-09 at 10.38.03 AM (2).jpeg', import.meta.url).href,
  new URL('../assets/Events/2023_ODD SEM/Virtual Tour/06_10_2023/WhatsApp Image 2023-10-09 at 10.38.03 AM.jpeg', import.meta.url).href,
];

// Sample event data for each year
export const eventsData = {
  2021: {
    oddSem: [
      {
        id: 'alumni-talk-17-09-2021',
        heading: 'Alumni Talks',
        date: '17-09-2021',
        mode: 'Online',
        description: 'Department alumni shared career experiences and research journeys with CST & CSIT students.',
        poster: alumniTalkPoster,
        gallery: [alumniTalkScreenshot],
      },
      {
        id: 'industry-talk-02-10-2021',
        heading: 'Industry Talk',
        date: '02-10-2021',
        mode: 'Offline',
        description: 'First industry talk covering emerging technology trends and practical insights from industry experts.',
        poster: industryTalkPoster1,
        gallery: [],
      },
      {
        id: 'industry-talk-09-10-2021',
        heading: 'Industry Talk',
        date: '09-10-2021',
        mode: 'Offline',
        description: 'Second industry talk with deeper technical discussion and photo highlights.',
        poster: industryTalkPoster2,
        gallery: [industryTalkScreenshot],
      },
    ],
  },
  2022: {
    evenSem: [
      {
        id: 'industry-talk-01-04-2022',
        heading: 'Industry Talk',
        date: '01-04-2022',
        mode: 'Online',
        description: 'The Department of CST & CSIT organized a panel discussion on Corporate Success Code for the students where our key speaker was Mr. Shantanu Mukhopadhyay, Senior Financial Analyst, Arcesium.',
        poster: industryTalk2022Poster,
        gallery: industryTalk2022Gallery,
      },
      {
        id: 'alumni-talk-08-04-2022',
        heading: 'Alumni Talk',
        date: '08-04-2022',
        mode: 'Online',
        description: 'An alumni Talk was organized by the Department of CST & CSIT where our notable alumni was Mr.Kushankur Ghosh, Department of Computing Science, University of Alberta Edmonton, Canada who enlightened the session on “A journey: Campus to Research World"',
        poster: alumniTalk2022Poster,
        gallery: alumniTalk2022Gallery,
      },
      {
        id: 'poster-competition-12-04-2022',
        heading: 'Poster Competition',
        date: '12-04-2022',
        mode: 'Offline',
        description: 'The Department of CST & CSIT organized a departmental poster competition for the students of CST & CSIT based on the topic “Recent Trends in Technology”.The students showcased their innovative as well as technical mindset and made beautiful posters on various technologies making the event a successful one.',
        poster: posterCompetition2022Poster,
        gallery: posterCompetition2022Gallery,
      },
    ],
    oddSem: [
      {
        id: 'technical-talk-03-08-2022',
        heading: 'Technical Talk',
        date: '03-08-2022',
        mode: 'Online',
        description: 'An online Technical Talk was organised by the department of CST & CSIT on the topic “A Friendly Introduction to Signal and Image Processing” which was conducted by Prof. Dr. Debangshu Dey,Associate Professor from Department of Electrical Engineering of Jadavpur University.',
        poster: technicalTalk3AugPoster,
        gallery: technicalTalk3AugGallery,
      },
      {
        id: 'technical-talk-20-08-2022',
        heading: 'Technical Talk',
        date: '20-08-2022',
        mode: 'Online',
        description: 'A technical talk was organized by the Department of CST & CSIT to introduce students to advanced computing topics and research opportunities.',
        poster: technicalTalk20AugPoster,
        gallery: [],
      },
      {
        id: 'virtual-tour-26-08-2022',
        heading: 'Virtual Tour',
        date: '26-08-2022',
        mode: 'Online',
        description: 'An exciting virtual tour was organised by the Department of CST & CSIT on “Building Augmented Reality Experiences with Unity3D”.',
        poster: virtualTourPoster,
        gallery: virtualTourGallery,
      },
      {
        id: 'distinguished-lecture-07-09-2022',
        heading: 'Distinguished Lecture',
        date: '07-09-2022',
        mode: 'Online',
        description: 'A Distinguished Lecture on the topic ‘Cluster Analysis in Data Mining:Applications,Methods and Requirements’ was organised by the Department of CST & CSIT where our key speaker was Dr.Sumana Kundu,Associate Professor and Head of the Department of CSE(Data Mining),Haldia Institute of Technology',
        poster: distinguishedLecture2022Poster1,
        gallery: distinguishedLecture2022Gallery1,
      },
      {
        id: 'poster-competition-09-09-2022',
        heading: 'Poster Competition',
        date: '09-09-2022',
        mode: 'Offline',
        description: 'The Department of CST & CSIT organized a departmental poster competition for the students of CST & CSIT based on the topic “Recent Trends in Technology”.The students showcased their innovative as well as technical mindset and made beautiful posters on various technologies making the event a successful one.',
        poster: posterCompetitionOddPoster,
        gallery: posterCompetitionOddGallery,
      },
      {
        id: 'distinguished-lecture-15-09-2022',
        heading: 'Distinguished Lecture',
        date: '15-09-2022',
        mode: 'Online',
        description: 'A Distinguished Lecture on the topic ‘Fundamentals of Machine Learning Techniques and Applications’ was organised by the Department of CST & CSIT where our key speaker was Prof. (Dr.) Ganapati Panda,Ex-Deputy Director,IIT Bhubaneshwar.',
        poster: distinguishedLecture2022Poster2,
        gallery: distinguishedLecture2022Gallery2,
      },
      {
        id: 'invited-lecture-28-10-2022',
        heading: 'Invited Lecture',
        date: '28-10-2022',
        mode: 'Online',
        description: 'An invited lecture session was organized by the Department of CST & CSIT based on the topic “Build your career as a software developer” where our eminent speaker of the session was Mr.Sagar Patidar,Founder and CEO of Primathon.',
        poster: invitedLecture2022Poster,
        gallery: invitedLecture2022Gallery,
      },
      {
        id: 'prize-distribution-14-11-2022',
        heading: 'Prize Distribution Ceremony',
        date: '14-11-2022',
        mode: 'Offline',
        description: 'The semester prize distribution ceremony of the department was organized in which the students who were the winners of various departmental events that happened throughout the semester were awarded the prizes by our respected faculty members and Head of the Department,CST & CSIT.',
        poster: prizeDistribution2022Poster,
        gallery: prizeDistribution2022Gallery,
      },
    ],
  },
  2023: {
    evenSem: [
      {
        id: 'invited-talk-03-02-2023',
        heading: 'Invited Talk',
        date: '03-02-2023',
        mode: 'Online',
        description: 'Invited talk event with expert speakers sharing industry and research insights.',
        poster: invitedTalk2023Poster1,
        gallery: invitedTalk2023Gallery1,
      },
      {
        id: 'invited-talk-15-02-2023',
        heading: 'Invited Talk',
        date: '15-02-2023',
        mode: 'Online',
        description: 'Invited talk session focused on contemporary technology topics and student interaction.',
        poster: invitedTalk2023Poster2,
        gallery: invitedTalk2023Gallery2,
      },
      {
        id: 'invited-talk-24-02-2023',
        heading: 'Invited Talk',
        date: '24-02-2023',
        mode: 'Online',
        description: 'An industry lecture event with guest speakers and photo highlights.',
        poster: invitedTalk2023Poster3,
        gallery: invitedTalk2023Gallery3,
      },
      {
        id: 'invited-talk-24-03-2023',
        heading: 'Invited Talk',
        date: '24-03-2023',
        mode: 'Online',
        description: 'Invited lecture closing the semester with expert presentations and student engagement.',
        poster: invitedTalk2023Poster4,
        gallery: invitedTalk2023Gallery4,
      },
      {
        id: 'poster-competition-15-03-2023',
        heading: 'Poster Competition',
        date: 'March 15, 2023',
        mode: 'Offline',
        description: 'Department poster competition showcasing student creativity and technical research.',
        poster: posterCompetition2023Poster,
        gallery: posterCompetition2023Gallery,
      },
      {
        id: 'prize-distribution-28-04-2023',
        heading: 'Prize Distribution',
        date: 'April 28, 2023',
        mode: 'Offline',
        description: 'Prize distribution ceremony celebrating achievements from semester events.',
        poster: prizeDistribution2023Poster,
        gallery: prizeDistribution2023Gallery,
      },
      {
        id: 'project-competition-2023',
        heading: 'Project Competition',
        date: 'March 2023',
        mode: 'Offline',
        description: 'Project competition featuring student-developed technical solutions and prototypes.',
        poster: projectCompetition2023Poster,
        gallery: projectCompetition2023Gallery,
      },
      {
        id: 'virtual-tour-03-03-2023',
        heading: 'Virtual Tour',
        date: '03-03-2023',
        mode: 'Online',
        description: 'Virtual tour event showing immersive campus experiences and technology demonstrations.',
        poster: virtualTour2023Poster1,
        gallery: virtualTour2023Gallery1,
      },
      {
        id: 'virtual-tour-17-03-2023',
        heading: 'Virtual Tour',
        date: '17-03-2023',
        mode: 'Online',
        description: 'Second virtual tour session with student showcases and immersive multimedia.',
        poster: virtualTour2023Poster3,
        gallery: virtualTour2023Gallery3,
      },
      {
        id: 'virtual-tour-11-04-2023',
        heading: 'Virtual Tour',
        date: '11-04-2023',
        mode: 'Online',
        description: 'Virtual tour with exploration of computing applications across departments.',
        poster: virtualTour2023Poster2,
        gallery: virtualTour2023Gallery2,
      },
      {
        id: 'workshop-27-03-2023',
        heading: 'Workshop Series',
        date: 'March 27-31, 2023',
        mode: 'Offline',
        description: 'Workshop series covering practical skills, tools, and student project development.',
        poster: workshop2023Poster,
        gallery: workshop2023Gallery,
      },
    ],
    oddSem: [
      {
        id: 'alumni-talk-28-07-2023',
        heading: 'Alumni Talk',
        date: '28-07-2023',
        mode: 'Offline',
        description: 'Alumni talk sharing career stories, research experiences, and guidance for students.',
        poster: alumniTalk2023Poster,
        gallery: alumniTalk2023Gallery,
      },
      {
        id: 'intra-coding-09-10-2023',
        heading: 'Intra-Departmental Coding Competition',
        date: 'October 9, 2023',
        mode: 'Offline',
        description: 'Coding competition between department participants testing logic and teamwork.',
        poster: codingCompetition2023Poster,
        gallery: codingCompetition2023Gallery,
      },
      {
        id: 'invited-talk-25-08-2023',
        heading: 'Invited Talk',
        date: '25-08-2023',
        mode: 'Online',
        description: 'Invited talk event covering emerging technical topics and research insights.',
        poster: invitedTalk2023OddPoster2,
        gallery: invitedTalk2023OddGallery2,
      },
      {
        id: 'invited-talk-08-09-2023',
        heading: 'Invited Talk',
        date: '08-09-2023',
        mode: 'Offline',
        description: 'Invited talk on current trends in industry and academic computing.',
        poster: invitedTalk2023OddPoster1,
        gallery: invitedTalk2023OddGallery1,
      },
      {
        id: 'invited-talk-29-09-2023',
        heading: 'Invited Talk',
        date: '29-09-2023',
        mode: 'Offline',
        description: 'Invited lecture with guest speakers and student Q&A on technology themes.',
        poster: invitedTalk2023OddPoster3,
        gallery: invitedTalk2023OddGallery3,
      },
      {
        id: 'poster-competition-22-09-2023',
        heading: 'Poster Competition',
        date: 'September 22, 2023',
        mode: 'Offline',
        description: 'Poster competition showcasing departmental student research and innovation.',
        poster: posterCompetitionOdd2023Poster,
        gallery: posterCompetitionOdd2023Gallery,
      },
      {
        id: 'prize-distribution-11-12-2023',
        heading: 'Prize Distribution',
        date: 'December 11, 2023',
        mode: 'Offline',
        description: 'Prize distribution ceremony honoring winners across department events.',
        poster: prizeDistributionOdd2023Poster,
        gallery: prizeDistributionOdd2023Gallery,
      },
      {
        id: 'technical-debate-27-07-2023',
        heading: 'Technical Debate Competition',
        date: '27-07-2023',
        mode: 'Offline',
        description: 'Debate competition on technical issues, teamwork, and persuasive communication.',
        poster: technicalDebate2023Poster2,
        gallery: technicalDebate2023Gallery2,
      },
      {
        id: 'technical-debate-10-08-2023',
        heading: 'Technical Debate Competition',
        date: '10-08-2023',
        mode: 'Offline',
        description: 'Second debate competition session with expanded student participation.',
        poster: technicalDebate2023Poster1,
        gallery: technicalDebate2023Gallery1,
      },
      {
        id: 'technical-quiz-29-08-2023',
        heading: 'Technical Quiz Competition',
        date: '29-08-2023',
        mode: 'Offline',
        description: 'Technical quiz competition testing knowledge of computing and engineering topics.',
        poster: technicalQuiz2023Poster2,
        gallery: technicalQuiz2023Gallery2,
      },
      {
        id: 'technical-quiz-05-09-2023',
        heading: 'Technical Quiz Competition',
        date: '05-09-2023',
        mode: 'Offline',
        description: 'Quiz finale with rapid challenge rounds and team competition.',
        poster: technicalQuiz2023Poster1,
        gallery: technicalQuiz2023Gallery1,
      },
      {
        id: 'virtual-tour-01-09-2023',
        heading: 'Virtual Tour',
        date: '01-09-2023',
        mode: 'Online',
        description: 'Virtual tour event showcasing immersive student projects and digital experiences.',
        poster: virtualTourOdd2023Poster1,
        gallery: virtualTourOdd2023Gallery1,
      },
      {
        id: 'virtual-tour-06-10-2023',
        heading: 'Virtual Tour',
        date: '06-10-2023',
        mode: 'Online',
        description: 'Virtual tour concluding the semester with visual showcases and demonstrations.',
        poster: virtualTourOdd2023Poster2,
        gallery: virtualTourOdd2023Gallery2,
      },
    ],
  },
  2024: {
    evenSem: [
      {
        id: 'technical-essay-writing-30-01-2024',
        heading: 'Technical Essay Writing Competition',
        date: '30-01-2024',
        mode: 'Offline',
        description: 'Technical essay writing competition encouraging students to explore current trends and research topics.',
        poster: technicalEssay2024Poster,
        gallery: technicalEssay2024Gallery,
      },
      {
        id: 'virtual-tour-08-02-2024',
        heading: 'Virtual Tour',
        date: '08-02-2024',
        mode: 'Online',
        description: 'Virtual tour event featuring immersive campus and department showcases.',
        poster: virtualTour2024Poster1,
        gallery: virtualTour2024Gallery1,
      },
      {
        id: 'alumni-talk-09-02-2024',
        heading: 'Alumni Talk',
        date: '09-02-2024',
        mode: 'Online',
        description: 'Alumni talk where former students shared career insights and professional experiences.',
        poster: alumniTalk2024Poster1,
        gallery: alumniTalk2024Gallery1,
      },
      {
        id: 'invited-talk-19-03-2024',
        heading: 'Invited Talk',
        date: '19-03-2024',
        mode: 'Online',
        description: 'Invited talk by guest speakers on contemporary technology and research themes.',
        poster: invitedTalk2024Poster,
        gallery: invitedTalk2024Gallery,
      },
      {
        id: 'alumni-talk-18-03-2024',
        heading: 'Alumni Talk',
        date: '18-03-2024',
        mode: 'Online',
        description: 'Second alumni talk session connecting current students with alumni professionals.',
        poster: alumniTalk2024Poster2,
        gallery: alumniTalk2024Gallery2,
      },
      {
        id: 'poster-competition-02-03-2024',
        heading: 'Poster Competition',
        date: '02-03-2024',
        mode: 'Offline',
        description: 'Poster competition highlighting students’ creative and technical communication skills.',
        poster: posterCompetition2024Poster,
        gallery: posterCompetition2024Gallery,
      },
      {
        id: 'project-competition-02-03-2024',
        heading: 'Project Competition',
        date: '02-03-2024',
        mode: 'Offline',
        description: 'Project competition featuring student technical projects and prototypes.',
        poster: projectCompetition2024Poster,
        gallery: projectCompetition2024Gallery,
      },
      {
        id: 'workshop-28-03-2024',
        heading: 'Workshop',
        date: '28-03-2024',
        mode: 'Offline',
        description: 'Hands-on workshop focused on applied technical skills and practical learning.',
        poster: workshop2024Poster,
        gallery: workshop2024Gallery,
      },
      {
        id: 'virtual-tour-20-03-2024',
        heading: 'Virtual Tour',
        date: '20-03-2024',
        mode: 'Online',
        description: 'Virtual tour showcasing student work and digital media projects.',
        poster: virtualTour2024Poster2,
        gallery: virtualTour2024Gallery2,
      },
      {
        id: 'virtual-tour-28-03-2024',
        heading: 'Virtual Tour',
        date: '28-03-2024',
        mode: 'Online',
        description: 'Virtual tour concluding the semester with final demos and presentations.',
        poster: virtualTour2024Poster3,
        gallery: virtualTour2024Gallery3,
      },
      {
        id: 'prize-distribution-28-05-2024',
        heading: 'Prize Distribution',
        date: '28-05-2024',
        mode: 'Offline',
        description: 'Prize distribution ceremony recognizing outstanding event winners and student achievements.',
        poster: prizeDistribution2024Poster,
        gallery: prizeDistribution2024Gallery,
      },
    ],
    oddSem: [
      {
        id: 'virtual-tour-19-07-2024',
        heading: 'Virtual Tour',
        date: '19-07-2024',
        mode: 'Online',
        description: 'Virtual tour event presenting department facilities and student work.',
        poster: virtualTourOdd2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/VIRTUAL TOUR_19072024/WhatsApp Image 2024-07-19 at 4.56.10 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/VIRTUAL TOUR_19072024/WhatsApp Image 2024-07-19 at 4.56.11 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/VIRTUAL TOUR_19072024/WhatsApp Image 2024-07-19 at 4.56.12 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/VIRTUAL TOUR_19072024/WhatsApp Image 2024-07-19 at 4.56.12 PM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'alumni-talk-14-08-2024',
        heading: 'Alumni Talk',
        date: '14-08-2024',
        mode: 'Offline',
        description: 'Alumni talk with industry experts sharing career advice and inspiration.',
        poster: alumniTalkOdd2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/ALUMNI TALK_14082024/WhatsApp Image 2024-08-14 at 10.19.27 AM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'technical-debate-13-08-2024',
        heading: 'Technical Debate Competition',
        date: '13-14-08-2024',
        mode: 'Offline',
        description: 'Technical debate competition with teams discussing current computing topics.',
        poster: technicalDebate2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-13 at 12.51.38 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-19 at 10.27.42 AM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-19 at 10.27.42 AM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-19 at 10.27.43 AM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-19 at 11.04.20 AM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL DEBATE_13082024 AND 14082024/WhatsApp Image 2024-08-19 at 11.04.21 AM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'quiz-competition-20-08-2024',
        heading: 'Quiz Competition',
        date: '20-08-2024',
        mode: 'Offline',
        description: 'Quiz competition testing student knowledge across technical subjects.',
        poster: quizCompetition2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-20 at 12.23.08 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.16 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.17 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.18 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.19 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.19 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/QUIZ COMPETITION_20082024/WhatsApp Image 2024-08-21 at 12.03.20 PM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'tree-plantation-15-08-2024',
        heading: 'Tree Plantation Project',
        date: '15-08-2024',
        mode: 'Offline',
        description: 'Tree plantation project organized to celebrate Independence Day and promote sustainability.',
        poster: treePlantation2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.14 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.17 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.18 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.18 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.19 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.20 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.21 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.22 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.23 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/Tree Plantation Project on Independence Day at UEM Kolkata_15082024/WhatsApp Image 2024-08-19 at 2.56.24 PM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'poster-competition-16-09-2024',
        heading: 'Poster Competition',
        date: '16-09-2024',
        mode: 'Offline',
        description: 'Poster competition featuring creative technology posters by students.',
        poster: posterCompetitionOdd2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/POSTER COMPETITION_16092024/WhatsApp Image 2024-10-04 at 5.33.41 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/POSTER COMPETITION_16092024/WhatsApp Image 2024-10-04 at 5.33.41 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/POSTER COMPETITION_16092024/WhatsApp Image 2024-10-04 at 5.33.43 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/POSTER COMPETITION_16092024/WhatsApp Image 2024-10-18 at 12.17.44 PM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'project-competition-25-09-2024',
        heading: 'Project Competition',
        date: '25-09-2024',
        mode: 'Offline',
        description: 'Project competition presenting student projects and demonstrations.',
        poster: projectCompetitionOdd2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.19.58 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.20.00 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.20.01 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.20.03 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 5.20.03 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/PROJECT COMPETITION_25.09.2024/WhatsApp Image 2024-10-01 at 9.38.52 AM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'industry-talk-27-09-2024',
        heading: 'Industry Talk',
        date: '27-09-2024',
        mode: 'Offline',
        description: 'Industry talk with practical insights on current technology and career pathways.',
        poster: industryTalk2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.34 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.34 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.36 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.36 PM (2).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.37 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.38 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INDUSTRY TALK_27.09.2024/WhatsApp Image 2024-10-04 at 4.36.39 PM (1).jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'technical-writing-19-09-2024',
        heading: 'Technical Writing Competition',
        date: '19-09-2024',
        mode: 'Offline',
        description: 'Technical writing competition encouraging students to communicate technical ideas clearly.',
        poster: technicalWriting2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.06 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.21 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.22 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.23 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/TECHNICAL WRITING COMPETITION_19092024/WhatsApp Image 2024-09-19 at 5.49.23 PM.jpeg', import.meta.url).href,
        ],
      },
      {
        id: 'invited-talk-03-10-2024',
        heading: 'Invited Talk',
        date: '03-10-2024',
        mode: 'Offline',
        description: 'Invited talk featuring expert speakers and student interaction.',
        poster: invitedTalkOdd2024Poster,
        gallery: [
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.05 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.06 PM (1).jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.06 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.07 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 5.44.08 PM.jpeg', import.meta.url).href,
          new URL('../assets/Events/2024_ODD SEM/INVITED TALK_3.10.2024/WhatsApp Image 2024-10-03 at 8.43.34 AM.jpeg', import.meta.url).href,
        ],
      },
    ],
  },
  2025: {
    evenSem: [
      {
        id: 'alumni-talk-07-03-2025',
        heading: 'Alumni Talk',
        date: '07-03-2025',
        mode: 'Offline',
        description: 'Alumni talk featuring former students and industry mentors sharing career insights.',
        poster: alumniTalk2025Poster,
        gallery: alumniTalk2025Gallery,
      },
      {
        id: 'code-a-thrive-25-04-2025',
        heading: 'Code-A-Thrive',
        date: '25-04-2025',
        mode: 'Offline',
        description: 'Coding challenge event where students solve technical problems and build prototypes.',
        poster: codeAThrive2025Poster,
        gallery: codeAThrive2025Gallery,
      },
      {
        id: 'invited-talk-25-04-2025',
        heading: 'Invited Talk',
        date: '25-04-2025',
        mode: 'Offline',
        description: 'Invited lecture on technology trends and career development by guest experts.',
        poster: invitedTalk2025Poster,
        gallery: invitedTalk2025Gallery,
      },
      {
        id: 'poster-competition-07-03-2025',
        heading: 'Poster Competition',
        date: '07-03-2025',
        mode: 'Offline',
        description: 'Poster competition highlighting student creativity on technology and innovation themes.',
        poster: posterCompetition2025Poster,
        gallery: posterCompetition2025Gallery,
      },
      {
        id: 'prize-distribution-25-04-2025',
        heading: 'Prize Distribution',
        date: '25-04-2025',
        mode: 'Offline',
        description: 'Prize distribution ceremony celebrating winners from department events and competitions.',
        poster: prizeDistribution2025Poster,
        gallery: prizeDistribution2025Gallery,
      },
      {
        id: 'project-competition-25-04-2025',
        heading: 'Project Competition',
        date: '25-04-2025',
        mode: 'Offline',
        description: 'Project competition presenting student research projects and engineering prototypes.',
        poster: projectCompetition2025Poster,
        gallery: projectCompetition2025Gallery,
      },
      {
        id: 'technical-essay-writing-07-03-2025',
        heading: 'Technical Essay Writing',
        date: '07-03-2025',
        mode: 'Offline',
        description: 'Technical essay writing competition promoting clear communication of technical ideas.',
        poster: technicalEssay2025Poster,
        gallery: technicalEssay2025Gallery,
      },
      {
        id: 'virtual-tour-07-03-2025',
        heading: 'Virtual Tour',
        date: '07-03-2025',
        mode: 'Online',
        description: 'Virtual tour showcasing department facilities, labs, and student work.',
        poster: virtualTour2025Poster,
        gallery: virtualTour2025Gallery,
      },
      {
        id: 'workshop-2025',
        heading: 'Workshop',
        date: 'TBA',
        mode: 'Offline',
        description: 'Hands-on workshop focused on practical technology skills and collaborative learning.',
        poster: workshop2025Poster,
        gallery: workshop2025Gallery,
      },
    ],
    oddSem: [
      {
        id: 'alumni-talk-2025',
        heading: 'Alumni Talk',
        date: 'TBA',
        mode: 'Offline',
        description: 'Alumni talk event connecting current students with professionals and mentors.',
        poster: alumniTalkOdd2025Poster,
        gallery: alumniTalkOdd2025Gallery,
      },
      {
        id: 'coding-competition-01-09-2025',
        heading: 'Coding Competition',
        date: '01-09-2025',
        mode: 'Offline',
        description: 'Coding competition testing problem-solving and programming skills.',
        poster: codingCompetition2025Poster,
        gallery: codingCompetition2025Gallery,
      },
      {
        id: 'debate-competition-12-09-2025',
        heading: 'Debate Competition',
        date: '12-09-2025',
        mode: 'Offline',
        description: 'Debate competition focused on technology, ethics, and industry topics.',
        poster: debateCompetition2025Poster,
        gallery: debateCompetition2025Gallery,
      },
      {
        id: 'genai-challenge-12-08-2025',
        heading: 'GenAI Innovation Challenge',
        date: '12-08-2025',
        mode: 'Offline',
        description: 'Generative AI event exploring new tools, ideas, and applications.',
        poster: genAi2025Poster,
        gallery: genAi2025Gallery,
      },
      {
        id: 'invited-talk-26-09-2025',
        heading: 'Invited Talk',
        date: '26-09-2025',
        mode: 'Offline',
        description: 'Invited talk with expert speakers sharing practical insights and industry trends.',
        poster: invitedTalkOdd2025Poster,
        gallery: invitedTalkOdd2025Gallery,
      },
      {
        id: 'pixel-palette-10-09-2025',
        heading: 'Pixel Palette',
        date: '10-09-2025',
        mode: 'Offline',
        description: 'Digital art showcase and competition celebrating creative tech visualizations.',
        poster: pixelPalette2025Poster,
        gallery: pixelPalette2025Gallery,
      },
      {
        id: 'poster-competition-10-09-2025',
        heading: 'Poster Competition',
        date: '10-09-2025',
        mode: 'Offline',
        description: 'Poster competition highlighting student creativity and technical communication.',
        poster: posterOdd2025Poster,
        gallery: posterOdd2025Gallery,
      },
      {
        id: 'project-competition-04-09-2025',
        heading: 'Project Competition',
        date: '04-09-2025',
        mode: 'Offline',
        description: 'Project competition featuring student project demonstrations and prototypes.',
        poster: projectOdd2025Poster,
        gallery: projectOdd2025Gallery,
      },
      {
        id: 'virtual-tour-22-08-2025',
        heading: 'Virtual Tour',
        date: '22-08-2025',
        mode: 'Online',
        description: 'Virtual tour showcasing student projects and department resources.',
        poster: virtualTourOdd2025Poster,
        gallery: virtualTourOdd2025Gallery,
      },
    ],
  },
  2026: {
    evenSem: [
      {
        id: 'alumni-talk-14-01-2026',
        heading: 'Alumni Talk',
        date: '14-01-2026',
        mode: 'Offline',
        description: 'Alumni talk event connecting students with department alumni and industry mentors.',
        poster: alumniTalk2026Poster,
        gallery: alumniTalk2026Gallery,
      },
      {
        id: 'film-making-competition-17-03-2026',
        heading: 'Film Making Competition',
        date: '17-03-2026',
        mode: 'Offline',
        description: 'Film making competition highlighting student storytelling, creativity, and technical media skills.',
        poster: filmMaking2026Poster,
        gallery: filmMaking2026Gallery,
      },
      {
        id: 'invited-talk-31-01-2026',
        heading: 'Invited Talk',
        date: '31-01-2026',
        mode: 'Offline',
        description: 'Invited talk featuring expert speakers presenting on emerging technology and research topics.',
        poster: invitedTalk2026Poster,
        gallery: invitedTalk2026Gallery,
      },
      {
        id: 'poster-competition-19-02-2026',
        heading: 'Poster Competition',
        date: '19-02-2026',
        mode: 'Offline',
        description: 'Poster competition showcasing student innovation in technology and research communication.',
        poster: posterCompetition2026Poster,
        gallery: posterCompetition2026Gallery,
      },
      {
        id: 'technical-essay-writing-05-02-2026',
        heading: 'Technical Essay Writing',
        date: '05-02-2026',
        mode: 'Offline',
        description: 'Technical essay writing event encouraging students to express ideas on trending technological subjects.',
        poster: technicalEssay2026Poster,
        gallery: technicalEssay2026Gallery,
      },
      {
        id: 'virtual-tour-13-02-2026',
        heading: 'Virtual Tour',
        date: '13-02-2026',
        mode: 'Online',
        description: 'Virtual tour presenting department facilities, labs, and student achievements.',
        poster: virtualTour132026Poster,
        gallery: virtualTour132026Gallery,
      },
      {
        id: 'virtual-tour-02-03-2026',
        heading: 'Virtual Tour',
        date: '02-03-2026',
        mode: 'Online',
        description: 'Additional virtual tour with immersive highlights from campus events.',
        poster: virtualTour232026Poster,
        gallery: virtualTour232026Gallery,
      },
      {
        id: 'workshop-16-03-2026',
        heading: 'Workshop',
        date: '16-03-2026',
        mode: 'Offline',
        description: 'Hands-on workshop for practical learning, collaborative projects, and technical skill building.',
        poster: workshop2026Poster,
        gallery: workshop2026Gallery,
      },
    ],
    oddSem: [
      {
        heading: 'Coming Soon',
        date: 'TBA',
        mode: 'TBA',
        description: 'Stay tuned for exciting events in the odd semester of 2026. More details will be announced soon.',
      },
    ],
  },
};

const Events = () => {
  const { year } = useParams();
  const yearNum = parseInt(year);
  const yearData = eventsData[yearNum];

  if (!yearData) {
    return (
      <PageLayout>
        <section className="py-12 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Events for {year}
            </h1>
            <p className="text-muted-foreground">No events found for this year.</p>
          </div>
        </section>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <section className="py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionTitle 
            title={`Events ${year}`}
            subtitle="Explore the academic and co-curricular events organized by the department"
          />

          

          <div className="max-w-5xl mx-auto space-y-12">
            {/* Even Semester */}
            {yearData.evenSem && yearData.evenSem.length > 0 && (
            <div>
              <GlassCard className="mb-6" padding="p-4 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      Even Semester
                    </h2>
                    <p className="text-muted-foreground text-sm">January - June {year}</p>
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-6 pl-0 lg:pl-4">
                {yearData.evenSem.map((event, index) => (
                  <EventCard
                    key={index}
                    {...event}
                    imageUrl={event.poster}
                    linkTo={event.id ? `/events/${yearNum}/${event.id}` : undefined}
                  />
                ))}
              </div>
            </div>
            )}

            {/* Odd Semester */}
            {yearData.oddSem && yearData.oddSem.length > 0 && (
            <div>
              <GlassCard className="mb-6" padding="p-4 lg:p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/30 border border-secondary/40 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-serif font-bold text-foreground">
                      Odd Semester
                    </h2>
                    <p className="text-muted-foreground text-sm">July - December {year}</p>
                  </div>
                </div>
              </GlassCard>

              <div className="space-y-6 pl-0 lg:pl-4">
                {yearData.oddSem.map((event, index) => (
                  <EventCard
                    key={index}
                    {...event}
                    imageUrl={event.poster}
                    linkTo={event.id ? `/events/${yearNum}/${event.id}` : undefined}
                  />
                ))}
              </div>
            </div>
            )}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Events;
