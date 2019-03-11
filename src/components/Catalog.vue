<template>
  <div class="container">
    <div class="filter-button" 
      :class="{'hidden': btTrigger}" 
      @click="btTrigger = true; bodyTag()"
    >
        <div class="bt-cont">
          <img src="/src/assets/images/filter.png">
        </div>
        <i>{{filterCounter}}</i>
      </a>
    </div>
    <div class="selects-container" :class="{'show': btTrigger}">
      <v-select 
        v-model="typeSelected" 
        label="productName" 
        :options="optionsName" 
        class="select"
        @change="getFilters()"
        v-if="this.windowWidth > 750"
      ></v-select>

      <v-select 
        v-model="typeSelected" 
        label="productName" 
        :options="optionsName" 
        class="select mobile"
        v-else
      ></v-select>


      <v-select 
        v-model="colorSelected" 
        :options="optionsColor" 
        class="select"
        @change="getFilters()"
        v-if="this.windowWidth > 750"
      ></v-select>

      <v-select 
        v-model="colorSelected" 
        :options="optionsColor" 
        class="select mobile"
        v-else
      ></v-select>

      <div class="set-bt-container">
        <div class="button" @click="getFilters()">Set Filters</div>
      </div>
      <div class="close-bt" @click="btTrigger = false;  bodyTag()">
        <span>x</span>
      </div>
    </div>  
    <div class="flower-items">
      <div class="items-list">
        <ul>
          <li v-for="(flower, index) in getData()" class="item">
            <div class="wrapper">
              <div class="item-buttons">
                <div class="item-img">
                  <img :src="imgPath + flower.img">
                </div>
                <div class="action-buttons">
                  <a href="#">
                    <span class="action-btn search"></span>
                  </a>
                  <a href="#">
                    <span class="action-btn basket add-to-basket"></span>
                  </a>  
                  <a href="#">
                    <span class="action-btn favorites"></span>
                  </a>
                </div>
              </div>  
              <div class="item-title">
                {{flower.title}}
              </div>
              <div class="item-price">
                <i>starting at</i> &#36;{{flower.price}}
              </div>
            </div>  
          </li>
        </ul>
      </div>
      <div class="message-cont">
        {{message}}
      </div>
    </div>  
  	<router-view></router-view> 
  </div>
</template>

<script>

import vSelect from 'vue-select'

export default {
  name: 'app',
  data () {
    return {
      imgPath: '/src/assets/images/',
      typeSelected:{productValue: '', productName:''},
      colorSelected:'',
      filterCounter: 0,
      btTrigger: false,
      windowWidth: 0,
      message:'',
      optionsName:[
        { productValue: 'Boutonnieres', productName:'Boutonnieres'},
        { productValue: 'Cake_Toppers', productName:'Cake Toppers'},
        { productValue: 'Centerpieces', productName:'Centerpieces'},
        { productValue: 'Corsages', productName:'Corsages'},
        { productValue: 'Bouquets', productName:'Bouquets'},
        { productValue: 'Bridal_Bouquets', productName:'Bridal Bouquets'},
        { productValue: 'Bridesmaid_Bouquets', productName:'Bridesmaid Bouquets'},
        { productValue: 'Flower_Girl_and_Toss_Bouquets', productName:'Flower Girl and Toss Bouquets'},
        { productValue: 'Rose_Petals', productName:'Rose Petals'},
        { productValue: 'Value_Packages', productName:'Value Packages'},
      ], 
      optionsColor:['white', 'mix', 'blue', 'cream', 'orange'],
      flag: false,
      flowers:[
        { title: 'Test flowers #1', price: 199.99, productType: 'Boutonnieres', color: 'mix', img: 'fl1.jpg'},
        { title: 'Test flowers #2', price: 197.99, productType: 'Cake_Toppers', color: 'mix', img: 'fl2.jpg'},
        { title: 'Test flowers #3', price: 195.99, productType: 'Centerpieces', color: 'white', img: 'fl3.jpg'},
        { title: 'Test flowers #4', price: 217.99, productType: 'Corsages', color: 'blue', img: 'fl4.jpg'},
        { title: 'Test flowers #5', price: 199.99, productType: 'Bouquets', color: 'mix', img: 'fl5.jpg'},
        { title: 'Test flowers #6', price: 197.99, productType: 'Bridal_Bouquets', color: 'blue', img: 'fl6.jpg'},
        { title: 'Test flowers #7', price: 195.99, productType: 'Bridesmaid_Bouquets', color: 'cream', img: 'fl7.jpg'},
        { title: 'Test flowers #8', price: 217.99, productType: 'Flower_Girl_and_Toss_Bouquets', color: 'blue', img: 'fl8.jpg'},
        { title: 'Test flowers #9', price: 199.99, productType: 'Rose_Petals', color: 'orange', img: 'fl9.jpg'},
        { title: 'Test flowers #10', price: 197.99, productType: 'Value_Packages', color: 'cream', img: 'fl10.jpg'},
        { title: 'Test flowers #11', price: 195.99, productType: 'Bridesmaid_Bouquets', color: 'white', img: 'fl11.jpg'},
        { title: 'Test flowers #12', price: 217.99, productType: 'Flower_Girl_and_Toss_Bouquets', color: 'orange', img: 'fl12.jpg'},
        { title: 'Test flowers #13', price: 199.99, productType: 'Boutonnieres', color: 'cream', img: 'fl13.jpg'},
        { title: 'Test flowers #14', price: 197.99, productType: 'Cake_Toppers', color: 'blue', img: 'fl14.jpg'},
        { title: 'Test flowers #15', price: 195.99, productType: 'Centerpieces', color: 'orange', img: 'fl15.jpg'},
        { title: 'Test flowers #16', price: 217.99, productType: 'Corsages', color: 'white', img: 'fl16.jpg'},
        { title: 'Test flowers #17', price: 217.99, productType: 'Flower_Girl_and_Toss_Bouquets', color: 'blue', img: 'fl17.jpg'},
        { title: 'Test flowers #18', price: 199.99, productType: 'Rose_Petals', color: 'mix', img: 'fl18.jpg'},
        { title: 'Test flowers #19', price: 197.99, productType: 'Value_Packages', color: 'blue', img: 'fl19.jpg'},
        { title: 'Test flowers #20', price: 195.99, productType: 'Bridesmaid_Bouquets', color: 'cream', img: 'fl20.jpg'}
      ],
      flowersDefault:[]
    }
  },
  components:{
    'v-select': vSelect
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener('resize', this.getWindowWidth);
      this.getWindowWidth()
    })

  },
  created(){  
    this.flowersDefault = this.flowers;
    this.checkFilters()
  },
  methods:{
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    },
  	getFilters(){
      var filtersStr = '';
        
      if (this.typeSelected == null && this.colorSelected == null){        
        window.location.href = '/#/';
      }else{        
        filtersStr = '/search?type=' + ( this.typeSelected == null ? null : this.typeSelected.productValue ) + '&color=' + ( this.colorSelected == null ? null : this.colorSelected ) ;
        console.log('filtersStr -',filtersStr)
        window.location.href = filtersStr;
      }

  	},
    getData(){      
      return this.flowersDefault;
    },
    setFilters(tmpType, tmpColor){  
      this.flowersDefault = [];
      var tmp = [];
      tmp =  this.flowers;
      for (var i = 0; i < tmp.length; i++) {
        if(
          (
            ((tmp[i].productType == tmpType) || (tmpType == 'null')) && 
            ((tmp[i].color == tmpColor) || (tmpColor == 'null'))
          )){

          this.flowersDefault.push(tmp[i]);
        }
      }
      if (this.flowersDefault.length > 0){
        this.message = ''
      }else{
        this.message = "can't find anything"
      }
      return this.flowersDefault;
    },
    createType(tmpType){
      var output = {};
      for ( var i = 0; i < this.optionsName.length; i++ )
          if( tmpType == this.optionsName[i].productValue){
            output = {
              productValue: this.optionsName[i].productValue, 
              productName:this.optionsName[i].productName
            }
          }
      return output;
    },
    checkCounter(){
      if( this.typeSelected != null ){
        this.filterCounter++
      }
      if( this.colorSelected != null ){
        this.filterCounter++
      }
      return this.filterCounter
    },
    checkFilters(){      
      var href = window.location.href;
      if( href.indexOf('?') != -1 ){
        var tmp = href.split('&');
        var tmpType = tmp[0].split('=')[1];
        var tmpColor = tmp[1].split('=')[1].split('#')[0];
        tmpColor == 'null' ? this.colorSelected = null : this.colorSelected = tmpColor;
        tmpType == 'null' ? this.typeSelected = null : this.typeSelected = this.createType(tmpType);  
        this.checkCounter();
        this.setFilters(tmpType, tmpColor);        
      }else{
        this.typeSelected = null;
        this.colorSelected = null;
      }
    },
  	bodyTag(){
      const el = document.body;
      if ( this.windowWidth > 750 || this.btTrigger == false) {
        el.classList.remove('over');
      } else {
        el.classList.add('over');        
      }
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.getWindowWidth);
  }
}
</script>

<style>
  
  .message-cont{
    text-align: center;
  }

  .filter-button{
    display: none;
  }

  .set-bt-container{
    display: none;
  }

  .close-bt{
    display: none;
  }

  @media screen and (min-width: 751px){
    ul li:nth-child(4n){
      border-right: none;
      width: calc(25%);
    }
  }

  @media screen and (max-width: 750px){
    ul li:nth-child(2n){
      border-right: none;
    }
    ul li{
      display: inline-block;
      width: calc(50% - 2px);
    }
    .filter-button{
      width: 50px;
      height: 50px;
      border: 1px solid #4c4c4c;
      position: fixed;
      top: 20px;
      right: 0;
      margin-right: 15px; 
      flex-direction: column;
      display: inline-flex;
      border-radius: 4px;
      z-index: 10;
      background: white;
      cursor: pointer;
       -webkit-transition: margin 700ms;
      -o-transition: margin 700ms;
      transition: margin 700ms;
    }

    .filter-button.hidden{
      margin-right: -100px;
       -webkit-transition: margin 700ms;
      -o-transition: margin 700ms;
      transition: margin 700ms;

    } 

    .filter-button .bt-cont{
      width: 80%;
      margin: auto;
      display: flex;
    }

    .filter-button .bt-cont img{
      width: 100%;
      margin: auto;
    }

    .filter-button i{
      font-style: normal;
      position: absolute;
      width: 20px;
      height: 20px;
      background: rgba(255,108,136,1);
      text-align: center;
      border-radius: 50%;
      color: white;
      font-size: 13px;
      bottom: 0;
      right: 0;
      margin-bottom: -7px;
      margin-right: -10px;
    }

    .selects-container{
      top: 0;
      position: fixed;
      width: calc(100% - 16px);
      margin: auto;
      margin-top: -120vh;
      height: 100vh;
      z-index: 15;
      background: white;
      flex-direction: column;
      justify-content: center;
      -webkit-transition: margin 700ms;
      -o-transition: margin 700ms;
      transition: margin 700ms;
    }

    .selects-container.show{
      margin-top: 0px;
      -webkit-transition: margin 700ms;
      -o-transition: margin 700ms;
      transition: margin 700ms; 
    }

    .selects-container.show .close-bt{
      background-color: #b3afaf;
      width: 35px;
      height: 35px;
      border-radius: 50%;
      display: inline-flex;
      flex-direction: column;
      position: absolute;
      cursor: pointer;
      top: 8px;
      right: -2px;
    }

    .selects-container.show .close-bt span{
      margin: 0px auto 0px auto;
      color: #f6f6f6;
      font-size: 22px;
    }

    .selects-container .select {
      width: calc(100% - 2px);
      margin: 30px auto 30px auto;
    }

    .set-bt-container{
      display: block;
      width: calc(100% - 2px);
      margin: 30px auto 30px auto;
    }

    .set-bt-container .button{
      text-align: center;
      width: 100%;
      color: #fff;
      background-color: #007bff;
      border-color: #007bff;
      height: 38px;
      line-height: 36px;
      font-size: 18px;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 480px){
    ul li{
      border-right: none;
    }
    ul li{
      display: inline-block;
      width: calc(100%);
    }
    ul li.item .item-buttons{
      max-height: 100%;
    }
  }
</style>
