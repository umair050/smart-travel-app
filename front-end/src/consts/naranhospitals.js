import * as firebase from 'firebase';
export function addnaranhospitals(naranHospital,addComplete) {
    firebase
    .firestore()
    .collection("naranhospitals")
     .add(naranHospital)
     .then((snapshot)=>{ 
        naranHospital.id=snapshot.id
         snapshot.set(naranHospital)
     })
     .then(()=>addComplete(naranHospital))
     .catch((error)=>console.log(error))
}
export  async function getnaranhospitals(naranHospitalRetrived){
    var naranHospitalList=[]
    var snapshot=await firebase
    .firestore() 
    .collection("naranhospitals")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const naranHospitalDoc=doc.data()
    naranHospitalDoc.id=doc.id
    naranHospitalList.push(naranHospitalDoc)
})
naranHospitalRetrived(naranHospitalList)
}