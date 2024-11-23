import Image from "next/image";

interface ProfileImgProps {
    containerStyles: string;
    imageStyles?: string;
    imgSrc: string
}

const ProfileImg = ({ containerStyles, imageStyles, imgSrc }: ProfileImgProps) => {
    return (
        <div className={`${containerStyles}`}>
            <Image src={imgSrc} className={`${imageStyles}`} fill priority alt="" />
        </div>
    );
}

export default ProfileImg;