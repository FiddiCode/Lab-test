import './App.css'
import Login from './Pages/Login/Login'
import Home from './Pages/Home/Home'
import CentralLab from './Pages/CentralLab/CentralLab'
import Reports from './Pages/Reports/Reports'
import Pathology from './Pages/Pathology/Pathology'
import Microbiology from './Pages/Microbiology/Microbiology'
import Biochemistry from './Pages/Biochemistry/Biochemistry'
import {Outlet,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Test from './Pages/Test/Test'
import Book from './Pages/Book/Book'
import AllPatients from './Pages/AllPatients/AllPatients'
import EnrollPatient from './Pages/EnrollPatient/EnrollPatient'
import QuickEnroll from './Pages/QuickEnroll/QuickEnroll'

import CompleteBloodPicture from './Components/Tests/PathologyTests/CompleteBloodPicture/CompleteBloodPicture'
import CompleteUrineExamination from './Components/Tests/PathologyTests/CompleteUrineExamination/CompleteUrineExamination'
import SerumCalcium from './Components/Tests/PathologyTests/SerumCalcium/SerumCalcium'
import UrineKetoneBodies from './Components/Tests/PathologyTests/UrineKetoneBodies/UrineKetoneBodies'
import Haemogram from './Components/Tests/PathologyTests/Haemogram/Haemogram'
import Dengue from './Components/Tests/MicrobiologyTests/Dengue/Dengue'
import HIV from './Components/Tests/MicrobiologyTests/HIV/HIV'
import Widal from './Components/Tests/MicrobiologyTests/Widal/Widal'
import RAFactor from './Components/Tests/MicrobiologyTests/RAFactor/RAFactor'
import VDRL from './Components/Tests/MicrobiologyTests/VDRL/VDRL'
import LFT from './Components/Tests/BiochemistryTests/LFT/LFT'
import Amylase from './Components/Tests/BiochemistryTests/Amylase/Amylase'
import SerumElectrolytes from './Components/Tests/BiochemistryTests/SerumElectrolytes/SerumElectrolytes'
import Fbs from './Components/Tests/BiochemistryTests/Fbs/Fbs'
import BloodGrouping from './Components/Tests/BiochemistryTests/BloodGrouping/BloodGrouping'
import SerumCreatinine from './Components/Tests/BiochemistryTests/SerumCreatinine/SerumCreatinine'
import Cholinestonese from './Components/Tests/BiochemistryTests/Cholinestonese/Cholinestonese'
import Lipid from './Components/Tests/BiochemistryTests/Lipid/Lipid'
import HBSAG from './Components/Tests/BiochemistryTests/HBSAG/HBSAG'
import HCV from './Components/Tests/BiochemistryTests/HCV/HCV'
import Maleria from './Components/Tests/BiochemistryTests/Maleria/Maleria'
import ProBNP from './Components/Tests/BiochemistryTests/ProBNP/ProBNP'
import PregencyTest from './Components/Tests/BiochemistryTests/PregencyTest/PregencyTest'
import OGTT from './Components/Tests/BiochemistryTests/OGTT/OGTT'

 export const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index element={<Login />} />
      <Route path='home' element={<Home/>} />
      <Route path='central-lab' element={<CentralLab/>} />
        <Route path='reports' element={<Reports/>}/>
        <Route path='pathology' element={<Pathology/>}/>
        <Route path='microbiology' element={<Microbiology/>}/>
        <Route path='biochemistry' element={<Biochemistry/>}/>
        <Route path='test' element={<Test/>}/>
        <Route path='book' element={<Book/>}/>
        <Route path='all-patients' element={<AllPatients/>}/>    
        <Route path='enroll-patient' element={<EnrollPatient/>}/> 
        <Route path='quick-enroll' element={<QuickEnroll/>}/> 
      
         {/* Pathology Routes */}
        <Route path='cbp' element={<CompleteBloodPicture/>}/> 
        <Route path='cue' element={<CompleteUrineExamination/>}/>
        <Route path='sc' element={<SerumCalcium/>}/>
        <Route path='ukb' element={<UrineKetoneBodies/>}/>
        <Route path='haemogram' element={<Haemogram/>}/>

        {/* Microbiology Routes */}
        <Route path='dengue' element={<Dengue/>}/>
        <Route path='hiv' element={<HIV/>}/>
        <Route path='widal' element={<Widal/>}/>
        <Route path='ra' element={<RAFactor/>}/>
        <Route path='vdrl' element={<VDRL/>}/>

        {/* Biochemistry Routes */}
        <Route path='lft' element={<LFT/>}/>
        <Route path='amylase' element={<Amylase/>}/>
        <Route path='serum-electrolytes' element={<SerumElectrolytes/>}/>
        <Route path='fbs' element={<Fbs/>}/>
        <Route path='blood-grouping' element={<BloodGrouping/>}/>
        <Route path='serum-creatinine' element={<SerumCreatinine/>}/>
        <Route path='cholinestonese' element={<Cholinestonese/>}/>
        <Route path='lipid' element={<Lipid/>} />
        <Route path='hbsag' element={<HBSAG/>}/>
        <Route path='hcv' element={<HCV/>}/>
        <Route path='maleria' element={<Maleria/>}/>
        <Route path='pro-bnp' element={<ProBNP/>}/>
        <Route path='pregency-test' element={<PregencyTest/>}/>
        <Route path='ogtt' element={<OGTT/>}/>
    </Route>
  )
)


function App() {

  return (
    <>
    <Outlet/>
    </>
  )
}

export default App;
