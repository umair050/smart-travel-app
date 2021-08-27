import * as firebase from 'firebase';
export function addpeshawarhotels(peshawarHotel,addComplete) {
    firebase
    .firestore()
    .collection("peshawarhotels")
     .add(peshawarHotel)
     .then((snapshot)=>{ 
        peshawarHotel.id=snapshot.id
         snapshot.set(peshawarHotel) 
     })
     .then(()=>addComplete(peshawarHotel))
     .catch((error)=>console.log(error))
}
export  async function getpeshawarhotels(peshawarHotelRetrived){
    var peshawarHotelList=[]
    var snapshot=await firebase
    .firestore()
    .collection("peshawarhotels")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const peshawarHotelDoc=doc.data()
    peshawarHotelDoc.id=doc.id
    peshawarHotelList.push(peshawarHotelDoc)
})
peshawarHotelRetrived(peshawarHotelList)
}