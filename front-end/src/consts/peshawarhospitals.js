import * as firebase from 'firebase';
export function addpeshawarhospitals(peshawarHospital,addComplete) {
    firebase
    .firestore()
    .collection("peshawarhospitals")
     .add(peshawarHospital)
     .then((snapshot)=>{ 
        peshawarHospital.id=snapshot.id
         snapshot.set(peshawarHospital) 
     })
     .then(()=>addComplete(peshawarHospital))
     .catch((error)=>console.log(error))
}
export  async function getpeshawarhospitals(peshawarHospitalRetrived){
    var peshawarHospitalList=[]
    var snapshot=await firebase
    .firestore() 
    .collection("peshawarhospitals")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const peshawarHospitalDoc=doc.data()
    peshawarHospitalDoc.id=doc.id
    peshawarHospitalList.push(peshawarHospitalDoc)
})
peshawarHospitalRetrived(peshawarHospitalList)
}