import React from 'react';

import activeItem from '../actions/activeAction';

const Forecast = (props) => {
    const { data, unit,active, dispatch} = props;
    
    const itemFewActive={
        itemFewClass:"forecast__switch_0 switch-active",
        itemMoreClass:"forecast__switch_1",
        item:5};
    const itemMoreActive={
        itemFewClass:"forecast__switch_0",
        itemMoreClass:"forecast__switch_1 switch-active",
        item:10};

    const switchUnit =(u) =>{
        if (u==="C") {return "Celsius"}//swtich unit,set a var in object's property
        else {return "Fahrenheit"}
    }    
    const timestampToTime = (timestamp) =>{
        const dateObj = new Date(timestamp*1000); // ps, 必须是数字类型，不能是字符串, +运算符把字符串转化为数字，更兼容
        // const year = dateObj.getFullYear(); // 获取年，
        // const month =dateObj.getMonth() + 1 ;// 获取月，必须要加1，因为月份是从0开始计算的
        // const date = dateObj.getDate() ;// 获取日，记得区分getDay()方法是获取星期几的。
        // const day = dateObj.getDay();
        const hours = pad(dateObj.getHours());  // 获取时, pad函数用来补0
        const minutes =  pad(dateObj.getMinutes()) ;// 获取分
        // const seconds =  pad(dateObj.getSeconds()) ;// 获取秒
        
        // return year + '-' + month + '-' + date + ' ' + day +' '+ hours + ':' + minutes + ':' + seconds;
        return hours + ':' + minutes ;
    }
    const timestampToWeek = (timestamp) =>{
        const dateObj = new Date(timestamp*1000); // ps, 必须是数字类型，不能是字符串, +运算符把字符串转化为数字，更兼容
        const day = dateObj.getDay();       
        let week=" ";
        switch(day) 
            { 
            case 0:week="Sun";break; 
            case 1:week="Mon";break; 
            case 2:week="Tue";break; 
            case 3:week="Wen";break; 
            case 4:week="Thu";break; 
            case 5:week="Fri";break; 
            case 6:week="Sat";break; 
            default:week="Error" 
            } 
        return week;
    }
    const pad = (str) => {
        return +str >= 10 ? str : '0' + str;
    }
  
    return (
        <section className="weather-forecast">
            <div className="forecast__switch">
                <button onClick={() =>dispatch(activeItem(itemFewActive))} className={active.itemFewClass}>5 items</button>
                <button onClick={()=>dispatch(activeItem(itemMoreActive))} className={active.itemMoreClass}>10 items</button>
            </div>
            {
                data.forecastWeather.slice(0,active.item).map((element,index)=> {
                    return (
                        <div className="weather-forecast__row" key={index}>
                            <span className="weather-forecast__day">{timestampToWeek(element.time)}</span>
                            <span className="weather-forecast__icon">
                                <i className="weather-forecast__icon">{timestampToTime(element.time)}</i>
                            </span>
                            <span className="weather-forecast__high">{element[`min${switchUnit(unit)}`]} {unit}</span>
                            <span className="weather-forecast__low">{element[`max${switchUnit(unit)}`]} {unit}</span>
                        </div>
                    )
                    }
                )
            }
        </section>
    );
}

export default Forecast;