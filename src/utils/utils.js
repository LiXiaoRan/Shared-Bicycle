import { Select } from "antd";
import React from 'react'

const Option=Select.Option;

export default {
    /**
     * 格式化时间
     * @param {*} time 时间戳
     */
    formateDate(time){
        if (!time) {
            return '';
        }
        let date=new Date(time);
        return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()+" "+date.getHours()+" : "+date.getMinutes()+" : "+date.getSeconds();
    },

    getOptionList(data){
        if (!data) {
            return [];
        }
        let options = [<Option value="0" key="all_key">全部</Option>];
        data.map((item,i)=>{
            options.push(<Option value={item.id} key={item.id}>item.name</Option>)
        })
        return options;
    }   
}