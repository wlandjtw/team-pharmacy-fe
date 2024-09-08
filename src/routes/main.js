import useMain_kit from "../function/Main_function";

function Main(props){
    const on = props.on;
    const setOn = props.setOn;

    return(
        <div className="wrap">
            <div className='main_search_box shadow' onClick={()=>{
                if(on == ''){
                    setOn('on')
                } 
                else if(on == 'on') {
                    setOn('')
                }
            }}>
                <input id='main_search_bar' placeholder='검색할 지역을 입력해주세요.'/>
                <img className='main_search_icon' src='/img/search_icon2.png'></img>
            </div>
            <div className='main_content_box shadow'>
                <h2 className='pharmacy_explain'>검색하신 지역 근처의 약국들이에요!</h2>
                <div className='kakao_map'></div>
            </div>
            <div className={`main_detail ${on}`}>
                <span className="main_detail_bar"></span>
                <div className="main_detail_textBox">
                    <div className="pharmacy_info">
                        <h2 className="pharmacy_name">약국명</h2>
                        <p>주소 : </p>
                        <p>대표연락처 : </p>
                    </div>
                    <div className="pharmacy_time">
                        <h3 className="pharmacy_time_title">진료시간</h3>
                        <div className="pharmacy_time_line">
                            <span>월 : {}</span>
                            <span>화 : {}</span>
                        </div>
                        <div className="pharmacy_time_line">
                            <span>수 : {}</span>
                            <span>목 : {}</span>
                        </div>
                        <div className="pharmacy_time_line">
                            <span>금 : {}</span>
                            <span>토 : {}</span>
                        </div>
                        <div className="pharmacy_time_line">
                            <span>일 : {}</span>
                            <span>공휴일 : {}</span>
                        </div>
                    </div>
                    <div className="pharmacy_btn">
                        <button>길찾기</button>
                        <button>전화걸기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main;