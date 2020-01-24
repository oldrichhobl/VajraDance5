import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { IonicModule,Events } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalsService } from "../globals.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  subscription: any;
  private selectedItem: any;
 
  searchTerm: string = '-';
  idx : number = 0;
  currentSelected:number = 0;

  data:any;

  public items: Array<{ title: string; note: string; id:string }> = 
  [
    {title:"Celý tun", note:"note 0", id:"01 Complete TUN.mp3" },
    {title:"Píseň Vadžry", note:"note 1", id:"01-PisenVadzry.mp3" },
    {title:"Šest lok", note:"note 2", id:"02-SestLok.mp3" },
    {title:"Oma Hum", note:"note 3", id:"03-OmaHum.mp3"}
  ];

  rangeValue: number = 0;

  constructor( private platform: Platform,
    private route: ActivatedRoute, private router: Router, 
    private globals: GlobalsService
    ) 
  {
  console.log("** constructor na home.page.ts **" );
  
  }

  ionViewDidEnter(){
    this.subscription = this.platform.backButton.subscribe(()=>{
        navigator['app'].exitApp();
    });
}

  ionViewWillLeave(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
    console.log(" ngOnInit na home.page.ts");
    // console.dir(JSONdata);
    //this.items = JSONdata.FILES.FILE;
    // data nactem az po udalosti  data:loaded
    // second page (listen for the user created event)
    // this.events.subscribe('data:loaded', (user, time) => {
      // user and time are the same arguments passed in events.publish(user, time)`
      // console.log('!!! DATA LOADED event', user, 'at', time);
      // ted konecne nactem
      // this.selectNode('//RECS[1]/R');
      // console.log(this.hermes.items.length);
     //                             this.items = this.globals.items;
      // });
  }

  /* setFilteredItems() {
        this.items = this.filterItems(this.searchTerm);
        console.log(" setFilteredItems na list.page.ts" + this.items);
        console.dir(this.items[0]);
  }
  filterItems(searchTerm){
        return this.globals.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });    
 
    }
  */

  zobrPage(item)
  {
    console.log("home.page.ts: zobrPage = " + item.id );

    this.router.navigate(['/play',item.id]);
    // this.globals.storeFile(id);



  }


}
