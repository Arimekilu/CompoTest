import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {myItem} from "./interfaces/item.interface";
import {Observable, of} from "rxjs";

@Injectable()

export class CatalogService {
  dbURL: string = 'blablabla'
  item: myItem = {
    name: 'Кроссовки мужские Skechers Sunny Dale',
    price: 166534.00,
    discount: 15,
    imgURL: 'asfasf',
    shippingDate: 'Завтра',
    packaged: 12,
    warehouses: ['Тарасовка', "Тарасовка"],
    balance: 7,
    description: 'Создание приверженного покупателя специфицирует неопровержимый комплексный анализ ситуации. CTR существенно индуцирует из ряда вон выходящий SWOT-анализ. Воздействие на потребителя определяет возрастающий интеграл по поверхности, что известно даже школьникам. Отсюда естественно следует, что коммуникация уравновешивает косвенный фактор коммуникации. Поле направлений естественно допускает экспериментальный скачок функции, таким образом сбылась мечта идиота - утверждение полностью доказано. Арифметическая прогрессия притягивает линейно зависимый пул лояльных изданий.',
    providerCode: 'ELC00696',
    raecCode: 'ELC00696',
    brand: 'Electric used',
    manufacturerCode: 'ELC0200000696',
    article: 'ELC0200000696',
    etmCode: 'ELC00696',
    series: 'ELC00696'
  }

  constructor(private http: HttpClient) {
  }

  // предположим, что данные получаем по ссылке dbURL/article в json формате
  private getItemByArticle(article: string) {
    return this.http.get(this.dbURL + article + '.json')
  }

  public getItemByArticle$(article: string): Observable<myItem> {
    // инкапсулирем метод
    // return this.getItemByArticle(article)
    return of(this.item)
  }

}
