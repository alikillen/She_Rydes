import React from 'react'

function AdminScreen() {
    return (
       <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/contact" className="nav-link">Contact</a>
      </li>
    </ul>
    {/* SEARCH FORM */}
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Notifications</span>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </a>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button"><i className="fas fa-th-large" /></a>
      </li>
    </ul>
  </nav>
  {/* /.navbar */}
  {/* Main Sidebar Container */}
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <a href="index3.html" className="brand-link">
      <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
          <a href="#" className="d-block">Alexander Pierce</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
            <a href="#" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="./index.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index2.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="./index3.html" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="pages/widgets.html" className="nav-link">
              <i className="nav-icon fas fa-th" />
              <p>
                Widgets
                <span className="right badge badge-danger">New</span>
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Layout Options
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/layout/top-nav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/top-nav-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Top Navigation + Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/boxed.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Boxed</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Sidebar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-topnav.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Navbar</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/fixed-footer.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Fixed Footer</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/layout/collapsed-sidebar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Collapsed Sidebar</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Charts
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/charts/chartjs.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>ChartJS</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/flot.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Flot</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/charts/inline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inline</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-tree" />
              <p>
                UI Elements
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/UI/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/icons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Icons</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/buttons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Buttons</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/sliders.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Sliders</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/modals.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Modals &amp; Alerts</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/navbar.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Navbar &amp; Tabs</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/timeline.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Timeline</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/UI/ribbons.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Ribbons</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
                Forms
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/forms/general.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>General Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/advanced.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Advanced Elements</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/editors.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Editors</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/forms/validation.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Validation</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-table" />
              <p>
                Tables
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/tables/simple.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Simple Tables</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/data.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>DataTables</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/tables/jsgrid.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>jsGrid</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">EXAMPLES</li>
          <li className="nav-item">
            <a href="pages/calendar.html" className="nav-link">
              <i className="nav-icon fas fa-calendar-alt" />
              <p>
                Calendar
                <span className="badge badge-info right">2</span>
              </p>
            </a>
          </li>
          <li className="nav-item">
            <a href="pages/gallery.html" className="nav-link">
              <i className="nav-icon far fa-image" />
              <p>
                Gallery
              </p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-envelope" />
              <p>
                Mailbox
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/mailbox/mailbox.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Inbox</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/compose.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Compose</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/mailbox/read-mail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Read</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-book" />
              <p>
                Pages
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/invoice.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Invoice</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/profile.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Profile</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/e-commerce.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>E-commerce</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/projects.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Projects</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project-add.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Add</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project-edit.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Edit</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/project-detail.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Project Detail</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/contacts.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Contacts</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-plus-square" />
              <p>
                Extras
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="pages/examples/login.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Login</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/register.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Register</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/forgot-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Forgot Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/recover-password.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Recover Password</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/lockscreen.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Lockscreen</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Legacy User Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/language-menu.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Language Menu</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/404.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 404</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/500.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Error 500</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/pace.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Pace</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/examples/blank.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Blank Page</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="starter.html" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Starter Page</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-header">MISCELLANEOUS</li>
          <li className="nav-item">
            <a href="https://adminlte.io/docs/3.0" className="nav-link">
              <i className="nav-icon fas fa-file" />
              <p>Documentation</p>
            </a>
          </li>
          <li className="nav-header">MULTI LEVEL EXAMPLE</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-item has-treeview">
            <a href="#" className="nav-link">
              <i className="nav-icon fas fa-circle" />
              <p>
                Level 1
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </a>
              </li>
              <li className="nav-item has-treeview">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>
                    Level 2
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">
                      <i className="far fa-dot-circle nav-icon" />
                      <p>Level 3</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Level 2</p>
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="fas fa-circle nav-icon" />
              <p>Level 1</p>
            </a>
          </li>
          <li className="nav-header">LABELS</li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-danger" />
              <p className="text">Important</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-warning" />
              <p>Warning</p>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              <i className="nav-icon far fa-circle text-info" />
              <p>Informational</p>
            </a>
          </li>
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">Dashboard v3</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Dashboard v3</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Online Store Visitors</h3>
                  <a href="javascript:void(0);">View Report</a>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="d-flex flex-column">
                    <span className="text-bold text-lg">820</span>
                    <span>Visitors Over Time</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up" /> 12.5%
                    </span>
                    <span className="text-muted">Since last week</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="position-relative mb-4">
                  <canvas id="visitors-chart" height={200} />
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary" /> This Week
                  </span>
                  <span>
                    <i className="fas fa-square text-gray" /> Last Week
                  </span>
                </div>
              </div>
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header border-0">
                <h3 className="card-title">Products</h3>
                <div className="card-tools">
                  <a href="#" className="btn btn-tool btn-sm">
                    <i className="fas fa-download" />
                  </a>
                  <a href="#" className="btn btn-tool btn-sm">
                    <i className="fas fa-bars" />
                  </a>
                </div>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-striped table-valign-middle">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Sales</th>
                      <th>More</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                        Some Product
                      </td>
                      <td>$13 USD</td>
                      <td>
                        <small className="text-success mr-1">
                          <i className="fas fa-arrow-up" />
                          12%
                        </small>
                        12,000 Sold
                      </td>
                      <td>
                        <a href="#" className="text-muted">
                          <i className="fas fa-search" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                        Another Product
                      </td>
                      <td>$29 USD</td>
                      <td>
                        <small className="text-warning mr-1">
                          <i className="fas fa-arrow-down" />
                          0.5%
                        </small>
                        123,234 Sold
                      </td>
                      <td>
                        <a href="#" className="text-muted">
                          <i className="fas fa-search" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                        Amazing Product
                      </td>
                      <td>$1,230 USD</td>
                      <td>
                        <small className="text-danger mr-1">
                          <i className="fas fa-arrow-down" />
                          3%
                        </small>
                        198 Sold
                      </td>
                      <td>
                        <a href="#" className="text-muted">
                          <i className="fas fa-search" />
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <img src="dist/img/default-150x150.png" alt="Product 1" className="img-circle img-size-32 mr-2" />
                        Perfect Item
                        <span className="badge bg-danger">NEW</span>
                      </td>
                      <td>$199 USD</td>
                      <td>
                        <small className="text-success mr-1">
                          <i className="fas fa-arrow-up" />
                          63%
                        </small>
                        87 Sold
                      </td>
                      <td>
                        <a href="#" className="text-muted">
                          <i className="fas fa-search" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* /.card */}
          </div>
          {/* /.col-md-6 */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h3 className="card-title">Sales</h3>
                  <a href="javascript:void(0);">View Report</a>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <p className="d-flex flex-column">
                    <span className="text-bold text-lg">$18,230.00</span>
                    <span>Sales Over Time</span>
                  </p>
                  <p className="ml-auto d-flex flex-column text-right">
                    <span className="text-success">
                      <i className="fas fa-arrow-up" /> 33.1%
                    </span>
                    <span className="text-muted">Since last month</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="position-relative mb-4">
                  <canvas id="sales-chart" height={200} />
                </div>
                <div className="d-flex flex-row justify-content-end">
                  <span className="mr-2">
                    <i className="fas fa-square text-primary" /> This year
                  </span>
                  <span>
                    <i className="fas fa-square text-gray" /> Last year
                  </span>
                </div>
              </div>
            </div>
            {/* /.card */}
            <div className="card">
              <div className="card-header border-0">
                <h3 className="card-title">Online Store Overview</h3>
                <div className="card-tools">
                  <a href="#" className="btn btn-sm btn-tool">
                    <i className="fas fa-download" />
                  </a>
                  <a href="#" className="btn btn-sm btn-tool">
                    <i className="fas fa-bars" />
                  </a>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-success text-xl">
                    <i className="ion ion-ios-refresh-empty" />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-success" /> 12%
                    </span>
                    <span className="text-muted">CONVERSION RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                  <p className="text-warning text-xl">
                    <i className="ion ion-ios-cart-outline" />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-up text-warning" /> 0.8%
                    </span>
                    <span className="text-muted">SALES RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
                <div className="d-flex justify-content-between align-items-center mb-0">
                  <p className="text-danger text-xl">
                    <i className="ion ion-ios-people-outline" />
                  </p>
                  <p className="d-flex flex-column text-right">
                    <span className="font-weight-bold">
                      <i className="ion ion-android-arrow-down text-danger" /> 1%
                    </span>
                    <span className="text-muted">REGISTRATION RATE</span>
                  </p>
                </div>
                {/* /.d-flex */}
              </div>
            </div>
          </div>
          {/* /.col-md-6 */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </div>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
  {/* Control Sidebar */}
  <aside className="control-sidebar control-sidebar-dark">
    {/* Control sidebar content goes here */}
  </aside>
  {/* /.control-sidebar */}
</div>

    )
}

export default AdminScreen
