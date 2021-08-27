import * as firebase from 'firebase';
export function addhunzahospitals(hunzaHospital,addComplete) {
    firebase
    .firestore()
    .collection("hunzahospitals")
     .add(lahoreHospital)
     .then((snapshot)=>{ 
        hunzaHospital.id=snapshot.id
         snapshot.set(hunzaHospital)
     })
     .then(()=>addComplete(hunzaHospital))
     .catch((error)=>console.log(error))
}
export  async function gethunzahospitals(hunzaHospitalRetrived){
    var hunzaHospitalList=[]
    var snapshot=await firebase
    .firestore() 
    .collection("hunzahospitals")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const hunzaHospitalDoc=doc.data()
    hunzaHospitalDoc.id=doc.id
    hunzaHospitalList.push(hunzaHospitalDoc)
})
hunzaHospitalRetrived(hunzaHospitalList)
}