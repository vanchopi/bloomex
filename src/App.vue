<template>
  <div id="app">
  <Catalog></Catalog>    
  </div>
</template>

<script>
import Catalog from './components/Catalog'

export default {
  name: 'app',
  data () {
    return {
     
    }
  },
  components:{
    Catalog
  }
}
</script>

<style>

  body{
    font-family: 'Open Sans', sans-serif;
    margin-top: 25px;
  }

  a{
    text-decoration: none;
  }

  .container{
    max-width: 1040px;
    width: 100%;
    margin: auto;
    position: relative;
  }

  body.over{
    overflow: hidden;
  }

  .items-list{

  }

  ul{
    list-style: none;
    padding: 0;
    border-top: 1px solid #e8e8e8;
  }
  ul li{
    display: inline-block;
    width: calc(25% - 1px);
    border-right: 1px solid #e8e8e8;
    border-bottom: 1px solid #e8e8e8;
  }

  ul li.item .item-img{
    width: 75%;
    margin: auto;
  }

  ul li.item .item-buttons{
    max-height: 240px;
    position: relative;
  }

  ul li.item .item-img img{
    width:100%;
  }

  ul li.item .item-title{
    font-size: 16px;
    margin-top: 2%;
    text-align: center;
  }

  ul li.item .item-price i{
    font-style: normal;
    font-size: 16px;
    margin-right: 10px;
    color: #999999;
  }

  ul li.item .item-price{
    text-align: center;
    margin: 2% 0;
    font-size: 1.5rem;
  }

  li.item:hover span.action-btn {
    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.09);
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }
  

  li.item:hover .action-buttons {
    bottom: 5px;
    opacity: 1;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
  }

  .action-buttons{
    width: 100%;
    padding: 0 10px;
    opacity: 0;
    -webkit-transition: all .3s;
    -o-transition: all .3s;
    transition: all .3s;
    max-width: 165px;
    position: absolute;
    left: 50%;
    -webkit-transform: translate(-50%, 0);
    -ms-transform: translate(-50%, 0);
    transform: translate(-50%, 0);
    bottom: -20px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: distribute;
    justify-content: space-around;
  }

  span.action-btn{
    height: 45px;
    width: 45px;
    display: inline-block;
    background-color: #ffffff;
    -webkit-box-shadow: transparent;
    box-shadow: transparent;
    cursor: pointer;
  }

  span.action-btn.search {
    background: url(https://bunchesdirect.com/static/img/icons/svg/search-product-button.svg) no-repeat center center;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  span.action-btn.basket {
    background: url(https://bunchesdirect.com/static/img/icons/svg/basket-product-button.svg) no-repeat center center;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  span.action-btn.favorites {
    background: url(https://bunchesdirect.com/static/img/icons/svg/favorites-product.svg) no-repeat center center;
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  span.action-btn.favorites:hover {
    background: url(https://bunchesdirect.com/static/img/icons/svg/favorites-product-hover.svg);
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  span.action-btn.basket:hover {
    background: url(https://bunchesdirect.com/static/img/icons/svg/basket-product-button-hover.svg);
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  span.action-btn.search:hover {
    background: url(https://bunchesdirect.com/static/img/icons/svg/search-product-button-hover.svg);
    -webkit-transition: .3s;
    -o-transition: .3s;
    transition: .3s;
  }

  .v-select ul li{
    width: 100% !important;
  }

  .selects-container{
    display: flex;
    justify-content: space-between;
  }

  .selects-container .select{
    width: calc(50% - 2px);
    margin: auto;
  }

  .dropdown.single.searchable{
    color: #000000;
    border-radius: 0px;
    border: none; 
  }

  .dropdown.single.searchable .dropdown-toggle{
    position: relative;
  }

  .v-select .open-indicator, 
  .v-select .open-indicator:before{
    position: absolute;
    left: 6px;
    top: 6px;
  }

  .v-select .open-indicator:before {
    border-color: rgba(255,108,136,1);
  }

  .v-select .dropdown-menu>.highlight>a {
    background: rgba(255,108,136,1);
  }

  .v-select li>a {
    padding: 9px 20px;
  }

  .dropdown.single.searchable .dropdown-toggle{
    border: none;
    border-radius: 0;
    background-color: #f6f6f6;
  }

  .v-select .selected-tag{
    padding: 3px 5px 3px 30px;
    min-width: 500px;
  }

  .v-select input[type=search], .v-select input[type=search]:focus{
    padding: 3px 5px 3px 30px;
  }

  .v-select .dropdown-toggle .clear{
    background-color: #ff6c88;
    width: 29px;
    height: 29px;
    border-radius: 50%;
    display: inline-flex;
    margin-top: 5px;
  }

  .v-select .dropdown-toggle .clear span{
    margin: auto;
    color: #f6f6f6;
    font-size: 23px;
  }

  .wrapper{
    padding: 25px 20px;
  }

  .v-select .vs__selected-options{
    overflow: hidden;
    max-height: 34px;
  }
</style>
