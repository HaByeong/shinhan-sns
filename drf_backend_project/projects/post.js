const SERVAR_URL = "http://127.0.0.1:8000"

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

async function postArticle(article){
    let token = getCookie('access_token');
    let response = await fetch(`${SERVAR_URL}/blog/article`,{
        method: 'POST',
        body: article,
        headers: {
            'Authorization': `Bearer ${token}` // 헤더에 지정
        }
    })
    let data = await response.json();
    return data;
}
async function postCategory(){
    let token = getCookie('access_token');
    let category = {
        name: document.getElementById('category').value
    }
    console.log(category)
    let response = await fetch(`${SERVAR_URL}/blog/category`,{
        method: 'POST',
        body: JSON.stringify(category),
        headers: {
            'Content-type':'application/json',
            'Authorization': ` Bearer${token}`
        }
    });
    let data = await response.json();
    console.log(data);
    return data
}
async function submitCategory() {
    let formElement = document.getElementById('category');
    let formData = new FormData(formElement);
    let result = await postCategory(formData);
    console.log(result);
  }
async function submitArticle(){
    let form =document.getElementById('form')
    let formData = new FormData(form);
    let result = await postArticle(formData);
    console.log(result);
}