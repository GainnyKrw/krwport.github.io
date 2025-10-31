const aboutIntro = ["Hello, my name is Gain. I am a first-year student at Mahidol University, Faculty of ICT. I am motivated to improve myself every day, passionate about technology, and ready to take on challenges to grow in the digital world.Hello, my name is Gain, and I am a student in 1st years of Mahidol Univercity Faculty of ICT. I am currently studying. Motivated and ambitious student with a track record of outstanding academic performance. leadership and commitment to learning, Proven ability to apply critical thinking skills in high pressure situation. Seeking leverage my abilities to contribute positively to the student community.",
    "สวัสดีครับ ผมชื่อเกน ปัจจุบันเป็นนักศึกษาชั้นปีที่หนึ่ง คณะ ICT มหาวิทยาลัยมหิดล ผมเป็นคนใฝ่เรียนรู้ มีความมุ่งมั่น และตั้งใจพัฒนาตัวเองอยู่เสมอ มีผลการเรียนที่ดี มีทักษะความเป็นผู้นำ และสนใจเรียนรู้เทคโนโลยีใหม่ ๆ อยู่ตลอด เป้าหมายของผมคือการนำความรู้และความสามารถไปพัฒนาตนเองและสร้างประโยชน์แก่สังคม พร้อมเติบโตเป็นบุคลากรด้าน ICT ที่มีคุณภาพ"];
const aboutName = ["Korawit (Gainny)","กรวิชญ์ (เกน)"];
const aboutSchool = ["Mahidol University","มหาวิทยาลัยมหิดล"];
const aboutProgram = ["Information and Communication Technology","เทคโนโลยีสารสนเทศและการสื่อสาร"];
const aboutAge = ["18 years","อายุ 18 ปี"];
const aboutHobby = ["I enjoy learning about emerging technologies, watching learning content, and playing sports."
    ,"ผมชอบเรียนรู้เทคโนโลยีใหม่ๆ ดูคอนเทนต์ความรู้ และเล่นกีฬา"];


 
 const LANGUAGE = {
    "EN":0,
    "TH":1
    
};
let myLanguage = LANGUAGE.EN;
    
function changeMessage()
{ // Open
    // Variable declaration
    var aboutIntroElement = document.getElementById('about-intro-p');
    var aboutNameElement = document.getElementById('about-intro-name');
    var aboutSchoolElement = document.getElementById('about-intro-school');
    var aboutProgramElement = document.getElementById('about-intro-program');
    var aboutAgeElement = document.getElementById('about-intro-age');
    var aboutHobbyElement = document.getElementById('about-intro-hobby');
    //ตรวจสอบว่าเป็นภาษาไทยไหม ?
    if( myLanguage === LANGUAGE.EN)
        {
            //เปลี่ยนเป็นภาษาeng
            myLanguage = LANGUAGE.TH;
        }else{
               
            myLanguage = LANGUAGE.EN;
        }
        aboutIntroElement.innerText = aboutIntro[myLanguage];
        aboutNameElement.innerText = aboutName[myLanguage];
        aboutSchoolElement.innerText = aboutSchool[myLanguage];
        aboutProgramElement.innerText = aboutProgram[myLanguage];
        aboutAgeElement.innerText = aboutAge[myLanguage];
        aboutHobbyElement.innerText = aboutHobby[myLanguage];

}