class Utils {
    //método estático - chamamos sem criar uma instancia
    static dateFormat(date){

        return date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear()+' ' +date.getHours()+"h"+date.getMinutes();

    }


}