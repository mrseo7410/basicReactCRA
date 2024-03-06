import './App.css';
import Bmi from './Bmi';
import Counter from './Counter';

// import Food from './Food';
// import JejuIsland from './JejuIsland';
import PhotoText from './PhotoText';
import PlusMul from './PlusMul';

function App() {

  // const name = "서정원";
  // const hobby = "Youtube";
  // const specialty = "유튭";
    
  // const css1 = {"color": "red", "background-color": "green"};
  // const css2 = {color: "blue", backgroundColor: "red"};

  // //속성의 값을 변수로 변경할 경우 전체만 가능(url="일부분" 불가능)
  // const url = "data:image/jpeg;base64,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";

  const phone = {
    "아이폰5s" : "상태좋은 5s!",
    "아이폰14" : "새것같은 14!",
    "아이폰15" : "미개봉 15!",
  }

  return (
    <div className="App">
      {/* <h1 className='big'>안녕하세요 {name} 입니다.</h1>
      <p>이름 : {name}</p>
      <p style={css1}>취미 : {hobby}</p>
      <p style={css2}>특기 : {specialty}</p>
      <img src={url} alt="커피"/> */}
      
      {/* <Food /> */}
      
      {/* <JejuIsland /> */}

      {/* <h1>🥕당근폰 팔아요🥕</h1>
      <PhotoText image="아이폰5s" label="상태좋은 5s!"/>
      {Object.keys(phone).map(value => (
        <PhotoText key={value} image={value} label={phone[value]}/>
      ))} */}

      {/* <Counter /> */}

      {/* <PlusMul /> */}

      <Bmi />

    </div>
  );
}

export default App;
