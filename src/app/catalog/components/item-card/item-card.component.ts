import {Component, OnInit} from '@angular/core';
import {myItem} from "../../interfaces/item.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {CatalogService} from "../../catalog.service";

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss']
})
export class ItemCardComponent implements OnInit {
  item?: myItem

  constructor(private catalogService: CatalogService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    // при переходе по ссылке получаем из нее артикул и идем в базу за айтемом
    this.route.params.subscribe((params) => {
      this.catalogService.getItemByArticle$(params["article"]).subscribe(
        (result) => {
          this.item = result
        }
      )
    })
  }

}
