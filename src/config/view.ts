export class View{
    public static set(ex){
        const path = require('path');
        ex.set('view engine', 'ejs');
        ex.set('views', 'src/view');
    }
}