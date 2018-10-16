import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
        <ul id="slide-out" className="side-nav hidden custom-scrollbar sn-bg-2 ps ps--theme_default" data-ps-id="c27390a3-9efc-e0d8-197a-ab96d73a156a">
            <li>
                <div className="logo-wrapper waves-light waves-effect waves-light">
                    <a href="#">
                        <img src="http://mdbootstrap.com/img/logo/mdb-transparent.png" alt="" className="img-fluid flex-center" />
                    </a>
                </div>
            </li>
            <li>
                <ul className="social">
                    <li>
                        <a href="#" className="icons-sm fb-ic">
                            <i className="fa fa-facebook"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="icons-sm pin-ic">
                            <i className="fa fa-pinterest"> </i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="icons-sm gplus-ic">
                            <i className="fa fa-google-plus"> </i>
                        </a>
                    </li>
                    <li>
                        <a  href="#" className="icons-sm tw-ic">
                            <i className="fa fa-twitter"> </i>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <form className="search-form" role="search">
                    <div className="form-group waves-light waves-effect waves-light">
                        <input type="text" className="form-control" placeholder="Search" />
                    </div>
                </form>
            </li>
            <li>

                <ul className="collapsible collapsible-accordion">
                    <li>
                        <a href="#" className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-shopping-bag"></i> Category
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <Link to="/categorylist">Category Management</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li >
                        <a  href="#" className="collapsible-header waves-effect arrow-r active">
                            <i className="fa fa-shopping-cart"></i> Store
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <Link to="/storelist">Store Management</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-dashboard"></i> Customer
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <Link to="/customerlist">Customer Management</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-desktop"></i> Product
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                <li>
                                    <Link to="/productlist">Product Management</Link>
                                </li>
                                
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-diamond"></i> Orders
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                
                                <li>
                                    <Link to="/orderlist">Order Management</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#" className="collapsible-header waves-effect arrow-r">
                            <i className="fa fa-diamond"></i> Staffs
                            <i className="fa fa-angle-down rotate-icon"></i>
                        </a>
                        <div className="collapsible-body">
                            <ul>
                                
                                <li>
                                    <Link to="/stafflist">Staff Management</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </li>

            <div className="sidenav-bg mask-strong"></div>

            <div className="ps__scrollbar-x-rail">
                <div className="ps__scrollbar-x" tabIndex="0"></div>
            </div>
            <div className="ps__scrollbar-y-rail">
                <div className="ps__scrollbar-y" tabIndex="0"></div>
            </div>
        </ul>

        <nav className="navbar fixed-top navbar-toggleable-md navbar-expand-lg navbar-dark scrolling-navbar double-nav">

            <div className="float-left">
                <a href="#" data-activates="slide-out" className="button-collapse">
                    <i className="fa fa-bars"></i>
                </a>
            </div>

            <div className="breadcrumb-dn mr-auto">
                <ol className="breadcrumb header-breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="#">Trang Chủ</a>
                    </li>
                </ol>
            </div>

            <ul className="nav navbar-nav nav-flex-icons ml-auto">
                <li className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false">
                        <i className="fa fa-user"></i> Tài Khoản</a>
                    <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu1">
                        <a href="#" className="dropdown-item waves-effect waves-light">Đăng Ký</a>
                        <a href="#" className="dropdown-item waves-effect waves-light">Đăng Nhập</a>
                        <a href="#" className="dropdown-item waves-effect waves-light">Đăng Xuất</a>
                    </div>
                </li>
            </ul>

        </nav>

    </header>
    );
  }
}

export default Header;
