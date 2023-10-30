import Navbar from './components/Navbar/Navbar'
import Sidenav from './components/Sidenav/Sidenav'
import Jobcard from './components/Jobcard/Jobcard'
import jobData from './data.json'
function App() {
  return (
    <>
    <Navbar/>
    <Sidenav/>
    {jobData.jobs.map((item,index)=>
         <Jobcard job_title={item.job_title} 
                  location={item.location}
                  company_name={item.company_name}
                  stipend_salary={item.stipend_salary}
                  experience={item.experience_required}
                  qualification={item.min_qualification}
                  job_description={item.job_description}
                  closing_date={item.application_closing_date}
                  comapny_desc={item.company_description}
                  company_logo={item.company_logo}
                

         />
    )
    }
    
    </>
  )
}

export default App;
