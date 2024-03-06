function Food() {

    const foods = ['치킨', '피자', '햄버거', '회'];

    const cafe = {
        '아이스아메리카노': 2,
        '카페라떼(ice)': 1,
        '카페모카(ice)': 2,
        '모과쥬스': 1
    };

    return (
        <>
            <p>내가 좋아하는 음식은?</p>
            <ul>
                <li>라면</li>
                <li>김치</li>
                <li>김밥</li>
                <li>콜라</li>
                {foods.map(value => (
                            <li key={value}>{value}</li>
                ))}
                {foods.map((value,idx,) => (
                            <li key={value}>{idx}:{value}</li>
                ))}
            </ul>
            <p>커피 한잔~</p>
            <ul>
                {Object.keys(cafe).map(value => (
                            <li key={value}>{value} : {cafe[value]}잔</li>                            
                ))}
            </ul>
        </>
    );
}

export default Food;