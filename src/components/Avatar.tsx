export interface Props {
    imgSrc: string;
    altTxt: string;
  }

export default function Avatar({ imgSrc, altTxt}: Props) {
    return (
        <div className="avatar">
            <img className="avatar__image" src={imgSrc} alt={altTxt} />
        </div>
    )
}