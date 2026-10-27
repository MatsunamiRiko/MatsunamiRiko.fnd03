'use strict'
// 1行目に記載している 'use strict' は削除しないでください

//登録ボタンが押されたときの処理
function registFunc() {
  //入力フォームに入力されたデータを取得し、recipeObjオブジェクトに格納
  const recipeObj = {
    dishName: document.querySelector('#dishname').value.trim(),
    time: document.querySelector('#time').value.trim(),
    ingredient: document.querySelector('#ingredient').value.trim(),
    recipe: document.querySelector('#recipe').value.trim()
  }

  //localStorageにある、既に登録されているレシピオブジェクトの配列、または空の配列を取得
  const savedList = localStorage.getItem('recipeList');
  let recipeList;

  if(savedList === null || savedList === ""){
    recipeList = [];
  }else{
    //localStorageはオブジェクトを直接格納できないため、JSON形式からオブジェクトに戻して取り出す
     recipeList = JSON.parse(savedList);
  }

  //新規登録されたrecipeObjをrecipeListに格納
  recipeList.push(recipeObj);

  //recipeListをlocalStorageに戻す
  //localStorageはオブジェクトを直接格納できないため、JSON変換を使う
  localStorage.setItem("recipeList", JSON.stringify(recipeList));

  //ホーム画面に戻る
  location.href = "home.html";
}

//登録ボタンを取得
const registerButton = document.querySelector('#btn');
//ボタンがクリックされたときに処理を実行
registerButton.addEventListener("click", registFunc);
