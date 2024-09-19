import Image from "next/image";

interface ProfileImgProps {
    containerStyles: string;
    imgSrc: string
}

const ProfileImg = ({ containerStyles, imgSrc }: ProfileImgProps) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} fill priority alt="" />
        </div>
    );
}

export default ProfileImg;