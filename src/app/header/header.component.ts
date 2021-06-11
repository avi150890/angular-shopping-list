import { Component } from "@angular/core";
import { DataStorageServie } from "../shared/data-storage.service";

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent{
  constructor(private dataStorageService: DataStorageServie){}

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
  }
}