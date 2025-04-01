const Sidebar = (activeTab) => {
  console.log(activeTab);
  return `
        <div class="sidebar-header">
          <h3> SportScape</h3>
        </div>
        <ul class="sidebar-menu">
          <li>
            <a class=${
              activeTab === "Dashboard" ? "active" : "normal"
            } href="index.html"><i class="fas fa-home"></i> Dashboard</a>
            </li>
            <li>
            <a class=${
              activeTab === "Sports" ? "active" : "normal"
            } href="sports.html"><i class="fas fa-baseball-ball"></i> Sports</a>
              </li>
               <li>
                  <a href="competitions.html" class=${
                    activeTab === "Competitions" ? "active" : "normal"
                  }
                    ><i class="fas fa-trophy"></i> Competitions</a
                  >
                </li>
            <li>
            <a class=${
              activeTab === "Events" ? "active" : "normal"
            } href="events.html"><i class="fas fa-calendar-alt"></i> Events</a>
            </li>
            
          <li>
            <a class=${
              activeTab === "UserManagement" ? "active" : "normal"
            } href="userManagement.html"><i class="fas fa-users"></i> User Management</a>
          </li>
          <li>
            <a class=${
              activeTab === "SquadManagement" ? "active" : "normal"
            } href="squadManagement.html"><i class="fas fa-user-friends"></i> Squad Management</a>
          </li>
          <li>
            <a class=${
              activeTab === "AdminManagement" ? "active" : "normal"
            } href="adminManagement.html"><i class="fas fa-user-shield"></i> Admin Staff</a>
          </li>
        </ul>
     `;
};

export default Sidebar;
