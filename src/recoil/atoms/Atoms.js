
import {atom} from 'recoil';

const initialcard={
    id:"",
    title:"",
    date:"",
    task:[
        {
            id:"",
            name:"",
            comments:"",
            date:"",
            cardName:"title",
        }
    ]
}


const  CardItem = atom({
    key:'card Array',
    default:[
        initialcard
    ]
});


export default CardItem;