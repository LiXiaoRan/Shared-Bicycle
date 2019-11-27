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
    }
}