import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public table: Person[]=[{"id": 1,"alter": 20,"vorname":"lucas","nachname":"banga"},
  {"id": 2,"alter": 21,"vorname":"jean","nachname":"philip"},{"id": 3,"alter": 19,"vorname":"coco","nachname":"lux"},
  {"id": 4,"alter": 25,"vorname":"conn","nachname":"wai"},{"id": 5,"alter": 26,"vorname":"hoha","nachname":"yess"},
  {"id": 6,"alter": 21,"vorname":"bebe","nachname":"niom"},{"id": 7,"alter": 29,"vorname":"rogg","nachname":"mill"},
  {"id": 8,"alter": 23,"vorname":"hann","nachname":"mont"},{"id": 9,"alter": 22,"vorname":"lola","nachname":"cand"},
   {"id": 10,"alter": 26,"vorname":"giga","nachname":"mann"},{"id": 11,"alter": 17,"vorname":"sam","nachname":"vega"},
  {"id": 12,"alter": 30,"vorname":"vivi","nachname":"brag"},{"id": 13,"alter": 24,"vorname":"emma","nachname":"bank"}];
  
  public tableSearchFail: Person[]=[{"id": 1,"alter": 20,"vorname":"lucas","nachname":"banga"},
  {"id": 2,"alter": 21,"vorname":"jean","nachname":"philip"},{"id": 3,"alter": 19,"vorname":"joco","nachname":"lux"},
  {"id": 4,"alter": 25,"vorname":"lonh","nachname":"wai"},{"id": 5,"alter": 26,"vorname":"hoha","nachname":"yess"},
  {"id": 6,"alter": 21,"vorname":"kebe","nachname":"niom"},{"id": 7,"alter": 29,"vorname":"jogg","nachname":"mill"},
  {"id": 8,"alter": 23,"vorname":"kann","nachname":"mont"},{"id": 9,"alter": 22,"vorname":"kola","nachname":"cand"},
   {"id": 10,"alter": 26,"vorname":"liga","nachname":"mann"},{"id": 11,"alter": 17,"vorname":"sam","nachname":"vega"},
  {"id": 12,"alter": 30,"vorname":"vivi","nachname":"brag"},{"id": 13,"alter": 24,"vorname":"emma","nachname":"bank"}];
  
 ngOnInit(){
   this.table=this.tableSearchFail;
 }

  public filterTable(key: string):void{
    const tableFilter: Person[]=[];
    for(const person of this.table){
      if(person.vorname.toLowerCase().indexOf(key.toLowerCase() ) !== -1||
       person.nachname.toLowerCase().indexOf(key.toLowerCase() ) !== -1){
        tableFilter.push(person);
      }
    }
    this.table = tableFilter;
    if(tableFilter.length==0||!key){
      this.table=this.tableSearchFail;
  }
}
}

