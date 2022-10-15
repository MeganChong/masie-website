// import introBox from '../assests/Intro Box.png';
// import boxGif from '../assests/boxes.gif';
// import summerGuide from '../assests/Summer Guide.jpg';
// import fivePractices from '../assests/FivePractices.jpg';
// import giveStudentsSay from '../assests/GivingStudentsSay.jpg';
// import minimalistGif from '../assests/minimalist.gif';
// import membershipAd from '../assests/Membership Ad Spread.jpg';
// import janCat from '../assests/Jan Catalog.jpg';
// import kids from '../assests/Kid Ads.jpg';
// import phoneGif from '../assests/mobileGif.gif';
// import sourceBook from '../assests/Sourcebook.gif';
// import fishballs from '../assests/Happiness.jpg';
// import flowerHead from '../assests/AprCatalog.jpg';

// import essential1 from '../assests/steps/essential/step1.jpg';
// import essential2 from '../assests/steps/essential/step2.jpg';
// import essential3 from '../assests/steps/essential/step3.jpg';

// import summerGuide1 from '../assests/steps/summerGuide/step1.jpg';
// import summerGuide2 from '../assests/steps/summerGuide/step2.jpg';
// import summerGuide3 from '../assests/steps/summerGuide/step3.jpg';

// import fivePractices1 from '../assests/steps/fivePractices/step1.jpg';
// import fivePractices2 from '../assests/steps/fivePractices/step2.jpg';
// import fivePractices3 from '../assests/steps/fivePractices/step3.jpg';

// import giveSay1 from '../assests/steps/giveSay/step1.jpg';
// import giveSay2 from '../assests/steps/giveSay/step2.jpg';

// import minimalist1 from '../assests/steps/minimalist/step1.jpg';
// import minimalist2 from '../assests/steps/minimalist/step2.jpg';
// import minimalist3 from '../assests/steps/minimalist/step3.jpg';

// import membership1 from '../assests/steps/membership/step1.jpg';
// import membership2 from '../assests/steps/membership/step2.jpg';
// import membership3 from '../assests/steps/membership/step3.jpg';
// import membership4 from '../assests/steps/membership/step4.jpg';

// import jan1 from '../assests/steps/janCat/step1.jpg';
// import jan2 from '../assests/steps/janCat/step2.jpg';

// import kids1 from '../assests/steps/kids/step1.jpg';
// import kids2 from '../assests/steps/kids/step2.jpg';
// import kids3 from '../assests/steps/kids/step3.jpg';

// import source1 from '../assests/steps/sourcebook/step1.jpg';
// import source2 from '../assests/steps/sourcebook/step2.jpg';
// import source3 from '../assests/steps/sourcebook/step3.jpg';

// import happy1 from '../assests/steps/happiness/step1.jpg';
// import happy2 from '../assests/steps/happiness/step2.jpg';
// import happy3 from '../assests/steps/happiness/step3.jpg';
// import happy4 from '../assests/steps/happiness/step4.jpg';

// import flower1 from '../assests/steps/flower/step1.jpg';
// import flower2 from '../assests/steps/flower/step2.jpg';

// import email1 from '../assests/steps/emails/step1.jpg';
// import email2 from '../assests/steps/emails/step2.jpg';
// import email3 from '../assests/steps/emails/step3.jpg';

// import fiveThumb from '../assests/thumbnails/5practices.jpg';
// import kidsThumb from '../assests/thumbnails/2018Membership.jpg';
// import sourceThumb from '../assests/thumbnails/2018Sourcebook.jpg';
// import membershipThumb from '../assests/thumbnails/2019Membership.jpg';
// import summerThumb from '../assests/thumbnails/2019SummerCat.jpg';
// import flowerThumb from '../assests/thumbnails/AprilCat.jpg';
// import essentailThumb from '../assests/thumbnails/Essential25.jpg';
// import givingThumb from '../assests/thumbnails/GivingStudents.jpg';
// import happyThumb from '../assests/thumbnails/Happiness.jpg';
// import minimalThumb from '../assests/thumbnails/MinimalistTeacher.jpg';
// import emailThumb from '../assests/thumbnails/RemembertheJoy.jpg';
// import traumaThumb from '../assests/thumbnails/TraumaCat.jpg';

// import details from '../projectDetails.json';

// const essentialProcess = [essential1, essential2, essential3];
// const summerGuideProcess = [summerGuide1, summerGuide2, summerGuide3];
// const fivePracticesProcess = [fivePractices1, fivePractices2, fivePractices3];
// const giveSayProcess = [giveSay1, giveSay2];
// const minimalistProcess = [minimalist1, minimalist2, minimalist3];
// const membershipProcess = [membership1, membership2, membership3, membership4];
// const janProcess = [jan1, jan2];
// const kidsProcess = [kids1, kids2, kids3];
// const sourcebookProcess = [source1, source2, source3];
// const happyProcess = [happy1, happy2, happy3, happy4];
// const flowerProcess = [flower1, flower2];
// const emailProcess = [email1, email2, email3];

// export function photoInfo() {
//     const photoMap = {
//         'introBox': introBox,
//         'boxGif': {
//             homeSrc: boxGif, 
//             interiorSrc: essentailThumb,
//             title: "The Essential 25", 
//             alt: details["The Essential 25"].altText,
//             steps: essentialProcess
//         },
//         'summerGuide': {
//             homeSrc: summerGuide, 
//             interiorSrc: summerThumb,
//             title: "Summer Guide", 
//             alt: details["Summer Guide"].altText, 
//             steps: summerGuideProcess
//         },
//         'fivePractices': {
//             homeSrc: fivePractices, 
//             interiorSrc: fiveThumb,
//             title: "Five Practices for Equity-Focused School Leadership", 
//             alt: details["Five Practices for Equity-Focused School Leadership"].altText,
//             steps: fivePracticesProcess
//         },
//         'giveStudents': {
//             homeSrc: giveStudentsSay, 
//             interiorSrc: givingThumb,
//             title: "Giving Students a Say", 
//             alt: details["Giving Students a Say"].altText,
//             steps: giveSayProcess
//         },
//         'minimalistGif': {
//             homeSrc: minimalistGif, 
//             interiorSrc: minimalThumb,
//             title: "The Minimalist Teacher", 
//             alt: details["The Minimalist Teacher"].altText,
//             steps: minimalistProcess
//         },
//         'membershipAd': {
//             homeSrc: membershipAd, 
//             interiorSrc: membershipThumb,
//             title: "Membership Product Ad Series", 
//             alt: details["Membership Product Ad Series"].altText,
//             steps: membershipProcess
//         },
//         'janCat': {
//             homeSrc: janCat, 
//             interiorSrc: traumaThumb,
//             title: "Trauma-Sensitive Schools and Classrooms Catalog", 
//             alt: details["Trauma-Sensitive Schools and Classrooms Catalog"].altText,
//             steps: janProcess
//         },
//         'kids': {
//             homeSrc: kids, 
//             interiorSrc: kidsThumb,
//             title: "Membership Ad Series", 
//             alt: details["Membership Ad Series"].altText,
//             steps: kidsProcess
//         },
//         'phoneGif': {
//             homeSrc: phoneGif,
//             interiorSrc: emailThumb,
//             title: "New Emails",
//             alt: details["New Emails"].altText,
//             steps: emailProcess
//         },
//         'sourceBook': {
//             homeSrc: sourceBook, 
//             interiorSrc: sourceThumb,
//             title: "Spring Sourcebook", 
//             alt: details["Spring Sourcebook"].altText,
//             steps: sourcebookProcess
//         },
//         'noodles': {
//             homeSrc: fishballs, 
//             interiorSrc: happyThumb,
//             title: "Happiness Cookbook", 
//             alt: details["Happiness Cookbook"].altText,
//             steps: happyProcess
//         },
//         'flowerHead': {
//             homeSrc: flowerHead, 
//             interiorSrc: flowerThumb,
//             title: "April Spring Catalog", 
//             alt: details["April Spring Catalog"].altText,
//             steps: flowerProcess
//         }
//     };
//     return photoMap;
// }

