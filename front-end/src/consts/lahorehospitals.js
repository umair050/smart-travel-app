import * as firebase from 'firebase';
export function addlahorehospitals(lahoreHospital,addComplete) {
    firebase
    .firestore()
    .collection("lahorehospitals")
     .add(lahoreHospital)
     .then((snapshot)=>{ 
        lahoreHospital.id=snapshot.id
         snapshot.set(lahoreHospital)
     })
     .then(()=>addComplete(lahoreHospital))
     .catch((error)=>console.log(error))
}
export  async function getlahorehospitals(lahoreHospitalRetrived){
    var lahoreHospitalList=[]
    var snapshot=await firebase
    .firestore() 
    .collection("lahorehospitals")
    .orderBy("name")
    .get()
snapshot.forEach((doc)=>{
    const lahoreHospitalDoc=doc.data()
    lahoreHospitalDoc.id=doc.id
    lahoreHospitalList.push(lahoreHospitalDoc)
})
lahoreHospitalRetrived(lahoreHospitalList)
}