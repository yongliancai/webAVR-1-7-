const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');
const signupLink = document.getElementById('signupLink');

// 監聽登入表單的提交事件
loginForm.addEventListener('submit', (e) => {
  e.preventDefault(); // 阻止表單的默認提交行為

  const email = emailInput.value;
  const password = passwordInput.value;

  // 使用 Firebase Auth 登入
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // 登入成功，導向到 map.html 頁面
      window.location.href = 'map.html';
    })
    .catch((error) => {
      // 登入失敗，顯示錯誤訊息
      errorMessage.textContent = error.message;
    });
});

// 監聽註冊連結的點擊事件
signupLink.addEventListener('click', (e) => {
  e.preventDefault(); // 阻止點擊事件的默認行為

  // 導向到註冊頁面
  window.location.href = 'signup.html';
});
