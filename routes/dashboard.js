const express = require('express');
const passport = require('passport');

const router = express.Router();

const admincontroller = require('../Controller/AdminController')

// dashboard

router.get('/index',admincontroller.get);
router.get('/',admincontroller.get);

// layouts

router.get('/layouts-without-menu',admincontroller.without);
router.get('/layouts-without-navbar',admincontroller.navbar);
router.get('/layouts-container',admincontroller.container);
router.get('/layouts-fluid',admincontroller.fluid);
router.get('/layouts-blank',admincontroller.blank);

// account-setting

router.get('/pages-account-settings-account',admincontroller.account);
router.get('/pages-account-settings-connections',admincontroller.connections);
router.get('/pages-account-settings-notifications',admincontroller.notification);

// authenication

router.get('/auth-login-basic',admincontroller.login);
router.get('/auth-register-basic',admincontroller.register);
router.get('/auth-forgot-password-basic',admincontroller.forgotPassword);

// misc

router.get('/pages-misc-error',admincontroller.error);
router.get('/pages-misc-under-maintenance',admincontroller.maintenance);

// card

router.get('/cards-basic',admincontroller.cards);

// UI

router.get('/ui-accordion',admincontroller.accordion);
router.get('/ui-alerts',admincontroller.alerts);
router.get('/ui-badges',admincontroller.badges);
router.get('/ui-buttons',admincontroller.buttons);
router.get('/ui-carousel',admincontroller.carousel);
router.get('/ui-collapse',admincontroller.collapse);
router.get('/ui-dropdowns',admincontroller.dropdowns);
router.get('/ui-footer',admincontroller.footer);
router.get('/ui-list-groups',admincontroller.list_groups);
router.get('/ui-modals',admincontroller.modals);
router.get('/ui-navbar',admincontroller.navbar2);
router.get('/ui-offcanvas',admincontroller.offcanvas);
router.get('/ui-pagination-breadcrumbs',admincontroller.pagination_breadcrumbs);
router.get('/ui-progress',admincontroller.progress);
router.get('/ui-spinners',admincontroller.spinners);
router.get('/ui-tabs-pills',admincontroller.tabs_pills);
router.get('/ui-toasts',admincontroller.toasts);
router.get('/ui-tooltips-popovers',admincontroller.tooltips_popovers);
router.get('/ui-typography',admincontroller.typography);

// Extend-UI

router.get('/extended-ui-perfect-scrollbar',admincontroller.scrollbar);
router.get('/extended-ui-text-divider',admincontroller.divider);

// Category and Subcategory

router.get('/category',admincontroller.category);
router.get('/subcategory',admincontroller.subcategory);

// Boxicons

router.get('/icons-boxicons',admincontroller.boxicon);

// Form Element

router.get('/forms-basic-inputs',admincontroller.basic_input);
router.get('/forms-input-groups',admincontroller.input_group);

// Form Layout

router.get('/form-layouts-vertical',admincontroller.vertical);
router.get('/form-layouts-horizontal',admincontroller.horizontal);

// tables

router.get('/tables-basic',admincontroller.table);

// logout 

router.get('/admin/auth-login-basic',admincontroller.logout);

// Insert Data in profile

router.post('/profileData',admincontroller.profile);

// insert Category

router.post('/category',admincontroller.categoryinsert);

// View Category

router.get('/viewCategory',admincontroller.viewCategory);

// Delete Category

router.get('/DeletCategory/:id',admincontroller.DeletCategory);

// insert Subcategory

router.post('/subcategorypage',admincontroller.subcategorypage);

// View Subcategory

router.get('/viewSubcategory',admincontroller.viewSubcategory);

// Delete Subcategory

router.get('/DeletSubCategory/:id',admincontroller.DeletSubCategory);



module.exports = router