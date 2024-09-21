
import './oppertunities.css';
import { Link } from 'react-router-dom';

function oppertunities() {
  return (

    <div id="projects">
    {/* Navigation Bar */}
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/courses" className="nav-item">Courses</Link></li>
        <li><Link to="/calendar" className="nav-item">Calendar</Link></li>
        <li><Link to="/opportunities" className="nav-item">Opportunities</Link></li>
        <li><Link to="/profile" className="nav-item">Profile</Link></li>
        <li><Link to="/Forum" className="nav-item">Forum</Link></li>
        <li><Link to="/profile" className="nav-item">Forum</Link></li>
      </ul>
    </nav>



    
       
            <div class="container">
                <h1 class="sub-title">Oppertunities</h1>
                <div class="work-list">
                    <div class="work">
                      
                        <div class="layer">
                            <h3>Clubs</h3>
                            <p>Finance Related clubs</p>
                            <a href="https://www.charitycharge.com/nonprofit-resources/financial-literacy-nonprofits/" target="_blank" rel="noopener noreferrer" className="button">
                      Club Oppertunities
                  </a>
                        </div>
                    </div>
                    <div class="work">
                      
                        <div class="layer">
                            <h3>Internships</h3>
                            <p>Finance related Internships</p>
                            <a href="https://www.ziprecruiter.com/Jobs/High-School-Finance-Intern/-in-New-York,NY" target="_blank" rel="noopener noreferrer" className="button">
    Internships Oppertunities
                  </a>
                             </div>
                    </div>
                    <div class="work">
                       
                        <div class="layer">
                            <h3>Additional Courses </h3>
                            <p>Finance Related courses</p>
                            <a href="hhttps://www.khanacademy.org/college-careers-more/financial-literacy" target="_blank" rel="noopener noreferrer" className="button">
                   Meeting Oppertunities
                  </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
      );
    }
export default oppertunities;