
// image, label은 프로퍼티
// PhotoText(image, label)과는 다름
function PhotoText({image, label}) {
    
    //지역변수
    const photo = require(`./assets/${image}.jpg`);

    return (
        <>
            <img src={photo} alt={label} width="200" />
            <br/>
            <span>{label}</span>
            <br/>
            <br/>
            <br/>
        </>
    );
}

export default PhotoText;