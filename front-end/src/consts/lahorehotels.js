import * as firebase from 'firebase';
export function addlahorehotels(lahoreHotel,addComplete) {
    firebase
    .firestore()
    .collection("lahorehotels")
     .add(lahoreHotel)
     .then((snapshot)=>{ 
        lahoreHotel.id=snapshot.id
         snapshot.set(lahoreHotel) 
     })
     .then(()=>addComplete(lahoreHotel))
     .catch((error)=>console.log(error))
}
export  async function getlahorehotels(lahoreHotelRetrived){
    var lahoreHotelList=[]
    var snapshot=await firebase
    .firestore()
    .collection("lahorehotels")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const lahoreHotelDoc=doc.data()
    lahoreHotelDoc.id=doc.id
    lahoreHotelList.push(lahoreHotelDoc)
})
lahoreHotelRetrived(lahoreHotelList)
}