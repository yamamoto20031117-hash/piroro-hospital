/* =========================================================
   ピロロ病院 - 設定ファイル
   =========================================================
   このファイルに Firebase と EmailJS の情報を貼り付けてください。

   ■ 手順
   1. Firebase Console でプロジェクトを作り、ウェブアプリ設定から
      firebaseConfig オブジェクトをコピーして下に貼り付ける。
   2. EmailJS Dashboard で Service / Template を作成し、
      それぞれの ID と Public Key を下に貼り付ける。

   ※ これらはブラウザから参照される「公開キー」です。
     ただしFirestoreのセキュリティルールは必ず設定してください。
   ========================================================= */

window.PIRORO_CONFIG = {

  // ------- Firebase 設定 -------
  // Firebase Console > プロジェクト設定 > ウェブアプリの設定 に表示される内容
  firebase: {
    apiKey: "ここにAPIキーを貼り付け",
    authDomain: "xxxxx.firebaseapp.com",
    projectId: "xxxxx",
    storageBucket: "xxxxx.appspot.com",
    messagingSenderId: "xxxxx",
    appId: "xxxxx"
  },

  // ------- EmailJS 設定 -------
  // EmailJS Dashboard にある Service ID / Template ID / Public Key
  emailjs: {
    serviceId:  "service_xxxxxxx",
    templateId: "template_xxxxxxx",
    publicKey:  "xxxxxxxxxxxxxxxx"
  },

  // ------- 病院情報（メール本文などで使用） -------
  hospital: {
    name: "ピロロ病院",
    address: "",
    tel: ""
  }
};
