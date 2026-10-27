'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//ページが読み込まれるたびに実行
window.addEventListener('load', () => {
    //保存データがない場合、発表用のサンプルデータを一覧表示
    if(localStorage.getItem('recipeList') === null){
        const testData = [
            {
                dishName:"だし巻き卵",
                time:"10",
                ingredient:"卵：2個、めんつゆ:大さじ1、水：小さじ2、油：大さじ1",
                recipe:"①卵を溶く\n②卵にめんつゆと水を入れて混ぜる\n③フライパンに油をひく\n④卵をフライパンに薄く流し込み、半熟になったら巻く\n⑤④を繰り返す"
            },
            {   dishName:"味噌汁",
                time:"10",
                ingredient:"豆腐：1丁、味噌:大さじ1.5、出汁：400ml、乾燥わかめ：適量",
                recipe:"①豆腐を切る\n②出汁を沸騰させ、豆腐を入れる\n③味噌を溶かす\n④わかめをいれる"

            }
        ];
        localStorage.setItem("recipeList", JSON.stringify(testData));
    }

    //レシピのリストsavedListを取得し、recipeListに格納
   const savedList = localStorage.getItem('recipeList');
    let recipeList;

    if(savedList === null || savedList === ""){
        recipeList = [];
    }else{
    //localStorageはオブジェクトを直接格納できないため、JSON形式からオブジェクトに戻して取り出す
        recipeList = JSON.parse(savedList);
  }
    //レシピの一覧表示をまとめたdivタグを取得
    const recipeCardsList = document.querySelector('#recipeCardsList');

    //配列recipeListからレシピオブジェクトを抜き出し、各要素をdivタグに格納
    for(let i = recipeList.length-1; i >= 0; i--){

        //１つのレシピを格納するdiv作成
        const recipeBox = document.createElement('div');
        recipeBox.className = 'recipeBox';

        //レシピの内容を格納するdiv作成、クラス設定
        const dishName = document.createElement('div');
        dishName.className = 'dishname';

        const time = document.createElement('div');
        time.className = 'time';

        const ingredient = document.createElement('div');
        ingredient.className = 'ingredient';

        const recipe = document.createElement('div');
        recipe.className = 'recipe';

        //pタグ作成
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        dishName.innerText = recipeList[i]["dishName"];
        time.innerText = "目安 " + recipeList[i]["time"] + "分";
        ingredient.innerText = "材料";
        recipe.innerText = "作り方";
        p1.innerText = recipeList[i]["ingredient"];
        p2.innerText = recipeList[i]["recipe"];

        recipeBox.append(dishName);
        recipeBox.append(time);
        recipeBox.append(ingredient);
        ingredient.append(p1);
        recipeBox.append(recipe);
        recipe.append(p2);

        recipeCardsList.append(recipeBox);
    }
})


