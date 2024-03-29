import { personalInfo } from "../utility/Datas";
import { EmailIcon, FBIcon, InstaIcon, LocationIcon, PhoneIcon } from "../utility/Icons";
import Tooltip from "./Tooltip";

function Footer() {
    return (
        <footer id="conn" className="h-[40rem] w-full bg-ftbg bg-cover z-[-1]">
            <section className="fixed flex flex-col justify-center gap-[2vw] items-center top-[calc(100%-40rem)]
                                left-[50%] -translate-x-[50%] h-[40rem]  w-full backdrop-blur-md z-[1]
                                xsm:relative xmd:gap-8 xmd:top-[calc(100%-40rem)] xmd:h-[40rem]">
                
                <div className="flex flex-col items-center xsm:!gap-8 xmd:gap-[5vw] gap-10 mt-1">
                    <div className="flex flex-row items-center justify-center gap-8">
                        <a target="_blank" aria-label="Check my Instagram page" rel="noreferrer external" href="https://www.facebook.com/profile.php?id=100091972387797" className="relative group">
                            <FBIcon classes={"hover:scale-110 transition-all drop-shadow-[0px_5px_6px_#4444dd]"}/>
                            <Tooltip>Facebook</Tooltip>
                        </a>
                        <a target="_blank" aria-label="Check my Facebook page" rel="noreferrer external" href="https://www.instagram.com/gyemantkucko/" className="relative group">
                            <InstaIcon classes={"hover:scale-110 transition-all drop-shadow-[0px_5px_6px_#C13584]"}/>
                            <Tooltip>Instagram</Tooltip>
                        </a>
                    </div>

                    <div className="flex flex-col">
                        <div className="relative flex flex-row gap-2 items-center group">
                            <EmailIcon/>
                            <span className="italic select-text">{ personalInfo.email }</span>
                        </div>

                        <div className="relative group flex flex-row gap-2 items-center">
                            <PhoneIcon/>
                            <span className="italic select-text">{ personalInfo.phone }</span>
                        </div>

                        <div className="relative group flex flex-row gap-2 items-center">
                            <LocationIcon/>
                            <span className="italic select-text">{ personalInfo.location }</span>
                        </div>
                    </div>
                </div>

                <iframe 
                    title="Gyémánt kuckó a Google Maps-en" 
                    className="w-[600px] h-[300px] xmd:w-[80%] xsm:!w-full shadow-2xl shadow-slate-300 rounded-md group"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJJ5v58gfBQUcRROLTg4f8mcw&key=AIzaSyAx8doNzpjexsyC0WW2_PlBfUKWa_O3nNA"
                ></iframe>
            </section>
        </footer>
    );
}

export default Footer;