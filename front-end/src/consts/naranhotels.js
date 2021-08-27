import * as firebase from 'firebase';
export function addnaranhotels(naranHotel,addComplete) {
    firebase
    .firestore()
    .collection("naranhotels")
     .add(naranHotel)
     .then((snapshot)=>{ 
        naranHotel.id=snapshot.id
         snapshot.set(naranHotel) 
     })
     .then(()=>addComplete(naranHotel))
     .catch((error)=>console.log(error))
}
export  async function getnaranhotels(naranHotelRetrived){
    var naranHotelList=[]
    var snapshot=await firebase
    .firestore()
    .collection("naranhotels")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const naranHotelDoc=doc.data()
    naranHotelDoc.id=doc.id
    naranHotelList.push(naranHotelDoc)
})
naranHotelRetrived(naranHotelList)
}