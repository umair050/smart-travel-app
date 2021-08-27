import * as firebase from 'firebase';
export function addhunzahotels(hunzaHotel,addComplete) {
    firebase
    .firestore()
    .collection("hunzahotels")
     .add(hunzaHotel)
     .then((snapshot)=>{ 
        hunzaHotel.id=snapshot.id
         snapshot.set(hunzaHotel) 
     })
     .then(()=>addComplete(hunzaHotel))
     .catch((error)=>console.log(error))
}
export  async function gethunzahotels(hunzaHotelRetrived){
    var hunzaHotelList=[]
    var snapshot=await firebase
    .firestore()
    .collection("hunzahotels")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const hunzaHotelDoc=doc.data()
    hunzaHotelDoc.id=doc.id
    hunzaHotelList.push(hunzaHotelDoc)
})
hunzaHotelRetrived(hunzaHotelList)
}