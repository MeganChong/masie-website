import giveStudentsThumb from "../assests/thumbnails/GivingStudents.jpg";
import giveStudentsStep1 from "../assests/steps/giveSay/step1.jpg";
import giveStudentsStep2 from "../assests/steps/giveSay/step2.jpg";

export function photoInfo() {
    const giveStudentsSteps = [giveStudentsStep1, giveStudentsStep2];
    const photoMap = {
        "Giving Students a Say": {
            thumbnail: giveStudentsThumb,
            thumbnailWithBackground: giveStudentsThumb,
            backgroundColor: "rgb(245, 194, 66)",
            altText: "Giving Students a Say",
            process: giveStudentsSteps
        }
    };

    return photoMap;
}