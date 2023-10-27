import { WSMessage } from "./types"

const data = [
    {
       "_id":"60666c42cc7b410027a1a9b1",
       "name":"Краторная булка N-200i",
       "type":"bun",
       "proteins":80,
       "fat":24,
       "carbohydrates":53,
       "calories":420,
       "price":1255,
       "image":"https://code.s3.yandex.net/react/code/bun-02.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/bun-02-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/bun-02-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b5",
       "name":"Говяжий метеорит (отбивная)",
       "type":"main",
       "proteins":800,
       "fat":800,
       "carbohydrates":300,
       "calories":2674,
       "price":3000,
       "image":"https://code.s3.yandex.net/react/code/meat-04.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/meat-04-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/meat-04-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b6",
       "name":"Биокотлета из марсианской Магнолии",
       "type":"main",
       "proteins":420,
       "fat":142,
       "carbohydrates":242,
       "calories":4242,
       "price":424,
       "image":"https://code.s3.yandex.net/react/code/meat-01.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/meat-01-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/meat-01-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b7",
       "name":"Соус Spicy-X",
       "type":"sauce",
       "proteins":30,
       "fat":20,
       "carbohydrates":40,
       "calories":30,
       "price":90,
       "image":"https://code.s3.yandex.net/react/code/sauce-02.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sauce-02-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sauce-02-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b4",
       "name":"Мясо бессмертных моллюсков Protostomia",
       "type":"main",
       "proteins":433,
       "fat":244,
       "carbohydrates":33,
       "calories":420,
       "price":1337,
       "image":"https://code.s3.yandex.net/react/code/meat-02.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/meat-02-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/meat-02-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b9",
       "name":"Соус традиционный галактический",
       "type":"sauce",
       "proteins":42,
       "fat":24,
       "carbohydrates":42,
       "calories":99,
       "price":15,
       "image":"https://code.s3.yandex.net/react/code/sauce-03.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sauce-03-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sauce-03-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b8",
       "name":"Соус фирменный Space Sauce",
       "type":"sauce",
       "proteins":50,
       "fat":22,
       "carbohydrates":11,
       "calories":14,
       "price":80,
       "image":"https://code.s3.yandex.net/react/code/sauce-04.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sauce-04-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bc",
       "name":"Плоды Фалленианского дерева",
       "type":"main",
       "proteins":20,
       "fat":5,
       "carbohydrates":55,
       "calories":77,
       "price":874,
       "image":"https://code.s3.yandex.net/react/code/sp_1.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sp_1-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sp_1-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bb",
       "name":"Хрустящие минеральные кольца",
       "type":"main",
       "proteins":808,
       "fat":689,
       "carbohydrates":609,
       "calories":986,
       "price":300,
       "image":"https://code.s3.yandex.net/react/code/mineral_rings.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/mineral_rings-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/mineral_rings-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9ba",
       "name":"Соус с шипами Антарианского плоскоходца",
       "type":"sauce",
       "proteins":101,
       "fat":99,
       "carbohydrates":100,
       "calories":100,
       "price":88,
       "image":"https://code.s3.yandex.net/react/code/sauce-01.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/sauce-01-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bd",
       "name":"Кристаллы марсианских альфа-сахаридов",
       "type":"main",
       "proteins":234,
       "fat":432,
       "carbohydrates":111,
       "calories":189,
       "price":762,
       "image":"https://code.s3.yandex.net/react/code/core.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/core-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/core-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9be",
       "name":"Мини-салат Экзо-Плантаго",
       "type":"main",
       "proteins":1,
       "fat":2,
       "carbohydrates":3,
       "calories":6,
       "price":4400,
       "image":"https://code.s3.yandex.net/react/code/salad.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/salad-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/salad-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b3",
       "name":"Филе Люминесцентного тетраодонтимформа",
       "type":"main",
       "proteins":44,
       "fat":26,
       "carbohydrates":85,
       "calories":643,
       "price":988,
       "image":"https://code.s3.yandex.net/react/code/meat-03.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/meat-03-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/meat-03-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9bf",
       "name":"Сыр с астероидной плесенью",
       "type":"main",
       "proteins":84,
       "fat":48,
       "carbohydrates":420,
       "calories":3377,
       "price":4142,
       "image":"https://code.s3.yandex.net/react/code/cheese.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/cheese-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/cheese-large.png",
       "__v":0
    },
    {
       "_id":"60666c42cc7b410027a1a9b2",
       "name":"Флюоресцентная булка R2-D3",
       "type":"bun",
       "proteins":44,
       "fat":26,
       "carbohydrates":85,
       "calories":643,
       "price":988,
       "image":"https://code.s3.yandex.net/react/code/bun-01.png",
       "image_mobile":"https://code.s3.yandex.net/react/code/bun-01-mobile.png",
       "image_large":"https://code.s3.yandex.net/react/code/bun-01-large.png",
       "__v":0
    }
 ]


export const wsData: WSMessage = {
      "success": true,
      "orders": [
          {
              "_id": "653bc3af52b4cf001d86de5f",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c"
              ],
              "status": "done",
              "name": "Краторный бургер",
              "createdAt": "2023-10-27T14:05:35.147Z",
              "updatedAt": "2023-10-27T14:05:35.413Z",
              "number": 24514
          },
          {
              "_id": "653bbc8b52b4cf001d86de47",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный spicy бургер",
              "createdAt": "2023-10-27T13:35:07.983Z",
              "updatedAt": "2023-10-27T13:35:08.234Z",
              "number": 24513
          },
          {
              "_id": "653bb4aa52b4cf001d86de30",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa093c"
              ],
              "status": "done",
              "name": "Space антарианский люминесцентный краторный бургер",
              "createdAt": "2023-10-27T13:01:30.665Z",
              "updatedAt": "2023-10-27T13:01:30.897Z",
              "number": 24512
          },
          {
              "_id": "653b97f852b4cf001d86ddc8",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space антарианский флюоресцентный бургер",
              "createdAt": "2023-10-27T10:59:04.664Z",
              "updatedAt": "2023-10-27T10:59:04.923Z",
              "number": 24511
          },
          {
              "_id": "653b7b1152b4cf001d86dd30",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space антарианский флюоресцентный бургер",
              "createdAt": "2023-10-27T08:55:45.693Z",
              "updatedAt": "2023-10-27T08:55:45.996Z",
              "number": 24510
          },
          {
              "_id": "653b780e52b4cf001d86dd1b",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Антарианский флюоресцентный spicy бургер",
              "createdAt": "2023-10-27T08:42:54.688Z",
              "updatedAt": "2023-10-27T08:42:54.952Z",
              "number": 24509
          },
          {
              "_id": "653b722552b4cf001d86dcff",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-27T08:17:41.848Z",
              "updatedAt": "2023-10-27T08:17:42.090Z",
              "number": 24508
          },
          {
              "_id": "653b6fd752b4cf001d86dcf3",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-27T08:07:51.851Z",
              "updatedAt": "2023-10-27T08:07:52.098Z",
              "number": 24507
          },
          {
              "_id": "653b569552b4cf001d86dc9c",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-27T06:20:05.654Z",
              "updatedAt": "2023-10-27T06:20:05.897Z",
              "number": 24506
          },
          {
              "_id": "653b4e6e52b4cf001d86dc8d",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный spicy бургер",
              "createdAt": "2023-10-27T05:45:18.501Z",
              "updatedAt": "2023-10-27T05:45:18.787Z",
              "number": 24505
          },
          {
              "_id": "653b4c4052b4cf001d86dc8b",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный spicy бургер",
              "createdAt": "2023-10-27T05:36:00.953Z",
              "updatedAt": "2023-10-27T05:36:01.156Z",
              "number": 24504
          },
          {
              "_id": "653b4c2a52b4cf001d86dc8a",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-27T05:35:38.266Z",
              "updatedAt": "2023-10-27T05:35:38.517Z",
              "number": 24503
          },
          {
              "_id": "653b49fb52b4cf001d86dc86",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa0940",
                  "643d69a5c3f7b9001cfa0940",
                  "643d69a5c3f7b9001cfa093c"
              ],
              "status": "done",
              "name": "Люминесцентный краторный метеоритный бургер",
              "createdAt": "2023-10-27T05:26:19.281Z",
              "updatedAt": "2023-10-27T05:26:19.639Z",
              "number": 24502
          },
          {
              "_id": "653b48fa52b4cf001d86dc83",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space антарианский флюоресцентный бургер",
              "createdAt": "2023-10-27T05:22:02.673Z",
              "updatedAt": "2023-10-27T05:22:02.949Z",
              "number": 24501
          },
          {
              "_id": "653b427f52b4cf001d86dc7b",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0941",
                  "643d69a5c3f7b9001cfa0941",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Био-марсианский люминесцентный флюоресцентный бургер",
              "createdAt": "2023-10-27T04:54:23.372Z",
              "updatedAt": "2023-10-27T04:54:23.606Z",
              "number": 24500
          },
          {
              "_id": "653b29b752b4cf001d86dc63",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0941",
                  "643d69a5c3f7b9001cfa0941",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Био-марсианский флюоресцентный бургер",
              "createdAt": "2023-10-27T03:08:39.035Z",
              "updatedAt": "2023-10-27T03:08:39.350Z",
              "number": 24499
          },
          {
              "_id": "653b296652b4cf001d86dc62",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0941",
                  "643d69a5c3f7b9001cfa0947",
                  "643d69a5c3f7b9001cfa0947",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Био-марсианский флюоресцентный фалленианский бургер",
              "createdAt": "2023-10-27T03:07:18.181Z",
              "updatedAt": "2023-10-27T03:07:18.409Z",
              "number": 24498
          },
          {
              "_id": "653b0d1c52b4cf001d86dc41",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-27T01:06:36.381Z",
              "updatedAt": "2023-10-27T01:06:36.664Z",
              "number": 24497
          },
          {
              "_id": "653aef3c52b4cf001d86dc02",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный spicy бургер",
              "createdAt": "2023-10-26T22:59:08.600Z",
              "updatedAt": "2023-10-26T22:59:08.884Z",
              "number": 24496
          },
          {
              "_id": "653ac2a052b4cf001d86db89",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0940",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Люминесцентный флюоресцентный метеоритный бургер",
              "createdAt": "2023-10-26T19:48:48.684Z",
              "updatedAt": "2023-10-26T19:48:48.942Z",
              "number": 24495
          },
          {
              "_id": "653ac28752b4cf001d86db88",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T19:48:23.518Z",
              "updatedAt": "2023-10-26T19:48:23.819Z",
              "number": 24494
          },
          {
              "_id": "653ab92052b4cf001d86db61",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space антарианский краторный бургер",
              "createdAt": "2023-10-26T19:08:16.465Z",
              "updatedAt": "2023-10-26T19:08:16.685Z",
              "number": 24493
          },
          {
              "_id": "653ab90652b4cf001d86db5f",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space антарианский краторный бургер",
              "createdAt": "2023-10-26T19:07:50.895Z",
              "updatedAt": "2023-10-26T19:07:51.162Z",
              "number": 24492
          },
          {
              "_id": "653aa6cc52b4cf001d86daf6",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0944",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Антарианский space традиционный-галактический флюоресцентный бургер",
              "createdAt": "2023-10-26T17:50:04.765Z",
              "updatedAt": "2023-10-26T17:50:05.006Z",
              "number": 24491
          },
          {
              "_id": "653aa45552b4cf001d86dadc",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T17:39:33.788Z",
              "updatedAt": "2023-10-26T17:39:34.655Z",
              "number": 24490
          },
          {
              "_id": "653a9dab52b4cf001d86da9a",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945"
              ],
              "status": "done",
              "name": "Space антарианский краторный бургер",
              "createdAt": "2023-10-26T17:11:07.482Z",
              "updatedAt": "2023-10-26T17:11:07.697Z",
              "number": 24489
          },
          {
              "_id": "653a9d9152b4cf001d86da99",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T17:10:41.969Z",
              "updatedAt": "2023-10-26T17:10:42.217Z",
              "number": 24488
          },
          {
              "_id": "653a9d7a52b4cf001d86da95",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T17:10:18.181Z",
              "updatedAt": "2023-10-26T17:10:18.424Z",
              "number": 24487
          },
          {
              "_id": "653a973d52b4cf001d86da50",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Флюоресцентный бургер",
              "createdAt": "2023-10-26T16:43:41.098Z",
              "updatedAt": "2023-10-26T16:43:41.336Z",
              "number": 24486
          },
          {
              "_id": "653a965552b4cf001d86da4a",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa0940",
                  "643d69a5c3f7b9001cfa093e"
              ],
              "status": "done",
              "name": "Люминесцентный краторный метеоритный бургер",
              "createdAt": "2023-10-26T16:39:49.979Z",
              "updatedAt": "2023-10-26T16:39:50.222Z",
              "number": 24485
          },
          {
              "_id": "653a955f52b4cf001d86da43",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T16:35:43.998Z",
              "updatedAt": "2023-10-26T16:35:44.321Z",
              "number": 24484
          },
          {
              "_id": "653a94e452b4cf001d86da3a",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space краторный бургер",
              "createdAt": "2023-10-26T16:33:40.941Z",
              "updatedAt": "2023-10-26T16:33:41.224Z",
              "number": 24483
          },
          {
              "_id": "653a8d7352b4cf001d86d9eb",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa094a"
              ],
              "status": "done",
              "name": "Астероидный краторный spicy бургер",
              "createdAt": "2023-10-26T16:01:55.715Z",
              "updatedAt": "2023-10-26T16:01:55.958Z",
              "number": 24482
          },
          {
              "_id": "653a885852b4cf001d86d9db",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Флюоресцентный бургер",
              "createdAt": "2023-10-26T15:40:08.534Z",
              "updatedAt": "2023-10-26T15:40:08.790Z",
              "number": 24481
          },
          {
              "_id": "653a833e52b4cf001d86d9ce",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный spicy бургер",
              "createdAt": "2023-10-26T15:18:22.278Z",
              "updatedAt": "2023-10-26T15:18:22.527Z",
              "number": 24480
          },
          {
              "_id": "653a831652b4cf001d86d9cd",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T15:17:42.943Z",
              "updatedAt": "2023-10-26T15:17:43.191Z",
              "number": 24479
          },
          {
              "_id": "653a80a952b4cf001d86d9c6",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0945"
              ],
              "status": "done",
              "name": "Антарианский флюоресцентный бургер",
              "createdAt": "2023-10-26T15:07:21.595Z",
              "updatedAt": "2023-10-26T15:07:21.883Z",
              "number": 24478
          },
          {
              "_id": "653a69e452b4cf001d86d990",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space антарианский флюоресцентный бургер",
              "createdAt": "2023-10-26T13:30:12.149Z",
              "updatedAt": "2023-10-26T13:30:12.385Z",
              "number": 24477
          },
          {
              "_id": "653a676a52b4cf001d86d986",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa094a",
                  "643d69a5c3f7b9001cfa0944",
                  "643d69a5c3f7b9001cfa094a",
                  "643d69a5c3f7b9001cfa0944"
              ],
              "status": "done",
              "name": "Традиционный-галактический астероидный флюоресцентный бургер",
              "createdAt": "2023-10-26T13:19:38.485Z",
              "updatedAt": "2023-10-26T13:19:38.784Z",
              "number": 24476
          },
          {
              "_id": "653a586152b4cf001d86d95f",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T12:15:29.037Z",
              "updatedAt": "2023-10-26T12:15:29.252Z",
              "number": 24475
          },
          {
              "_id": "653a571352b4cf001d86d95b",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T12:09:55.365Z",
              "updatedAt": "2023-10-26T12:09:55.586Z",
              "number": 24474
          },
          {
              "_id": "653a524a52b4cf001d86d951",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T11:49:30.728Z",
              "updatedAt": "2023-10-26T11:49:30.995Z",
              "number": 24473
          },
          {
              "_id": "653a491852b4cf001d86d93c",
              "ingredients": [
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space антарианский флюоресцентный spicy бургер",
              "createdAt": "2023-10-26T11:10:16.596Z",
              "updatedAt": "2023-10-26T11:10:16.815Z",
              "number": 24472
          },
          {
              "_id": "653a477452b4cf001d86d939",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa094a"
              ],
              "status": "done",
              "name": "Астероидный краторный spicy бургер",
              "createdAt": "2023-10-26T11:03:16.071Z",
              "updatedAt": "2023-10-26T11:03:16.313Z",
              "number": 24471
          },
          {
              "_id": "653a472552b4cf001d86d936",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa094a"
              ],
              "status": "done",
              "name": "Астероидный краторный spicy бургер",
              "createdAt": "2023-10-26T11:01:57.391Z",
              "updatedAt": "2023-10-26T11:01:57.650Z",
              "number": 24470
          },
          {
              "_id": "653a45cf52b4cf001d86d92d",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093c",
                  "643d69a5c3f7b9001cfa0942",
                  "643d69a5c3f7b9001cfa094a"
              ],
              "status": "done",
              "name": "Астероидный краторный spicy бургер",
              "createdAt": "2023-10-26T10:56:15.453Z",
              "updatedAt": "2023-10-26T10:56:15.688Z",
              "number": 24469
          },
          {
              "_id": "653a41cd52b4cf001d86d91e",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0945"
              ],
              "status": "done",
              "name": "Антарианский флюоресцентный бургер",
              "createdAt": "2023-10-26T10:39:09.910Z",
              "updatedAt": "2023-10-26T10:39:10.192Z",
              "number": 24468
          },
          {
              "_id": "653a39fc52b4cf001d86d8ef",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa093e",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa094a",
                  "643d69a5c3f7b9001cfa093f",
                  "643d69a5c3f7b9001cfa0945",
                  "643d69a5c3f7b9001cfa0940"
              ],
              "status": "done",
              "name": "Бессмертный space астероидный флюоресцентный люминесцентный антарианский метеоритный бургер",
              "createdAt": "2023-10-26T10:05:48.777Z",
              "updatedAt": "2023-10-26T10:05:49.056Z",
              "number": 24467
          },
          {
              "_id": "653a353b52b4cf001d86d8e7",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T09:45:31.837Z",
              "updatedAt": "2023-10-26T09:45:32.062Z",
              "number": 24466
          },
          {
              "_id": "653a25b352b4cf001d86d8b5",
              "ingredients": [
                  "643d69a5c3f7b9001cfa093d",
                  "643d69a5c3f7b9001cfa0943",
                  "643d69a5c3f7b9001cfa093d"
              ],
              "status": "done",
              "name": "Space флюоресцентный бургер",
              "createdAt": "2023-10-26T08:39:15.445Z",
              "updatedAt": "2023-10-26T08:39:15.687Z",
              "number": 24465
          }
      ],
      "total": 24140,
      "totalToday": 32
  }

 export default data;