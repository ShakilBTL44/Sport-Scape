const Navbar = (pageName) => {
  return `<div class="navbar-left">
            <div class="menu-toggle">
              <i class="fas fa-bars"></i>
            </div>
            <div class="search-box">
             <h2>${pageName}</h2>
            </div>
          </div>
          <div class="navbar-right">
            <div class="notification-bell">
              <i class="fas fa-bell"></i>
            </div>
            <div class="user-profile">
              <div class="user-avatar">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="User Avatar"
                />
              </div>
              <span class="user-name">John</span>
            </div>
          </div>`;
};

export default Navbar;
